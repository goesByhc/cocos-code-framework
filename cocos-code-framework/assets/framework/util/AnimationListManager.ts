/**
 * Created by goes_by on 2018/6/29.
 */


const {ccclass, property, executionOrder} = cc._decorator;

interface AnimationListObject {
    doFunc: Function,
    resetFunc: Function,
    maxDuration: number,
    name?: string,
}

@ccclass
@executionOrder(1)
export class AnimationListManager {

    private static _instance: AnimationListManager;

    public static getInstance(): AnimationListManager {
        return AnimationListManager._instance || (AnimationListManager._instance = new AnimationListManager());
    };

    public static destroyInstance() {
        AnimationListManager._instance = null;
    }

    animationList: AnimationListObject[] = [];
    currentAnimation: AnimationListObject = null;
    currentAnimatingTime: number = 0;

    notifyAnimationDone() {
        if (this.currentAnimation) {
            console.log("AnimationListManager notifyAnimationDone", this.currentAnimation.name);
            this.killCurrentAnimation();
        }

        this.currentAnimation = null;
    }

    //需要在主循环里手动调用，这不是个Component
    update(dt: number) {
        if (!this.currentAnimation) {
            this.popDoAnimation();
        }
        this.countTime(dt);
    }

    popDoAnimation() {

        if (this.animationList.length == 0) {
            return;
        }

        let anim = this.animationList.shift();
        try {
            anim.doFunc()
        }
        catch (e) {
            console.log("doFuncError:", e.message);
            console.log(e.stack);
        }
        this.currentAnimatingTime = 0;
        this.currentAnimation = anim;

        console.log("AnimationListManager popDoAnimation animationListLength:", this.animationList.length, "name:", anim.name);
    }

    countTime(dt: number) {
        if (this.currentAnimation && this.currentAnimation.maxDuration >= 0) {
            this.currentAnimatingTime += dt;
            // console.log("countTime maxDuration:", this.currentAnimation.maxDuration, "currentAnimatingTime", this.currentAnimatingTime);
            if (this.currentAnimatingTime > this.currentAnimation.maxDuration) {
                this.killCurrentAnimation();
            }
        }
    }

    killCurrentAnimation() {

        if (this.currentAnimation.resetFunc) {
            try {
                this.currentAnimation.resetFunc();
            } catch (e) {
                console.log("AnimationListManager resetFuncError:", e.message);
                console.log(e.stack);
            }
        }
        this.currentAnimation = null;
        this.currentAnimatingTime = 0;
        // console.log("countTime this.currentAnimation = null");
    }

    killAnimationByName(name: string) {
        console.log("AnimationListManager killAnimationByName: ", name);
        if (this.currentAnimation && this.currentAnimation.name == name) {
            this.killCurrentAnimation();
        } else {
            for (let i = 0, length = this.animationList.length; i < length; i++) {
                let anim = this.animationList[i];
                if (anim.name == name) {
                    this.animationList.splice(i, 1);
                    break;
                }
            }
        }

    }

    pushAnimation(doFunc: Function, resetFunc: Function, maxDuration: number, name?: string) {
        this.animationList.push({
            doFunc: doFunc,
            resetFunc: resetFunc,
            maxDuration: maxDuration,
            name: name
        });
        console.log("AnimationListManager addToAnimationList listSize:", this.animationList.length, name ? name : "");
    }


    insertAnimation(doFunc: Function, resetFunc: Function, maxDuration: number, name?: string) {

        let func = {
            doFunc: doFunc,
            resetFunc: resetFunc,
            maxDuration: maxDuration,
            name: name
        };
        this.animationList.splice(0, 0, func);
        console.log("AnimationListManager insertToAnimationList listSize:", this.animationList.length, name ? name : "");
    }

    clear() {
        console.log("AnimationListManager cleanAnimationList listSize:", this.animationList.length);

        if (this.currentAnimation) {
            this.killCurrentAnimation();
        }

        this.animationList.length = 0;
    }

}
