/**
 * Created by Chao.Han on 1/28/21
 */

const {ccclass, property, disallowMultiple, inspector, menu} = cc._decorator;

@ccclass
@inspector("packages://autoproperty/inspector.js")
export default class UIShadowMask extends cc.Component {

    @property(cc.Mask)
    mask: cc.Mask = null;

    stencil: cc.Graphics = null;

    onLoad() {

        this.stencil = (this.mask as any)._graphics;

        this.reset();

    }

    start() {
        // this.clearMask(cc.v2(0, 0));

        // this.clearRect(0, 0, 100, 100);

    }

    clearRect(x: number, y: number, width: number, height: number) {
        this.stencil.rect(x - width / 2, y - height / 2, width, height);
        this.stencil.fill();
    }

    reset() {
        this.stencil.clear();
    }

}
