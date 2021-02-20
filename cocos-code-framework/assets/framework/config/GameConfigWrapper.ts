import { ConfigAudioList , IConfigAudio,ConfigConstants , IConfigConstants, ConfigLanguageList , IConfigLanguage} from "./GameConfigAll";
import BundleManager from "../util/BundleManager";
import Logger from "../util/Logger";


export default class GameConfigAll {
    audio: IConfigAudio[];
    constants: IConfigConstants;
    language: IConfigLanguage[];



    async readFromBinaryFile(key: string, file: string, proto): Promise<void> {
        return new Promise((resolve, reject) => {
            BundleManager.getInstance().frameBundle.load(file, (err, data: cc.Asset) => {
                if (err) {
                    Logger.error("GameConfigAll readFromBinaryFile file:", file, "error:", err);
                }
                cc.assetManager.loadAny({url: data.nativeUrl, type: "binary"}, (err, file: Uint8Array) => {
                    if (err) {
                        Logger.logBase("Config readFromBinaryFile Error: " + data.nativeUrl + err.message);
                        Logger.logBase("Config readFromBinaryFile Error: " + err);
                    }
                    try {
                        let byteArray = new Uint8Array(file);
                        this[key] = proto.decode(byteArray).list;
                        resolve();
                    } catch (e) {
                        throw new Error(e);
                    }
                });
            })
        });
    }

    async readConstantFromBinaryFile(key: string, file: string, proto): Promise<void> {
        return new Promise((resolve, reject) => {
            BundleManager.getInstance().frameBundle.load(file, (err, data: cc.Asset) => {
                if (err) {
                    Logger.error("GameConfigAll readConstantFromBinaryFile file:", file, "error:", err);
                }
                cc.assetManager.loadAny({url: data.nativeUrl, type: "binary"}, (err, file: Uint8Array) => {
                    if (err) {
                        Logger.logBase("Config readConstantFromBinaryFile Error: " + data.nativeUrl + err.message);
                        Logger.logBase("Config readConstantFromBinaryFile Error: " + err);
                    }
                    try {
                        let byteArray = new Uint8Array(file);
                        this[key] = proto.decode(byteArray);
                        resolve();
                    } catch (e) {
                        throw new Error(e);
                    }
                });
            });
        });
    }
    
    async load() {
        let audio = this.readFromBinaryFile("audio", "archive/audio", ConfigAudioList);
        let constants = this.readConstantFromBinaryFile("constants", "archive/constants", ConfigConstants);
        let language = this.readFromBinaryFile("language", "archive/language", ConfigLanguageList);
        await Promise.all([audio,constants,language]);
   }
}
