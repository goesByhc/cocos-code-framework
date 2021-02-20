/**
 * Created by Chao.Han on 2/20/21
 */

export default class RecyclePool <T> {

    newFunc: Function;

    items: T[] = [];

    constructor(newFunc: Function) {
        this.newFunc = newFunc;
    }

    get(): T {
        let item = this.items.pop();
        if (item) {
            return item;
        } else {
            return this.newFunc();
        }
    }

    put(item: T) {
        this.items.push(item);
    }

}
