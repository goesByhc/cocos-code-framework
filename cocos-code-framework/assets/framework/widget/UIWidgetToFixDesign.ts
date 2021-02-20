/**
 * Created by Chao.Han on 1/27/21
 */
import GameWorld from "../../game/scripts/config/GameWorld";

const {ccclass, property, disallowMultiple, inspector, menu, requireComponent} = cc._decorator;

@ccclass
@inspector("packages://autoproperty/inspector.js")
@menu("适配/UIWidgetToFixDesign")
@requireComponent(cc.Widget)
export default class UIWidgetToFixDesign extends cc.Component {

    // @property
    // left: boolean = false;
    //
    // @property
    // right: boolean = false;
    //
    // @property
    // top: boolean = false;
    //
    // @property
    // bottom: boolean = false;

    @property(cc.Float)
    rate: number = 0.5;

    widget: cc.Widget;

    onLoad() {
        this.widget = this.getComponent(cc.Widget);

        if (this.widget.isAlignLeft) {
            this.widget.left = this.widget.left + GameWorld.uiAdapter.widthDiff * 0.5 * this.rate;
        }
        if (this.widget.isAlignRight) {
            this.widget.right = this.widget.right + GameWorld.uiAdapter.widthDiff * 0.5 * this.rate;
        }
        if (this.widget.isAlignTop) {
            this.widget.top = this.widget.top + GameWorld.uiAdapter.heightDiff * 0.5 * this.rate;
        }
        if (this.widget.isAlignBottom) {
            this.widget.bottom = this.widget.bottom + GameWorld.uiAdapter.heightDiff * 0.5 * this.rate;
        }
    }
}
