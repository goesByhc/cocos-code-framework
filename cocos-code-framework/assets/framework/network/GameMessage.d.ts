import * as $protobuf from "../libs/protobuf";
import {Long} from "../libs/protobuf";
export interface IMS2C {
    commandId?: (number|null);
    dmError?: (number|null);
    errorMsg?: (string|null);
    data?: (Uint8Array|null);
}

export class MS2C implements IMS2C {
    constructor(properties?: IMS2C);
    public commandId: (number);
    public dmError: (number);
    public errorMsg: string;
    public data: Uint8Array;
    public static create(properties?: IMS2C): MS2C;
    public static encode(message: IMS2C, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IMS2C, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MS2C;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MS2C;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): MS2C;
    public static toObject(message: MS2C, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IMC2S {
    commandId?: (number|null);
    data?: (Uint8Array|null);
}

export class MC2S implements IMC2S {
    constructor(properties?: IMC2S);
    public commandId: (number);
    public data: Uint8Array;
    public static create(properties?: IMC2S): MC2S;
    public static encode(message: IMC2S, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IMC2S, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MC2S;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MC2S;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): MC2S;
    public static toObject(message: MC2S, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IMessageType {
}

export class MessageType implements IMessageType {
    constructor(properties?: IMessageType);
    public static create(properties?: IMessageType): MessageType;
    public static encode(message: IMessageType, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IMessageType, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MessageType;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MessageType;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): MessageType;
    public static toObject(message: MessageType, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export namespace MessageType {

    enum Enums {
        Unknown = 0,
        C2S_Heart = 1,
        S2C_Heart = -1
    }
}

export interface IC2S_Heart {
    uid?: (string|null);
    roomId?: (string|null);
}

export class C2S_Heart implements IC2S_Heart {
    constructor(properties?: IC2S_Heart);
    public uid: string;
    public roomId: string;
    public static create(properties?: IC2S_Heart): C2S_Heart;
    public static encode(message: IC2S_Heart, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IC2S_Heart, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2S_Heart;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2S_Heart;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): C2S_Heart;
    public static toObject(message: C2S_Heart, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IS2C_Heart {
    roomId?: (string|null);
    timeStamp?: (number|null);
}

export class S2C_Heart implements IS2C_Heart {
    constructor(properties?: IS2C_Heart);
    public roomId: string;
    public timeStamp: (number);
    public static create(properties?: IS2C_Heart): S2C_Heart;
    public static encode(message: IS2C_Heart, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IS2C_Heart, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2C_Heart;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2C_Heart;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): S2C_Heart;
    public static toObject(message: S2C_Heart, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}
