/**
 * Created by Chao.Han on 2021/01/11
 */

import GameConfig from "../../game/scripts/config/GameConfig";
import Util from "./Util";
import {AudioResource} from "../config/GameConfigAll";
import GameEasing from "./GameEasing";
import GameMath from "./GameMath";
import BundleManager from "./BundleManager";


const LOCAL_STORAGE_KEY = {
    MUSIC: "MUSIC_SWITCH",
    EFFECT: "EFFECT_SWITCH",
};

export default class AudioManager {
    private static instance: AudioManager = null;

    static getInstance(): AudioManager {
        if (this.instance == null) {
            this.instance = new AudioManager();
        }
        return this.instance;
    }

    private constructor() {
        if (AudioManager.instance != null) {
            Util.Error("duplicated new instance " + this.constructor.name + "!");
        }

        this.loadLocalStore();
    }

    private _volume: number = 100;
    set volume(v: number) {
        this._volume = v / 100;
        if (this._volume > 0) {
            cc.sys.localStorage.setItem(LOCAL_STORAGE_KEY.MUSIC, "true");
        } else {
            cc.sys.localStorage.setItem(LOCAL_STORAGE_KEY.MUSIC, "false");
        }
        cc.audioEngine.setMusicVolume(this._volume * 0.5);
    }

    get volume() {
        return this._volume * 100;
    }

    private _effectVolume: number = 100;
    set effectVolume(v: number) {
        this._effectVolume = v / 100;
        if (this._effectVolume > 0) {
            cc.sys.localStorage.setItem(LOCAL_STORAGE_KEY.EFFECT, "true");
        } else {
            cc.sys.localStorage.setItem(LOCAL_STORAGE_KEY.EFFECT, "false");
        }
        cc.audioEngine.setEffectsVolume(this._effectVolume * 0.5);
    }

    get effectVolume() {
        return this._effectVolume * 100;
    }

    private loadLocalStore() {
        if (cc.sys.localStorage.getItem(LOCAL_STORAGE_KEY.MUSIC) === "false") {
            this.volume = 0;
        } else {
            this.volume = 100;
        }

        if (cc.sys.localStorage.getItem(LOCAL_STORAGE_KEY.EFFECT) === "false") {
            this.effectVolume = 0;
        } else {
            this.effectVolume = 100;
        }
    }

    private curMusic: number = -1;
    private nextMusic: number = -1;

    private static preloaded: boolean = false;
    private playList: Map<number, number> = new Map<number, number>();
    private assetsList: Map<number, cc.AudioClip> = new Map<number, cc.AudioClip>();

    private getAssets(sound: number): Promise<cc.AudioClip> {
        return new Promise((resolve, reject) => {
            if (this.assetsList.get(sound)) resolve(this.assetsList.get(sound));

            let url = GameConfig.getInstance().getAudio(sound as number);
            BundleManager.getInstance().gameBundle.load(url, cc.AudioClip, (error: Error, audio: cc.AudioClip) => {
                if (error) {
                    resolve(null);
                } else if (!(audio instanceof cc.AudioClip)) {
                    resolve(null)
                } else {
                    this.assetsList.set(sound, audio);
                    resolve(audio);
                }
            })
        });
    }

    async preLoadSound() {
        if (AudioManager.preloaded) return;

        AudioManager.preloaded = true;
        // this.getAssets(AudioResource.Enums.BGM_cherrful);
        // this.getAssets(AudioResource.Enums.BGM_snatch);
    }

    async playMusic(type: number | AudioResource.Enums, loop?: boolean) {
        if (type <= AudioResource.Enums.Default) return;
        if (this.curMusic === type) return;

        if (this.curMusic > AudioResource.Enums.Default) {
            if (this.nextMusic > AudioResource.Enums.Default) {
                this.nextMusic = type;
            } else {
                this.nextMusic = type;
                let time = 0;
                let volume = cc.audioEngine.getMusicVolume();
                let interval = setInterval(() => {
                    time += 1000 / 60;
                    cc.audioEngine.setMusicVolume(GameEasing.easeOutQuad(time, volume, 0, 3000));
                    if (cc.audioEngine.getMusicVolume() <= 0) {
                        clearInterval(interval);

                        setTimeout(() => {
                            this.curMusic = AudioResource.Enums.Default;
                            this.playMusic(this.nextMusic, loop);
                            this.volume = this.volume;
                        }, 1200);
                    }
                }, 1000 / 60);
            }
            return;
        }

        let audio: cc.AudioClip = await this.getAssets(type);
        if (audio) {
            let _loop: boolean = loop ? loop : true;
            cc.audioEngine.playMusic(audio, _loop);
            this.curMusic = type;
            this.nextMusic = AudioResource.Enums.Default;
        }
    }

    async playEffect(type: number | AudioResource.Enums, loop?: boolean) {
        if (type <= AudioResource.Enums.Default) return;

        if (this.playList.has(type)) {
            let sound = this.playList.get(type);
            cc.audioEngine.resume(sound);
        }

        let _loop: boolean = loop ? loop : false;
        let audio: cc.AudioClip = await this.getAssets(type);
        if (audio) {
            this.playList.set(type, cc.audioEngine.playEffect(audio, _loop));
        }
    }

    stopEffect(type: number | AudioResource.Enums) {
        if (this.playList.has(type)) {
            let sound = this.playList.get(type);
            cc.audioEngine.stop(sound);
        }
    }

    async playRandomEffect(...type: number[]) {
        if (type.length <= 0) return;
        let pType = type[GameMath.random(0, type.length - 1)];
        this.playEffect(pType);
    }

    muteMusic() {
        cc.audioEngine.pauseMusic();
        this.volume = 0;
    }

    unmuteMusic() {
        cc.audioEngine.resumeMusic();
        this.volume = 100;
    }

    muteEffect() {
        cc.audioEngine.stopAllEffects();
        this.effectVolume = 0;
    }

    unmuteEffect() {
        this.effectVolume = 100;
    }

    isMusicMute() {
        return this.volume === 0;
    }

    isEffectMute() {
        return this.effectVolume === 0;
    }
}