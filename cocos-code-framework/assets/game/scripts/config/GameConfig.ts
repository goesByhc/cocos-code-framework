/**
 * Created by Chao.Han on 2020/11/25
 */

import Util from "../../../framework/util/Util";
import GameConfigAll from "../../../framework/config/GameConfigWrapper";
import Logger from "../../../framework/util/Logger";
import {IConfigAudio, IConfigLanguage} from "../../../framework/config/GameConfigAll";

export default class GameConfig {

    private static instance: GameConfig = null;

    static getInstance(): GameConfig {
        if (this.instance == null) {
            this.instance = new GameConfig();
        }
        return this.instance;
    }

    private constructor() {
        if (GameConfig.instance != null) {
            Util.Error("duplicated new instance " + this.constructor.name + "!");
        }
    }

    private configAll: GameConfigAll = null;

    private audiosMap: Map<number, IConfigAudio> = new Map<number, IConfigAudio>();
    private languagesMap: Map<string, IConfigLanguage> = new Map<string, IConfigLanguage>();

    async init() {
        if (this.configAll !== null) {
            Logger.logConfig("数据已经加载完成，请勿重复加载");
            return;
        }

        this.configAll = new GameConfigAll();
        await this.configAll.load();
        this.preProcess();

        Logger.logConfig("数据加载完毕");

        if (CC_DEBUG) {
            Logger.logConfig(this.configAll);
        }

    }

    private preProcess() {
        this.configToMap(this.configAll.language, this.languagesMap, "id");
        this.configToMap(this.configAll.audio, this.audiosMap, "typeId");
    }

    private configToMap<T>(list: T[], map: Map<any, T>, key: string) {
        for (let i = 0, length = list.length; i < length; i++) {
            let listObj = list[i];
            map.set(listObj[key], listObj);
        }
    }

    static getConfig(): GameConfigAll {
        return this.getInstance().configAll;
    }

    getAudio(typeId: number): string {
        let config = this.audiosMap.get(typeId);
        if (config == null) {
            Logger.logConfig("cannot getAudio typeId:", typeId);
        }
        return config.path;
    }

}
