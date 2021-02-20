/**
 * Created by Chao.Han on 2/20/21
 */
import Logger from "../framework/util/Logger";
import GameWorld from "./scripts/config/GameWorld";
import BundleManager from "../framework/util/BundleManager";
import GameConfig from "./scripts/config/GameConfig";
import GameGlobalData from "./scripts/data/GameGlobalData";
import {initLayer} from "../framework/ui/base/Layer";

const {ccclass, property, disallowMultiple, inspector, menu} = cc._decorator;

@ccclass
@inspector("packages://autoproperty/inspector.js")
export default class InitGame extends cc.Component {

    async onLoad() {

        Logger.init();

        console.log("UIInit onLoad");

        GameWorld.init();

        await BundleManager.getInstance().init();
        await GameConfig.getInstance().init();
        GameGlobalData.getInstance();
        initLayer();


    }
}
