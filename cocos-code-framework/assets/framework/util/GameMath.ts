/**
 * Created by Chao.Han on 1/13/21
 */

export default class GameMath {

    /**
     * 随机一个数出来 rand in [min, max) 取整
     */
    static random(min: number, max: number): number{
        let rand = Math.random() * (max - min) + min;
        rand =  Math.floor(rand);
        return rand;
    }

    /**
     * value的差值百分比, value在区间[min，max]中的位置
     */
    static lerp(value: number, start: number, end: number): number {
        return (value - start) / (end - start);
    }

    /**
     * 给定区间，取这个区间的给定百分比位置的值
     */
    static remap(percent: number, start: number, end: number): number {
        return start + (end - start) * percent;
    }

    /**
     * 锁定value取值范围
     */
    static range(value: number, min: number, max: number): number {
        return Math.min(Math.max(min, value), max);
    }

    /**
     * 按照step 慢慢趋近target，不会越过
     * @param step should > 0
     */
    static approaching(value: number, target: number, step: number) {
        if (target > value) {
            return Math.min(value + step, target);
        } else {
            return Math.max(value - step, target);
        }
    }

}
