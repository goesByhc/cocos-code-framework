/**
 * Created by Chao.Han on 2020/11/26
 */
import Util from "../../../framework/util/Util";
import { GameMessageS2C } from "../../../framework/network/MessageDefine";
import {IPlayerInitInfo, MessageType, PlayerInitInfo, S2C_JoinRoom} from "../../../framework/network/GameMessage";

export default class GameUser {

    private static instance: GameUser = null;


    static getInstance(): GameUser {
        if (this.instance == null) {
            this.instance = new GameUser();
        }
        return this.instance;
    }

    private constructor() {
        if (GameUser.instance != null) {
            Util.Error("duplicated new instance " + this.constructor.name + "!");
        }
    }

    uid: string;

    onGetMessage(message: GameMessageS2C) {

    }

    reset() {

    }

    isSelf(uid: string): boolean {
        return uid == this.uid;
    }
}
