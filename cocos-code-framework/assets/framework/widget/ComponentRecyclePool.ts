/**
 * Created by Chao.Han on 1/28/21
 */


export class ComponentRecyclePool <T extends cc.Component>{

    prefab: cc.Prefab;

    proto: {prototype: T};

    items: T[] = [];

    constructor(prefab: cc.Prefab, proto: {prototype: T}) {
        this.prefab = prefab;
        this.proto = proto;
    }

    get(): T {
        let item = this.items.pop();
        if (item) {
            return item;
        } else {
            return cc.instantiate(this.prefab).getComponent(this.proto);
        }
    }

    put(item: T) {
        this.items.push(item);
    }

}
