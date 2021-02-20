/**
 * Created by HanChao on 2020/6/19
 */
import { GameMessageS2C } from "../network/MessageDefine";
import { getMessagePrototypeById } from "../network/MessageTransferAuto";
import Network from "../network/Network";


const {ccclass, property} = cc._decorator;
@ccclass
export default class UITestMessage extends cc.Component {

    @property(cc.EditBox)
    editBoxCommandId: cc.EditBox = null;

    @property(cc.EditBox)
    editBoxBody: cc.EditBox = null;


    onLoad() {

    }


    send() {
        let id = Number(this.editBoxCommandId.string);
        let string = this.editBoxBody.string || "";
        let body = JSON.parse(string);

        let msg = getMessagePrototypeById(id).create(body);

        Network.getInstance().send(id, msg);


        // {"areaId": 100001, "buildingId": 400001}
    }


    onClickSendToSelf() {
        let id = Number(this.editBoxCommandId.string);
        let string = this.editBoxBody.string || "";
        let body = JSON.parse(string);

        let msg = getMessagePrototypeById(id).create(body);

        let s2c = new GameMessageS2C(null);
        s2c.commandId = id;
        s2c.body = msg;

        Network.getInstance().dealMessage(s2c);

    }

    onClickHide() {
        this.node.active = false;
    }


}