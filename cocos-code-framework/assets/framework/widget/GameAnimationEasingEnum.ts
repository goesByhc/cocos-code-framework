
export enum GameAnimationType {
    None = 0,
    To = 1,
    By = 2,
    Delay = 3,
    Set = 4,
}


export enum GameAnimationEasingType{
    None = 0,
    ExponentialIn = 1,
    ExponentialOut = 2,
    ExponentialInOut = 3,
    SineIn = 4,
    SineOut = 5,
    SineInOut = 6,
    BounceIn = 7,
    BounceOut = 8,
    BounceInOut = 9,
    BackIn = 10,
    BackOut = 11,
    BackInOut = 12,
    QuadraticActionIn = 13,
    QuadraticActionOut = 14,
    QuadraticActionInOut = 15,
    QuarticActionIn = 16,
    QuarticActionOut = 17,
    QuarticActionInOut = 18,
    QuinticActionIn = 19,
    QuinticActionOut = 20,
    QuinticActionInOut = 21,
    CircleActionIn = 22,
    CircleActionOut = 23,
    CircleActionInOut = 24,
    CubicActionIn = 25,
    CubicActionOut = 26,
    CubicActionInOut = 27,
}


export enum GameAnimationEasingStr{
    None = "",
    ExponentialIn = "exponentialIn",
    ExponentialOut = "exponentialOut",
    ExponentialInOut = "exponentialInOut",
    SineIn = "sineIn",
    SineOut = "sineOut",
    SineInOut = "sineInOut",
    BounceIn = "bounceIn",
    BounceOut = "bounceOut",
    BounceInOut = "bounceInOut",
    BackIn = "backIn",
    BackOut = "backOut",
    BackInOut = "backInOut",
    QuadraticActionIn = "quadraticActionIn",
    QuadraticActionOut = "quadraticActionOut",
    QuadraticActionInOut = "quadraticActionInOut",
    QuarticActionIn = "quarticActionIn",
    QuarticActionOut = "quarticActionOut",
    QuarticActionInOut = "quarticActionInOut",
    QuinticActionIn = "quinticActionIn",
    QuinticActionOut = "quinticActionOut",
    QuinticActionInOut = "quinticActionInOut",
    CircleActionIn = "circleActionIn",
    CircleActionOut = "circleActionOut",
    CircleActionInOut = "circleActionInOut",
    CubicActionIn = "cubicActionIn",
    CubicActionOut = "cubicActionOut",
    CubicActionInOut = "cubicActionInOut",
}

export class GameAnimationEasingEnum{
    static easingEnums: string[] = [
        "",
        GameAnimationEasingStr.ExponentialIn,
        GameAnimationEasingStr.ExponentialOut,
        GameAnimationEasingStr.ExponentialInOut,
        GameAnimationEasingStr.SineIn,
        GameAnimationEasingStr.SineOut,
        GameAnimationEasingStr.SineInOut,
        GameAnimationEasingStr.BounceIn,
        GameAnimationEasingStr.BounceOut,
        GameAnimationEasingStr.BounceInOut,
        GameAnimationEasingStr.BackIn,
        GameAnimationEasingStr.BackOut,
        GameAnimationEasingStr.BackInOut,
        GameAnimationEasingStr.QuadraticActionIn,
        GameAnimationEasingStr.QuadraticActionOut,
        GameAnimationEasingStr.QuadraticActionInOut,
        GameAnimationEasingStr.QuarticActionIn,
        GameAnimationEasingStr.QuarticActionOut,
        GameAnimationEasingStr.QuarticActionInOut,
        GameAnimationEasingStr.QuinticActionIn,
        GameAnimationEasingStr.QuinticActionOut,
        GameAnimationEasingStr.QuinticActionInOut,
        GameAnimationEasingStr.CircleActionIn,
        GameAnimationEasingStr.CircleActionOut,
        GameAnimationEasingStr.CircleActionInOut,
        GameAnimationEasingStr.CubicActionIn,
        GameAnimationEasingStr.CubicActionOut,
        GameAnimationEasingStr.CubicActionInOut,
    ];

    static getEase(type: GameAnimationEasingType): string {
        return this.easingEnums[type];
    }

    static getEaseBackOut(): string{
        return this.getEase(GameAnimationEasingType.BackOut);
    }
}

