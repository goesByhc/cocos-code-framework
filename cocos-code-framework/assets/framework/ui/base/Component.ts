/**
 * Created by Chao.Han on 2020/11/17
 */

const {ccclass, property, inspector} = cc._decorator;
@ccclass
export default class Component<Data> extends cc.Component {
    private _data: Data = <Data>{};
    get data() {
        return this._data;
    }

    /**
     * 设置最新状态
     * @param data
     * @param replace
     * @param callback
     */
    setData<K extends keyof Data>(data?: Data, callback?: () => void): void {
        if (this._data !== data) {
            this._data = data;
            //开始更新
            this.onDataUpdate();
            //回调
            callback && callback();
        }
    }

    protected onDataUpdate() {

    }

}
