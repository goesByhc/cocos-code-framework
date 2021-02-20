/**
 * Created by Chao.Han on 2020/11/26
 */


export enum PlatformType {
    None,
    H5,
    DuiWan,
    WeChat
}

export enum OrientationType {
    None,
    Landscape,
    Portrait,
}

export interface Env{
    platform: PlatformType;
    matchServerUrl: string;
    matchServerUrlSuffix: string;
    userInfoUrl: string;
    getFriendRelationUrl: string;
    addFriendUrl: string;
    // wsPrefix: string;
}


export default class GameWorld {

    static DesignResolution = {
        width: 1334,
        height: 750,
    };

    static orientation: OrientationType = OrientationType.Landscape;

    static uiAdapter = {
        scaleFixRate: 1,
        widthDiff: 0,
        heightDiff: 0,
    };

    static httpRequestTimeOut = 5000;
    static maxPlayerCount = 4;
    static isDebug: boolean;
    static heartTime = 10 * 1000;
    static gameType = 1002;
    static maxTryReconnectTimes = 3;
    static networkReconnectInterval = 3 * 1000;


    static env: Env;

    static envTestH5: Env = {
        platform: PlatformType.H5,
        matchServerUrl: "https://testservice.flightchessgame.com",
        matchServerUrlSuffix: "/api/flightchess/room_match",
        userInfoUrl: "http://testsg-api.thlrs.com:8421/api/v1/open/user/info/batch/get",
        getFriendRelationUrl: "http://testsg-api.thlrs.com:8421/api/v1/open/user/relation/relations",
        addFriendUrl: "http://testsg-api.thlrs.com:8421/api/v1/open/user/follow/add",
        // wsPrefix: "ws://"
    };

    static envTestDuiWan: Env = {
        platform: PlatformType.DuiWan,
        matchServerUrl: "https://testservice.flightchessgame.com",
        matchServerUrlSuffix: "/api/flightchess/room_match",
        userInfoUrl: "http://testsg-api.thlrs.com:8421/api/v1/open/user/info/batch/get",
        getFriendRelationUrl: "http://testsg-api.thlrs.com:8421/api/v1/open/user/relation/relations",
        addFriendUrl: "http://testsg-api.thlrs.com:8421/api/v1/open/user/follow/add",
        // wsPrefix: "ws://"
    };

    static envTestWeChat: Env = {
        platform: PlatformType.WeChat,
        matchServerUrl: "https://testservice.flightchessgame.com",
        matchServerUrlSuffix: "/api/flightchess/room_match",
        userInfoUrl: "http://testsg-api.thlrs.com:8421/api/v1/open/user/info/batch/get",
        getFriendRelationUrl: "http://testsg-api.thlrs.com:8421/api/v1/open/user/relation/relations",
        addFriendUrl: "http://testsg-api.thlrs.com:8421/api/v1/open/user/follow/add",
        // wsPrefix: "wss://"
    };

    static envWeChat: Env = {
        platform: PlatformType.WeChat,
        matchServerUrl: "https://service.flightchessgame.com",
        matchServerUrlSuffix: "/api/flightchess/room_match",
        userInfoUrl: "http://testsg-api.thlrs.com:8421/api/v1/open/user/info/batch/get",
        getFriendRelationUrl: "http://testsg-api.thlrs.com:8421/api/v1/open/user/relation/relations",
        addFriendUrl: "http://testsg-api.thlrs.com:8421/api/v1/open/user/follow/add",
        // wsPrefix: "wss://"
    };

    static init() {
        this.isDebug = CC_DEBUG;

        if (this.isDebug) {
            if (this.isWeChat()) {
                this.env = this.envTestWeChat;
            } else if (this.isNative()) {
                this.env = this.envTestDuiWan;
            } else {
                this.env = this.envTestH5;
            }
        } else {
            if (this.isWeChat()) {
                this.env = this.envWeChat;
            } else if (this.isNative()) {
                this.env = this.envTestDuiWan;
            } else {
                this.env = this.envTestH5;
            }
        }
        console.log("GameWorldInit env:", JSON.stringify(this.env));

        this.initUIAdapter();
    }


    static initUIAdapter() {
        let rate = cc.winSize.width / cc.winSize.height;
        let targetRate =  GameWorld.DesignResolution.width / GameWorld.DesignResolution.height;

        if (this.orientation == OrientationType.Portrait) {
            this.uiAdapter.scaleFixRate = rate / targetRate;
        } else {
            this.uiAdapter.scaleFixRate = targetRate / rate;
        }

        this.uiAdapter.widthDiff = cc.winSize.width - GameWorld.DesignResolution.width;
        this.uiAdapter.heightDiff = cc.winSize.height - GameWorld.DesignResolution.height;

        console.log("GameWorldInit uiAdapter:", JSON.stringify(this.uiAdapter));
    }

    static isWeChat(): boolean {
        return cc.sys.platform === cc.sys.WECHAT_GAME;
    }

    static isNative(): boolean {
        return cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS;
    }

    static isDuiWan(): boolean {
        return this.env.platform == PlatformType.DuiWan;
    }

    static isH5(): boolean {
        return this.env.platform == PlatformType.H5;
    }

}

