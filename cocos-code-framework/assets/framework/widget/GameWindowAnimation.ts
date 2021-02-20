
const {property, ccclass} = cc._decorator;

@ccclass
export class GameWindowAnimation extends cc.Component {
    @property(cc.Node)
    target: cc.Node = null;

    @property(cc.Boolean)
    clickMaskToDeActive: boolean = false;

    @property(cc.Boolean)
    clickMaskToDestroy: boolean = false;

    private root: cc.Node = null;
    onLoad() {

        if (this.target === null) this.target = this.node;
        this.root = new cc.Node();
        this.root.width = cc.winSize.width;
        this.root.width = cc.winSize.height;
        this.root.parent = this.node;
        this.root.zIndex = -1;

        let widget = this.root.addComponent(cc.Widget);
        widget.isAlignTop = true;
        widget.isAlignBottom = true;
        widget.isAlignLeft = true;
        widget.isAlignRight = true;
        widget.left = 0;
        widget.right = 0;
        widget.top = 0;
        widget.bottom = 0;
        widget.alignMode = cc.Widget.AlignMode.ON_WINDOW_RESIZE;

        let button = this.root.addComponent(cc.Button);
        button.node.width = this.node.width;
        button.node.height = this.node.height;

        let handler = new cc.Component.EventHandler();
        handler.target = this.node;
        handler.component = "GameWindowAnimation";
        handler.handler = "onClose";
        button.clickEvents.push(handler);

        this.root.addComponent(cc.BlockInputEvents);
    }

    onEnable() {
        this.target.scale = 0;
        cc.tween(this.target)
            .to(0.1, { scale: 1 })
            .start();
    }

    onClose() {
        cc.tween(this.target)
            .to(0.1, {scale: 0})
            .call(() => {
                if (this.clickMaskToDeActive) {
                    this.node.active = false;
                } else if (this.clickMaskToDestroy) {
                    this.node.destroy();
                }
            })
            .start();
    }
}