/**
 * Created by Chao.Han on 1/20/21
 */

declare class NativeHelper {
    //登录房间
    static loginRoom(roomId: string, uid: string);

    //退出房间
    static loginOutRoom();

    //拉别人的流
    static startPlayingStreamByUid(uid: string);

    //停止拉别人的流
    static stopPlayingStreamByUid(uid: string);

    //播放自己的流
    static startPublishingStream();

    //停止播放自己的流
    static stopPublishingStream();

    //退出游戏
    static exitGame();

    //打开充值界面
    static openChargePage();

    //获取版本号
    static getAppVersion(): string;

    //打开个人详情页
    static openPersonalDetailPop(uid: number, roomId: number);

    //设置游戏版本号
    static setGameJSVersion(version: string);
}


declare class UIUtils {

    /*获取游戏需要的相关参数(map对象)。
    (uid: 玩家id，String类 型、
    type:玩家操作状态，int类型(1、创建房间;2、快速匹 配;3、搜索房间)、
    roomId:房间id，String类型、
    env: app 环境(1、正式环境，其它值测试环境))*/
    static getUserParams(): {uid: string, type: number, roomId: string, env: number};

    //展示toast
    static showToast(str: string, duration: number);

    //监听游戏内的某个事件
    /*
    * "onStreamUpdated" 语音事件
    * //必须依赖CC节点使用
    * */
    static listenEvt(evt: string, cb: Function, target: object);

    //取消监听游戏内的某个事件
    static unListenEvt(evt: string, cb: Function, target: object);

    //抛出某个事件
    static dispatchEvt(evt: string, data: any);

}