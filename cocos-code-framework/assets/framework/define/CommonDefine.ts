/**
 * Created by Chao.Han on 2020/11/26
 */


export class PromiseCallBack {
    cbResolve: (value?: any) => void;
    cbReject?: (value?: any) => void;

    constructor(resolve?: (value?: any) => void, reject?: (value?: any) => void) {
        this.cbResolve = resolve;
        this.cbReject = reject;
    }

    resolve(param?: any) {
        this.cbResolve(param);
    }

    reject(param?: any) {
        this.cbReject(param);
    }
}