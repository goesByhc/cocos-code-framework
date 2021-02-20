/**
 * Created by Chao.Han on 2020/11/17
 */
import Logger from "./Logger";

export interface EventCenterListener{
    _eventList?: Map<string, EventHandler>;
}

export class EventHandler{
    target: object;
    function: Function;

    constructor(target: object , callback: Function) {
        this.target = target;
        this.function = callback;
    }
}

export class EventCenter{

    private static events: Map<string, EventHandler[]> = new Map<string, EventHandler[]>();

    static registerEvent(eventName: string | number, callBack: Function, target: EventCenterListener): void {
        if (typeof eventName == "number") {
            eventName = eventName.toString();
        }

        if (eventName == undefined || callBack == undefined || target == undefined) {
            Logger.error(`register event error eventName:${eventName} callback:${callBack} target:${target}` );
        }

        if (EventCenter.events.get(eventName) == undefined) {
            EventCenter.events.set(eventName, []);
        }

        let handler = new EventHandler(target, callBack);

        EventCenter.events.get(eventName).push(handler);

        if (!target._eventList) {
            target._eventList = new Map<string, EventHandler>();
        }

        target._eventList.set(eventName, handler);
    }

    static postEvent(eventName: string | number, ...param: any[]) {
        if (typeof eventName == "number") {
            eventName = eventName.toString();
        }
        Logger.logEvent("post Event:", eventName);

        let handlers = EventCenter.events.get(eventName);
        if (handlers == undefined) {
            Logger.logEvent("Event NoHandle! event:", eventName);
            return;
        }

        for (let i = 0; i < handlers.length; i ++) {
            let handler = handlers[i];
            if (handler) {
                try {
                    handler.function.call(handler.target, ...param);
                } catch(e) {
                    Logger.error(e.message);
                    Logger.error(e.stack.toString());
                }

            }

        }
    }

    static removeEvent(eventName: string | number, callBack: Function, target: EventCenterListener, isRemoveTargetEvent: boolean) : void {
        if (typeof eventName == "number") {
            eventName = eventName.toString();
        }
        if (isRemoveTargetEvent && target._eventList) {
            target._eventList.delete(eventName);
        }
        let handlers = EventCenter.events.get(eventName);
        if (handlers == undefined) {
            return;
        }

        for (let i = 0; i < handlers.length; i++) {
            let handler = handlers[i];

            if (handler != undefined && handler.target == target && handler.function == callBack) {
                // handlers.splice(i, 1);
                handlers[i] = undefined;
                break;
            }
        }
    }

    static removeEventRegister(target: EventCenterListener) {
        target._eventList.forEach((value, key, map) => {
            EventCenter.removeEvent(key, value.function, value.target, false);
        });
        target._eventList.clear();
    }
}

export function registerEvent(eventName: string | number, callBack: Function, target: object): void {
    EventCenter.registerEvent(eventName, callBack, target);
}
export function postEvent(eventName: string | number, ...param: any[]) {
    EventCenter.postEvent(eventName, ...param);
}
export function removeEvent(eventName: string | number, callBack: Function, target: object) : void {
    EventCenter.removeEvent(eventName, callBack, target, true);
}
export function removeEventRegister(target: object) : void {
    EventCenter.removeEventRegister(target);
}


// let eventCenter: any = {};
// eventCenter.registEvent = EventCenter.registEvent;
// eventCenter.postEvent = EventCenter.postEvent;
// eventCenter.removeEvent = EventCenter.removeEvent;
// cc.EventCenter = eventCenter;
