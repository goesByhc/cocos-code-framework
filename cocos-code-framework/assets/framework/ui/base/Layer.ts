/**
 * Created by Chao.Han on 2020/11/17
 */

/**
 * 管理全局游戏图层
 */


import GameWorld from "../../../game/scripts/config/GameWorld";

/** 登录图层 */
export let loginLayer: cc.Node = new cc.Node();

/** 加载中图层 */
export let loadingLayer: cc.Node = new cc.Node();

/** 提示弹出框图层 */
export let noticeLayer: cc.Node = new cc.Node();

/** 消息tips图层 */
export let floatLayer: cc.Node = new cc.Node();

/** 大厅图层 */
export let hallLayer: cc.Node = new cc.Node();

/** ui图层，所有的通用ui图层都放在这个图层中 */
export let uiLayer: cc.Node = new cc.Node();

/** 信息流遮罩层 */
export let adInformationMaskLayer = new cc.Node();

/** 初始化游戏图层 */
export function initLayer() {
    let scene = cc.director.getScene();
    loginLayer.name = "loginLayer";
    scene.addChild(loginLayer);
    hallLayer.name = "hallLayer";
    scene.addChild(hallLayer);
    uiLayer.name = "uiLayer";
    scene.addChild(uiLayer);
    noticeLayer.name = "noticeLayer";
    scene.addChild(noticeLayer);
    loadingLayer.name = "loadingLayer";
    scene.addChild(loadingLayer);
    floatLayer.name = "floatLayer";
    scene.addChild(floatLayer);
    adInformationMaskLayer.name = "adInformationMaskLayer";
    scene.addChild(adInformationMaskLayer);

    addWidget(hallLayer);
    addWidget(uiLayer);
    addWidget(loginLayer);
    addWidget(noticeLayer);
    addWidget(loadingLayer);
    addWidget(floatLayer);
    addWidget(adInformationMaskLayer);
}

function addWidget(node: cc.Node) {
    node.width = GameWorld.DesignResolution.width;
    node.height = GameWorld.DesignResolution.height;
    node.anchorX = node.anchorY = 0.5;

    let widget = node.addComponent(cc.Widget);
    widget.isAlignTop = true;
    widget.isAlignLeft = true;
    widget.isAlignRight = true;
    widget.isAlignBottom = true;
    widget.top = 0;
    widget.bottom = 0;
    widget.left = 0;
    widget.right = 0;
}
