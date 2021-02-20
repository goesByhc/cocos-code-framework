/**
 * Created by HanChao on 2020/6/15
 */
import {GameMessageS2C} from "./MessageDefine";
import {C2S_Heart, MC2S, MessageType, MS2C, S2C_Heart} from "./GameMessage";
import {getMessageNameById, getMessagePrototypeById} from "./MessageTransferAuto";
import {EventCenter, postEvent} from "../util/EventCenter";
import {FrameEventDefine} from "../define/FrameEventDefine";
import Util from "../util/Util";
import {PromiseCallBack} from "../define/CommonDefine";
import GameWorld from "../../game/scripts/config/GameWorld";
import GameUser from "../../game/scripts/data/GameUser";
import GameGlobalData from "../../game/scripts/data/GameGlobalData";
import Logger from "../util/Logger";

export enum WebSocketReadyState {
    CONNECTING = 0,
    OPEN = 1,
    CLOSING = 2,
    CLOSED = 3,
}

export interface GateWayResult {
    openId: string,
    ip: string,
    port: number
}

export enum HTTPType {
    Get = "GET",
    Post = "POST",
}

export interface NetworkListener {
    onOpen?: (ev: Event) => void;
    onMessage: (s2c: GameMessageS2C) => void;
    onClose?: (ev: CloseEvent) => void;
    onError?: (ev: Event) => void;
}

export default class Network {

    private static instance: Network = null;

    static getInstance(): Network {
        if (this.instance == null) {
            this.instance = new Network();
        }
        return this.instance;
    }

    private constructor() {
        if (Network.instance != null) {
            Util.Error("duplicated new instance " + this.constructor.name + "!");
        }
    }

    url: string = "";
    port: number = 0;

    ws: WebSocket;
    lockReconnect = false;
    isKicked: boolean = false;
    isReconnect: boolean = false;

    callbacks: Map<number, PromiseCallBack> = new Map<number, PromiseCallBack>();

    reconnectTimes: number = 0;

    listeners: NetworkListener[] = [];

    connectUrl(url: string) {

        Logger.logNetwork("ws connect:", url);

        // let url = "ws://127.0.0.1/ws:7878"
        let ws = new WebSocket(url);
        this.url = url;
        this.ws = ws;
        ws.binaryType = 'arraybuffer';
        ws.onopen = this.onOpen.bind(this);
        ws.onmessage = this.onMessage.bind(this);
        ws.onclose = this.onClose.bind(this);
        ws.onerror = this.onError.bind(this);

    }

    registerListener(listener: NetworkListener) {
        this.listeners.push(listener);
    }

    removeListener(listener: NetworkListener) {
        let idx = this.listeners.indexOf(listener);
        if (idx == -1) {
            return;
        }
        this.listeners.splice(idx, 1);
    }

    connect(host: string, port: number) {
        let url = `ws://${host}:${port}`;
        this.connectUrl(url);
    }


    onOpen(ev: Event) {
        Logger.logNetwork("ws onOpen");
        this.isKicked = false;
        this.reconnectTimes = 0;
        postEvent(FrameEventDefine.EventNetworkConnected);

        this.listeners.forEach((value, index, array) => {
            if (value.onOpen) {
                value.onOpen(ev);
            }
        });
    }

    send(commandId: MessageType.Enums, obj: object) {
        Logger.logNetwork("ws send, commandId:", getMessageNameById(commandId), cc.sys.isNative ? JSON.stringify(obj) : obj);
        this.sendData(commandId, getMessagePrototypeById(commandId).encode(obj).finish());
    }

    async asyncSend<T>(commandId: MessageType.Enums, obj: object, waitCommandId?: MessageType.Enums): Promise<T> {
        return new Promise((resolve, reject) => {
            this.send(commandId, obj);
            if (!waitCommandId) {
                waitCommandId = -commandId;
            }
            let callBack = new PromiseCallBack(resolve, reject);
            this.callbacks.set(waitCommandId, callBack);
        })
    }

    isWSOpen(): boolean {
        return this.ws.readyState == WebSocketReadyState.OPEN;
    }

    private sendData(commandId: number, data: Uint8Array) {

        if (!this.isWSOpen()) {
            console.error("Websocket ReadyState is Not Open");
        }

        let msg = new MC2S();
        msg.commandId = commandId;
        msg.data = data;
        let buffer = MC2S.encode(msg).finish(); //TODO:这里优化，使用一个writer完成序列化，现在data和MC2S各序列化了一次

        let ab = new ArrayBuffer(buffer.byteLength); //微信上必须传ArrayBuffer，要用这种方式往ArrayBuffer里写入数据
        let dv = new Uint8Array(ab);

        buffer.forEach((v, i) => {
            dv[i] = v;
        });

        // console.log("send array buffer", ab);

        this.ws.send(ab);


    }

    onMessage(ev: MessageEvent) {

        // let uint8Array = new ArrayBuffer(ev.data);
        // console.log("ws onMessage buffer:", ev.data);
        let proto = MS2C.decode(new Uint8Array(ev.data));
        // console.log("ws onMessage, commandId:", proto.commandId);
        let message = new GameMessageS2C(proto);

        Logger.logNetwork("ws onMessage", getMessageNameById(message.commandId), cc.sys.isNative ? JSON.stringify(message.body) : message.body);

        if (message.dmError != 0) {
            Network.getInstance().disconnect();
            postEvent(FrameEventDefine.EventNetworkError);
            console.error("Network Message Error", getMessageNameById(message.commandId), "code:" + message.dmError, "message:", message.errorMsg);
        }

        this.dealMessage(message);
    }

    dealMessage(message: GameMessageS2C) {

        let callback = this.callbacks.get(message.commandId);
        if (callback) {
            callback.resolve(message.body);
            this.callbacks.delete(message.commandId);
        }

        this.listeners.forEach((value, index, array) => {
            value.onMessage(message);
        });

        postEvent(message.commandId, message.body);
    }

    disconnect() {
        this.isKicked = true;
        this.ws.close();
    }

    onError(ev: Event) {
        Logger.logNetwork("ws onError ", ev);
        if (!this.isKicked) {
            this.reconnect();
        }

        this.listeners.forEach((value, index, array) => {
            if (value.onError) {
                value.onError(ev);
            }
        });
    }

    onClose(ev: CloseEvent) {
        Logger.logNetwork("ws onClose", "code:", ev.code, ev.reason);
        if (!this.isKicked) {
            this.reconnect();
        }
        this.heartCheck.reset();
        this.listeners.forEach((value, index, array) => {
            if (value.onClose) {
                value.onClose(ev);
            }
        });
    }

    reconnect() {
        if (this.lockReconnect) return;

        this.reconnectTimes++;

        if (this.reconnectTimes >= GameWorld.maxTryReconnectTimes) {
            Logger.logNetwork("ws reconnect fail");
            postEvent(FrameEventDefine.EventNetworkReconnectFail);
            return;
        }

        this.lockReconnect = true;
        this.isReconnect = true;

        postEvent(FrameEventDefine.EventNetworkReconnecting);

        setTimeout(() => {
            // this.connectUrl(this.url);
            this.match();
            this.lockReconnect = false;
        }, GameWorld.networkReconnectInterval);
    }

    match() {

        let url = GameWorld.env.matchServerUrl + GameWorld.env.matchServerUrlSuffix;
        Network.getInstance().asyncSendHttp(url, {uid: GameUser.getInstance().uid})
            .then((data) => {
                console.log("onMatchResult:", JSON.stringify(data));

                GameGlobalData.getInstance().roomId = data.room_id.toString();

                Network.getInstance().connectUrl(data.ws_addr)
            }).catch((data) => {
            Util.showErrorTips(JSON.stringify(data));
            postEvent(FrameEventDefine.EventNetworkError);
        })

    }


    goToLoginScene() {

        if (cc.director.getScene().name != "login") {
            GameUser.getInstance().reset();
            cc.director.loadScene("login", () => {
                EventCenter.postEvent(FrameEventDefine.EventNetworkReconnecting);
            });
        }

    }

    asyncSendHttp(url: string, params: any, httpType = HTTPType.Get): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            let xhr = cc.loader.getXMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    let response = xhr.responseText;
                    Logger.logNetwork("responseHttp  url: " + url + "\nresponseData: " + response);
                    let reData = JSON.parse(response);
                    if (reData.dm_error != 0) {
                        Logger.logNetwork("reject dm_error: ", reData.dm_error);
                        reject(reData);
                        //操作失败
                    } else {
                        //操作成功
                        resolve(reData.data);
                    }
                }
            };


            if (httpType == HTTPType.Get && params) {
                let hasKey = false;
                for(let key in params) {
                    if (!hasKey) {
                        url += "?";
                        hasKey = true;
                    } else {
                        url += "&";
                    }
                    url += `${key}=${params[key]}`;
                }
            }

            xhr.open(httpType, url, true);
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.timeout = GameWorld.httpRequestTimeOut;
            Logger.logNetwork(`sendHttp url: ${url}  requestData: ${JSON.stringify(params)}`);
            xhr.send(httpType == HTTPType.Post ? JSON.stringify(params) : "");
        })

    }


    heartCheck = {
        timeoutObj: null,
        reset: function () {
            clearTimeout(this.timeoutObj);
            return this;
        },
        start: function () {
            let msg = new C2S_Heart();
            msg.roomId = GameGlobalData.getInstance().roomId;
            msg.uid = GameUser.getInstance().uid;

            this.timeoutObj = setInterval(()=>{
                if (Network.getInstance().isWSOpen()) {
                    Network.getInstance().send(MessageType.Enums.C2S_Heart, msg);
                }
            }, GameWorld.heartTime);
        }
    }


}
