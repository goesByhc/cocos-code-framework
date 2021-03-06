import * as i18nLabel from "./i18nLabel";
import * as i18nSprite from "./i18nSprite";
import i18nFlip from "./i18nFlip";

export interface Ii18nComponent {
    _resetValue: () => void;
}

export class i18nMgr {
    public static language = "";     // 当前语言
    private static labelArr: Ii18nComponent[] = [];        // i18nLabel 列表
    private static labelData: { [key: string]: string } = {};   // 文字配置
    private static spriteArr: i18nSprite.i18nSprite[] = [];       // i18nSprite 列表
    private static flips: i18nFlip[] = [];

    private static flipLanguages: string[] = [];

    static isFlipping: boolean = false;

    private static checkInit() {
        if (!this.language) {
            this.setLanguage("en");
        }
    }

    /**
     * 设置语言
     */
    public static setLanguage(language: string) {
        if (this.language === language) {
            return;
        }
        this.language = language;
        this.reloadLabel();
        this.reloadSprite();
        this.isFlipping = this.flipLanguages.indexOf(language) != -1;
        this.reloadFlip(this.isFlipping);
    }

    /**
     * 添加或移除 i18nLabel
     */
    public static _addOrDelLabel(label: Ii18nComponent, isAdd: boolean) {
        if (isAdd) {
            this.labelArr.push(label);
        } else {
            let index = this.labelArr.indexOf(label);
            if (index !== -1) {
                this.labelArr.splice(index, 1);
            }
        }
    }

    public static _getLabel(opt: string, params?: string[]): string {
        this.checkInit();
        if (!params || params.length === 0) {
            return this.labelData[opt] || opt;
        }
        let str = this.labelData[opt] || opt;
        for (let i = 0; i < params.length; i++) {
            let reg = new RegExp("#" + i, "g")
            str = str.replace(reg, params[i]);
        }
        return str;
    }


    /**
     * 添加或移除 i18nSprite
     */
    public static _addOrDelSprite(sprite: i18nSprite.i18nSprite, isAdd: boolean) {
        if (isAdd) {
            this.spriteArr.push(sprite);
        } else {
            let index = this.spriteArr.indexOf(sprite);
            if (index !== -1) {
                this.spriteArr.splice(index, 1);
            }
        }
    }

    public static _getSprite(path: string, cb: (spriteFrame: cc.SpriteFrame) => void) {
        this.checkInit();
        cc.loader.loadRes("i18n/sprite/" + this.language + "/" + path, cc.SpriteFrame, (err, spriteFrame) => {
            if (err) {
                return cb(null);
            }
            cb(spriteFrame);
        });
    }


    /**
     * 添加或移除 i18nFlip
     */
    public static _addOrDelFlip(flip: i18nFlip, isAdd: boolean) {
        if (isAdd) {
            this.flips.push(flip);
        } else {
            let index = this.flips.indexOf(flip);
            if (index !== -1) {
                this.flips.splice(index, 1);
            }
        }
    }

    public static reloadFlip(isFlip: boolean){
        for (let one of this.flips) {
            one._resetValue(isFlip);
        }
    }


    private static reloadLabel() {
        let url = "i18n/label/" + this.language;
        cc.loader.loadRes(url, (err, data) => {
            if (err) {
                console.error(err);
                this.labelData = {};
            } else {
                this.labelData = data.json;
            }
            for (let one of this.labelArr) {
                one._resetValue();
            }
        });
    }

    private static reloadSprite() {
        for (let one of this.spriteArr) {
            one._resetValue();
        }
    }


}
