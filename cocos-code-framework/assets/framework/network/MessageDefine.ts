import {getMessagePrototypeById} from "./MessageTransferAuto";
import {MC2S, MS2C} from "./GameMessage";

export class GameMessageS2C {
    commandId: number;
    dmError: number;
    errorMsg: string;
    body: any; //protobuf

    constructor(proto?: MS2C) {

        if (!proto) {
            return;
        }
        this.commandId = proto.commandId;
        this.dmError = proto.dmError;
        this.errorMsg = proto.errorMsg;

        let bodyProto = getMessagePrototypeById(proto.commandId);
        this.body = bodyProto.decode(proto.data);
    }

    setData(commandId: number, body: any) {
        this.commandId = commandId;
        this.body = body;
    }

    getData<T>(type: {prototype: T}): T {
        return this.body;
    }
}


export class GameMessageC2S {
    commandId: number;
    body: any; // C2S_...

    constructor(proto: MC2S) {

        if (!proto) {
            return;
        }
        this.commandId = proto.commandId;

        let bodyProto = getMessagePrototypeById(proto.commandId);
        this.body = bodyProto.decode(proto.data);
    }

    getData<T>(type: {prototype: T}): T {
        return this.body;
    }
}



