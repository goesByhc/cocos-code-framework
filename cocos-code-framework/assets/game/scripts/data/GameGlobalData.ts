/**
 * Created by Chao.Han on 2020/12/25
 */

import {GameMessageS2C} from "../../../framework/network/MessageDefine";
import Util from "../../../framework/util/Util";
import GameUser from "./GameUser";
import Network, {NetworkListener} from "../../../framework/network/Network";


export default class GameGlobalData implements NetworkListener{
    private static instance: GameGlobalData = null;

    static getInstance(): GameGlobalData {
        if (this.instance == null) {
            this.instance = new GameGlobalData();
        }
        return this.instance;
    }

    private constructor() {
        if (GameGlobalData.instance != null) {
            Util.Error("duplicated new instance " + this.constructor.name + "!");
        }
        Network.getInstance().registerListener(this);
    }
    roomId: string;

    onMessage(s2c: GameMessageS2C) {
        GameUser.getInstance().onGetMessage(s2c);
    }

}