import {i18nMgr} from "./i18nMgr";

/**
 * Created by Chao.Han on 2020/11/6
 */


const {ccclass, property, disallowMultiple, inspector, menu} = cc._decorator;
@ccclass
@inspector("packages://autoproperty/inspector.js")
@disallowMultiple
@menu("多语言/i18nFlip")
export default class i18nFlip extends cc.Component {

    defaultAnchorX: number = 0;
    defaultScaleX: number = 1;

    protected start(): void {
        this.defaultScaleX = this.node.scaleX;
        this.defaultAnchorX = this.node.anchorX;

        i18nMgr._addOrDelFlip(this, true);
        this._resetValue(i18nMgr.isFlipping);
    }

    _resetValue(isFlip: boolean) {
        this.node.scaleX = isFlip ? -this.defaultScaleX : this.defaultScaleX;
        this.node.anchorX = isFlip ? 1 - this.defaultAnchorX: this.defaultAnchorX;
    }

    onDestroy() {
        i18nMgr._addOrDelFlip(this, false);
    }

}
