import {i18nMgr, Ii18nComponent} from "./i18nMgr";
const { ccclass, property, executeInEditMode, disallowMultiple, requireComponent, menu } = cc._decorator;

@ccclass
@executeInEditMode
@requireComponent(cc.RichText)
@disallowMultiple
@menu("多语言/i18nRichText")
export class i18nRichText extends cc.Component implements Ii18nComponent{

    @property({ visible: false })
    private i18n_string: string = "";

    @property({ visible: false })
    private i18n_params: string[] = [];

    start() {
        i18nMgr._addOrDelLabel(this, true);
        this._resetValue();
    }

    @property({ type: cc.String })
    get string() {
        return this.i18n_string;
    }

    set string(value: string) {
        this.i18n_string = value;

        let label = this.getComponent(cc.RichText);
        if (cc.isValid(label)) {
            label.string = i18nMgr._getLabel(this.i18n_string, this.i18n_params);
        }
    }

    @property({ type: [cc.String] })
    get params() {
        return this.i18n_params;
    }

    set params(value: string[]) {
        this.i18n_params = value;

        let label = this.getComponent(cc.RichText);
        if (cc.isValid(label)) {
            label.string = i18nMgr._getLabel(this.i18n_string, this.i18n_params);
        }
    }

    init(string: string, params: string[]) {
        this.i18n_string = string;
        this.i18n_params = params;

        let label = this.getComponent(cc.RichText);
        if (cc.isValid(label)) {
            label.string = i18nMgr._getLabel(this.i18n_string, this.i18n_params);
        }
    }

    _resetValue() {
        this.string = this.i18n_string;
    }

    onDestroy() {
        i18nMgr._addOrDelLabel(this, false);
    }
}

