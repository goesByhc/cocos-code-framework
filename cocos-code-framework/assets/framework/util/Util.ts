/**
 * Created by Chao.Han on 2020/11/17
 */
import {EventCenter, postEvent} from "./EventCenter";
import {FrameEventDefine} from "../define/FrameEventDefine";

export default class Util {

    /**
     * 深度拷贝数据
     * @param target
     * @param source
     */
    static deepCopy(target: object, source: object) {
        for (let key in source) {
            let value = source[key];
            //直接替换属性
            target[key] = value;
        }
    }

    /**
     * 格式化时间
     * @param time
     */
    static smartFormatTime(time: number): string {
        let tm = new Date(time);
        if (time >= 86400 * 1000) { //one day
            return `${tm.getDate() -1}d ${tm.getHours()}h`
        } else if (time >= 3600 * 1000){
            return `${tm.getHours()}h ${tm.getMinutes()}m`
        } else if (time >= 60 * 1000) {
            return `${tm.getMinutes()}m ${tm.getSeconds()}s`
        } else {
            return `${tm.getSeconds()}s`
        }
    }

    /**
     * 播放一次Spine
     */
    static playSpineOnce(sp: sp.Skeleton, animation: string, callback?: Function, hideWhenFinish: boolean = true, eventCallBack?: Function) {
        sp.node.active = true;

        if (eventCallBack) {
            sp.setEventListener((trackIndex, event) => {
                if (event) {
                    eventCallBack(event);
                }
            })
        }

        sp.setAnimation(0, animation, false);
        sp.setCompleteListener(() => {
            if (hideWhenFinish) {
                sp.node.active = false;
            }

            if (callback) {
                callback();
            }
        })
    }

    static isTouchInNode(event: cc.Event.EventTouch, node: cc.Node): boolean {
        let v2 = node.convertToNodeSpaceAR(event.getLocation());
        return Math.abs(v2.x) < node.width / 2 && Math.abs(v2.y) < node.height / 2;
    }

    static Error(...msgs: any[]) {
        let str = "";
        for(let i = 0, length = msgs.length; i < length; i++) {
            str +=  msgs[i];
            if (i < length - 1) {
                str += " ";
            }
        }

        EventCenter.postEvent(FrameEventDefine.EventError, str);
        throw new Error(str);
    }


    static contain(array: Array<any>, target: any): boolean {
        for (let i = 0, length = array.length; i < length; i++) {
            let obj = array[i];
            if (obj == target){
                return true;
            }
        }
        return false;
    }

    static isStringValid(str: string): boolean {
        return str && str != "0" && str.length > 0;
    }

    static getNodeTreeStr(node: cc.Node): string {
        let str = "";
        while(node) {
            str = node.name + str;
            node = node.parent;
        }
        return str;
    }

    static getLocalPos(localNode: cc.Node, targetNode: cc.Node): cc.Vec3 {
       return localNode.convertToNodeSpaceAR(targetNode.convertToWorldSpaceAR(cc.Vec3.ZERO));
    }

    static showErrorTips(code: string) {
        postEvent(FrameEventDefine.EventShowErrorTips, code);
    }

    static getMethodName(obj, method) {
        let methodName = null;
        Object.getOwnPropertyNames(obj).forEach(prop => {
            if (obj[prop] === method) {
                methodName = prop;
            }
        });

        if (methodName !== null) {
            return methodName;
        }

        let proto = Object.getPrototypeOf(obj);
        if (proto) {
            return this.getMethodName(proto, method);
        }
        return null;
    }


}