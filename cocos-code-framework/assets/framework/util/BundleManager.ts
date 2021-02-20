/**
 * Created by Chao.Han on 1/18/21
 */
import Util from "./Util";
import Logger from "./Logger";

export default class BundleManager extends cc.Component {
    private static instance: BundleManager = null;

    static getInstance(): BundleManager {
        if (this.instance == null) {
            this.instance = new BundleManager();
        }
        return this.instance;
    }

    frameBundleName = "framework";
    frameBundle: cc.AssetManager.Bundle = null;

    gameBundleName = "game";
    gameBundle: cc.AssetManager.Bundle = null;

    atlases: Map<string, cc.SpriteAtlas> = new Map<string, cc.SpriteAtlas>();

    async init(): Promise<void> {
        Logger.logBase("BundleManager init");
        this.frameBundle = await this.loadBundle(this.frameBundleName);
        this.gameBundle = await this.loadBundle(this.gameBundleName);
    }

    loadBundle(bundleName: string): Promise<cc.AssetManager.Bundle> {
        return new Promise<cc.AssetManager.Bundle>((resolve, reject) => {
            cc.assetManager.loadBundle(bundleName, (err, bundle) => {
                if (err) {
                    Logger.logBase("loadBundle Error", err);
                    reject();
                }
                if (bundle) {
                    Logger.logBase("loadBundle Finish", bundleName, bundle);
                    resolve(bundle);
                }
            });
        })
    }

    getAtlas(path: string): Promise<cc.SpriteAtlas> {
        path += "/AutoAtlas";

        return new Promise<cc.SpriteAtlas>((resolve) => {
            let atlas = this.atlases.get(path);
            if (atlas) {
                resolve(atlas);
                return;
            }

            this.gameBundle.load(path, cc.SpriteAtlas, (err, spriteAtlas: cc.SpriteAtlas) => {
                if (err) {
                    Util.Error("BundleManager getAtlas error:", err, path);
                }
                this.atlases.set(path, spriteAtlas);
                resolve(spriteAtlas);
            })
        })
    }

}
