/**
 * Created by Chao.Han on 1/27/21
 */
import GameWorld, {OrientationType} from "../../game/scripts/config/GameWorld";

const {ccclass, property, disallowMultiple, inspector, menu} = cc._decorator;
@ccclass
@inspector("packages://autoproperty/inspector.js")
@disallowMultiple
@menu("适配/UIScaleToFixDesign")
export default class UIScaleToFixDesign extends cc.Component {

    start() {
        this.node.scale = GameWorld.uiAdapter.scaleFixRate;
    }

}