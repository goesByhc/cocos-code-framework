import {C2S_Heart, S2C_Heart, MessageType} from "./GameMessage";
import Util from "../util/Util";

export function getMessagePrototypeById(id: MessageType.Enums): {encode: Function, decode: Function, create: Function} {
	switch (id) {
		case MessageType.Enums.C2S_Heart:
			return C2S_Heart;
		case MessageType.Enums.S2C_Heart:
			return S2C_Heart;
	}
	Util.Error("Unknown Message Type Id: " + id);
}



export function getMessageNameById(id: MessageType.Enums): string {
	switch (id) {
		case MessageType.Enums.Unknown:
			return "Unknown";
		case MessageType.Enums.C2S_Heart:
			return "C2S_Heart";
		case MessageType.Enums.S2C_Heart:
			return "S2C_Heart";
	}
	Util.Error("Unknown Message Type Id: " + id);
}



