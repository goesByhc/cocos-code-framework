/**
 * Created by Chao.Han on 2020/11/17
 */
import Logger from "../../util/Logger";
import {loadPrefab} from "../../util/Loader";

export default class UI{

    private static uiCache: Map<string, cc.Node> = new Map<string, cc.Node>();
    private static uiIsLoading: Set<string> = new Set<string>();


    static showComp<T extends cc.Component>(url: string, parent: cc.Node, type: {prototype: T}): Promise<T> {
        return new Promise<T>((resolve) => {
            this.show(url, parent).then((node) => {
                resolve(node.getComponent(type));
            });
        })
    }

    static show(url: string, parent?: cc.Node): Promise<cc.Node> {
        Logger.logUI(`UI.show url: ${url}`);
        return new Promise<cc.Node>(async (resolve, reject) => {
            if (this.uiIsLoading.has(url)) {
                Logger.logUI(`UI.show, Prefab is Loading url:${url}`);
                return;
            }

            let node = this.uiCache.get(url);
            if (!node) {
                this.uiIsLoading.add(url);
                node = await loadPrefab(url);
                this.uiCache.set(url, node);
                parent && parent.addChild(node);
            } else {
                node.active = true;
            }

            resolve(node);

            this.uiIsLoading.delete(url);
        })
    }

    static cleanCache() {
        this.uiCache.clear();
        this.uiIsLoading.clear();
    }

}
