const { ccclass, property } = cc._decorator;

export enum UIClickButtonType {
    Normal,
    Close,
}

@ccclass
export default class UIClickButton extends cc.Component {
    private time: number;
    private _transitionFinished: boolean;
    private _myCallFunc: any = null;
    // tyq: 之所以区分scaleX和scaleY。是为了减少在目标节点的scaleX与scaleY不一致时的被Debugger的次数
    private _fromScaleX: number;
    private _fromScaleY: number;
    private _toScaleX: number;
    private _toScaleY: number;
    private _originalScaleX: number;
    private _originalScaleY: number;

    zoomScale: number = 1.05;
    stopPropagation: boolean = false;
    duration: number = 0.1;

    @property({ type: cc.Enum(UIClickButtonType), tooltip: "按钮类型，默认为Normal，关闭按钮使用Close" })
    clickType: UIClickButtonType = UIClickButtonType.Normal;

    @property({ tooltip: "点击间隔处理，如果为0，则表示没有延时间隔，单位毫秒" })
    clickDelay: number = 300;

    @property({ type: [cc.Component.EventHandler], tooltip: "点击回调函数数组" })
    clickEvents: cc.Component.EventHandler[] = [];

    clickNow: number = -10000;
    onLoad() {
        this.time = 0;
        this._transitionFinished = true;
        this._fromScaleX = 1.0;
        this._fromScaleY = 1.0;
        this._toScaleX = 1.0;
        this._toScaleY = 1.0;
        this._originalScaleX = this.node.scaleX;
        this._originalScaleY = this.node.scaleY;
    }

    onEnable() {
        // this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
    }

    onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_END, this.onClick, this);
    }

    private onClick(evt) {
        if (this._myCallFunc) {
            this._myCallFunc(this.node);
        }
        this.clickEvents.forEach((element) => {
            if (element && element.handler) {
                if (element.target) {
                    let nodeCmp = element.target.getComponent(element["_componentName"]);
                    nodeCmp[element.handler] && nodeCmp[element.handler](evt, element.customEventData);
                }
            }
        });
    }

    /**
     * @param callFunc 给节点点击添加回调函数
     */
    addCallBack(callFunc: (targrt?) => void, auto?: boolean) {
        this._myCallFunc = callFunc;
    }

    private _onTouchBegan(evt) {
        let now = Date.now();
        if (now - this.clickNow > this.clickDelay) {
            this._zoomUp();

            if (this.clickType == UIClickButtonType.Normal) {
                // AudioInfo.instance.playClickButton();
            } else if (this.clickType == UIClickButtonType.Close) {
                // AudioInfo.instance.playVoice("5guanbi");
            } else {
                // AudioInfo.instance.playClickButton();
            }
            this.clickNow = now;
        }
    }

    private _onTouchEnded() {
        this._zoomBack();
        if (this.onClick) {
            this.onClick(this.node);
        }
    }

    public setZoomScale(val: number) {
        this.zoomScale = val;
    }

    private _onTouchCancel() {
        this._zoomBack();
    }

    private _zoomUp() {
        this._fromScaleX = this._originalScaleX;
        this._fromScaleY = this._originalScaleY;
        this._toScaleX = this._originalScaleX * this.zoomScale;
        this._toScaleY = this._originalScaleY * this.zoomScale;
        this.time = 0;
        this._transitionFinished = false;
    }

    private _zoomBack() {
        this._fromScaleX = this.node.scaleX;
        this._fromScaleY = this.node.scaleY;
        this._toScaleX = this._originalScaleX;
        this._toScaleY = this._originalScaleY;
        this.time = 0;
        this._transitionFinished = false;
    }

    update(dt) {
        let target = this.node as any;
        if (this._transitionFinished) {
            return;
        }
        this.time += dt;
        let ratio = 1.0;
        if (this.duration > 0) {
            ratio = this.time / this.duration;
        }

        if (ratio >= 1) {
            ratio = 1;
            this._transitionFinished = true;
        }
        target.scaleX = cc.misc.lerp ? cc.misc.lerp(this._fromScaleX, this._toScaleX, ratio) : 1;
        target.scaleY = cc.misc.lerp ? cc.misc.lerp(this._fromScaleY, this._toScaleY, ratio) : 1;
    }
}
