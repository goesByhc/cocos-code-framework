/**
 * Created by Chao.Han on 2020/11/17
 */

import Util from "./Util";
import BundleManager from "./BundleManager";
import Logger from "./Logger";

/**
 * 加载prefab
 * @param url 加载的地址
 * @param onUpdate 更新中
 */
export function loadPrefab(url: string, onUpdate?: (process: number) => void): Promise<cc.Node> {
    Logger.logUI("loadPrefab", url);
    return new Promise((resolve, reject) => {
        BundleManager.getInstance().gameBundle.load(url, cc.Prefab, (err, data: cc.Prefab) => {

            if (err) {
                Logger.error(`加载Prefab：${url}发生错误！`);
                reject(err);
                return;
            }

            //直接转化为node
            resolve(cc.instantiate(data));

        })
    });
}



export async function loadImageFromAutoAtlas(atlasName: string, name: string, sprite: cc.Sprite | cc.Node){
    let atlas = await BundleManager.getInstance().getAtlas(atlasName);

    let sp = atlas.getSpriteFrame(name);
    if (sp) {
        if (cc.isValid(sp)) {
            sprite.getComponent(cc.Sprite).spriteFrame = sp;
        }
    } else {
        loadFromInnner(atlasName +"/"+ name, sprite);
    }
    // console.log("loadImageFromAutoAtlas error name:", name);

    // return null;
}

export function loadImage(path: string, sprite: cc.Sprite | cc.Node) {
    if (!path) {
        Logger.warn("loadImage no Path! spriteName:", sprite.getComponent(cc.Sprite).node.name);
        return;
    }

    if (path.indexOf("http") >= 0) { //远程加载
        if (cc.sys.isNative) { //原生远程加载
            this.loadFromRemoteNative(path, sprite);
        } else { //浏览器远程加载
            this.loadFromRemoteWeb(path, sprite);
        }
    } else {  //包内加载
        this.loadFromInnner(path, sprite);
    }

    // cc.loader.loadRes(path, cc.Texture2D, (error: Error, texture: cc.Texture2D) => {
    //     if (error) {
    //         GameUtils.Error(error.name, error.message, error.stack);
    //     }
    //     else if (!(texture instanceof cc.Texture2D)) {
    //         GameUtils.Error(`loadResourceImage ${path} is not a cc.Texture2D`);
    //     }
    //     else {
    //         // console.log("loadResourceImage finish", path);
    //         sprite.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture, cc.rect(0, 0, texture.width, texture.height));
    //     }
    // });
}

//包内加载
export function loadFromInnner(path: string, sprite: cc.Sprite | cc.Node) {

    BundleManager.getInstance().gameBundle.load(path, cc.Texture2D, (error: Error, texture: cc.Texture2D) => {
        if (error) {
            Util.Error(error.name, error.message, error.stack);
        }
        else if (!(texture instanceof cc.Texture2D)) {
            Util.Error(`loadResourceImage ${path} is not a cc.Texture2D`);
        }
        else {
            if(cc.isValid(sprite)) {
                sprite.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture, cc.rect(0, 0, texture.width, texture.height));
            }else {
                Logger.warn("node is not valid path = " + path);
            }
        }
    });
}

//native的远程加载
export function loadFromRemoteNative(path: string, sprite: cc.Sprite | cc.Node) {

    cc.assetManager.loadRemote(path, (err: Error, texture: cc.Texture2D) => {
        if (err || !(texture instanceof cc.Texture2D)) {
            Util.Error(err.name, err.message, err.stack);
        }
        else {
            if(cc.isValid(sprite)) {
                sprite.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture, cc.rect(0, 0, texture.width, texture.height));
            }else {
                Logger.warn("node is not valid path = " + path);
            }
        }
    });
}

//浏览器从web 加载
export function loadFromRemoteWeb(path: string, sprite: cc.Sprite | cc.Node) {
    cc.assetManager.loadRemote(path, {ext: '.png'}, (err: Error, texture: cc.Texture2D) => {
        if (err || !(texture instanceof cc.Texture2D)) {
            Util.Error(err.name, err.message, err.stack);
        }
        else {
            if(cc.isValid(sprite)) {
                sprite.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture, cc.rect(0, 0, texture.width, texture.height));
            }else {
                Logger.warn("node is not valid path = " + path);
            }
        }
    });
}
