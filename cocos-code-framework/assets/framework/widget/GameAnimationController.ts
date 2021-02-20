/**
 * Created by HanChao on 2020/8/4
 */
import {GameAnimationEasingEnum, GameAnimationEasingType, GameAnimationType} from "./GameAnimationEasingEnum";
import Util from "../util/Util";

const {ccclass, property, menu} = cc._decorator;


@ccclass
@menu("Plugin/GameAnimationController")
export default class GameAnimationController extends cc.Component {

    @property(cc.Animation)
    animation: cc.Animation = null;

    @property(cc.Integer)
    startAnimIndex: number = -1;

    @property(cc.Integer)
    onEnableAnimIndex: number = -1;

    protected onLoad(): void {

    }

    protected start(): void {
        if (this.startAnimIndex != -1) {
            let targetClip = this.animation.getClips()[this.startAnimIndex];
            this.animation.currentClip = targetClip;
            this.animation.play()
        }
    }

    protected onEnable(): void {
        if (this.onEnableAnimIndex != -1) {
            let targetClip = this.animation.getClips()[this.onEnableAnimIndex];
            this.animation.currentClip = targetClip;
            this.animation.play()
        }
    }

}