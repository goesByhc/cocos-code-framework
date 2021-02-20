import GameWorld, {OrientationType} from "../../game/scripts/config/GameWorld";

/**
 * Created by Chao.Han on 1/27/21
 */

const {ccclass, property, disallowMultiple, inspector, menu} = cc._decorator;
@ccclass
@inspector("packages://autoproperty/inspector.js")
@disallowMultiple
@menu("适配/UIScaleToFullScreen")
export default class UIScaleToFullScreen extends cc.Component {

    protected start(): void {
        this.node.scale = 1 / GameWorld.uiAdapter.scaleFixRate;
    }
}
