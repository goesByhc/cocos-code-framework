import * as $protobuf from "protobufjs";
export interface IConfigAudioList {
    list?: (IConfigAudio[]|null);
}

export class ConfigAudioList implements IConfigAudioList {
    constructor(properties?: IConfigAudioList);
    public list: IConfigAudio[];
    public static create(properties?: IConfigAudioList): ConfigAudioList;
    public static encode(message: IConfigAudioList, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IConfigAudioList, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConfigAudioList;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConfigAudioList;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ConfigAudioList;
    public static toObject(message: ConfigAudioList, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IConfigAudio {
    typeId?: (number|null);
    path?: (string|null);
}

export class ConfigAudio implements IConfigAudio {
    constructor(properties?: IConfigAudio);
    public typeId: number;
    public path: string;
    public static create(properties?: IConfigAudio): ConfigAudio;
    public static encode(message: IConfigAudio, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IConfigAudio, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConfigAudio;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConfigAudio;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ConfigAudio;
    public static toObject(message: ConfigAudio, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IConfigConstants {
    gameName?: (string|null);
    maxPlayerCount?: (number|null);
    maxChessCount?: (number|null);
    energyCount?: (number|null);
    gameStartCountDown?: (number|null);
    playerActionOverTime?: (number|null);
    TypeTriggerConfig?: (number|null);
    TypeTriggerCondition?: (number|null);
    TypeTriggerEffect?: (number|null);
    TypeTargetSelector?: (number|null);
    TypeRandomPool?: (number|null);
    TypeGrid?: (number|null);
    TypePlayer?: (number|null);
    TypeChessGroup?: (number|null);
    TypeStar?: (number|null);
}

export class ConfigConstants implements IConfigConstants {
    constructor(properties?: IConfigConstants);
    public gameName: string;
    public maxPlayerCount: number;
    public maxChessCount: number;
    public energyCount: number;
    public gameStartCountDown: number;
    public playerActionOverTime: number;
    public TypeTriggerConfig: number;
    public TypeTriggerCondition: number;
    public TypeTriggerEffect: number;
    public TypeTargetSelector: number;
    public TypeRandomPool: number;
    public TypeGrid: number;
    public TypePlayer: number;
    public TypeChessGroup: number;
    public TypeStar: number;
    public static create(properties?: IConfigConstants): ConfigConstants;
    public static encode(message: IConfigConstants, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IConfigConstants, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConfigConstants;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConfigConstants;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ConfigConstants;
    public static toObject(message: ConfigConstants, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface ICamp {
}

export class Camp implements ICamp {
    constructor(properties?: ICamp);
    public static create(properties?: ICamp): Camp;
    public static encode(message: ICamp, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ICamp, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Camp;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Camp;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Camp;
    public static toObject(message: Camp, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export namespace Camp {

    enum Enums {
        None = 0,
        Green = 1,
        Blue = 2,
        Red = 3,
        Yellow = 4
    }
}

export interface ITriggerStage {
}

export class TriggerStage implements ITriggerStage {
    constructor(properties?: ITriggerStage);
    public static create(properties?: ITriggerStage): TriggerStage;
    public static encode(message: ITriggerStage, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ITriggerStage, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TriggerStage;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TriggerStage;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): TriggerStage;
    public static toObject(message: TriggerStage, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export namespace TriggerStage {

    enum Enums {
        None = 0,
        BeforeRoundStart = 1
    }
}

export interface IAudioResource {
}

export class AudioResource implements IAudioResource {
    constructor(properties?: IAudioResource);
    public static create(properties?: IAudioResource): AudioResource;
    public static encode(message: IAudioResource, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IAudioResource, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AudioResource;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AudioResource;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): AudioResource;
    public static toObject(message: AudioResource, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export namespace AudioResource {

    enum Enums {
        Default = 0,
        BGM2 = 1,
        Jump = 2,
        BtnClick = 3,
        Move1 = 4,
        Energy = 5,
        Tip1 = 6,
        Across = 7,
        Window = 8,
        Win2 = 9,
        Finish = 10,
        Roll = 11,
        God = 12,
        Skill = 13,
        UseSkill = 14,
        Together = 15,
        HitChess = 16,
        Storm = 17,
        Thorns = 18
    }
}

export interface IConfigLanguageList {
    list?: (IConfigLanguage[]|null);
}

export class ConfigLanguageList implements IConfigLanguageList {
    constructor(properties?: IConfigLanguageList);
    public list: IConfigLanguage[];
    public static create(properties?: IConfigLanguageList): ConfigLanguageList;
    public static encode(message: IConfigLanguageList, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IConfigLanguageList, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConfigLanguageList;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConfigLanguageList;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ConfigLanguageList;
    public static toObject(message: ConfigLanguageList, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IConfigLanguage {
    id?: (string|null);
    cn?: (string|null);
}

export class ConfigLanguage implements IConfigLanguage {
    constructor(properties?: IConfigLanguage);
    public id: string;
    public cn: string;
    public static create(properties?: IConfigLanguage): ConfigLanguage;
    public static encode(message: IConfigLanguage, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IConfigLanguage, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConfigLanguage;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConfigLanguage;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ConfigLanguage;
    public static toObject(message: ConfigLanguage, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}
