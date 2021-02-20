/**
 * Created by Chao.Han on 1/18/21
 */

const {ccclass, property, disallowMultiple, inspector, menu} = cc._decorator;

@ccclass
@inspector("packages://autoproperty/inspector.js")
export default class Init extends cc.Component {

    onLoad() {


        let bundleName = "game";
        let sceneName = "main";
        console.log("Init bundleName:", bundleName, "sceneName:", sceneName);
        cc.assetManager.loadBundle(bundleName, (err, bundle) => {
            if (err) {
                console.log("loadBundle Error", err);
            }
            if (bundle) {
                console.log("loadBundle Finish", bundleName, bundle);
                bundle.loadScene(sceneName, (finish, total, item) => {
                    console.log(`finish: ${finish}, total: ${total} per: ${Math.round(finish / total * 100).toString()}%`);

                }, (error: Error, sceneAsset) => {
                    cc.director.loadScene(sceneName);
                });
            }
        });
    }
}
