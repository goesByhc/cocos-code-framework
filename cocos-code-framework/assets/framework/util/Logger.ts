/**
 * Created by Chao.Han on 2/4/21
 */


enum LoggerChannelType {
    Base,
    Network,
    Game,
    UI,
    Event,
    Config,
}

let channelStyles = [
    "color:" + "#ff9e79",
    "color:" + "#ff7622",
    "color:" + "#00ceff",
    "color:" + "#00ff9e",
    "color:" + "#fffc12",
    "color:" + "#e493ff",
];

let channelNames = [
    "Base",
    "Network",
    "Game",
    "UI",
    "Event",
    "Config"
];

let openChannels = new Set<LoggerChannelType>([
    LoggerChannelType.Base,
    LoggerChannelType.Network,
    LoggerChannelType.Game,
    LoggerChannelType.UI,
    LoggerChannelType.Event,
    LoggerChannelType.Config,
]);

export default class Logger {

    private static channels: boolean[] = [];

    static init() {
        openChannels.forEach((channel) => {
            this.channels[channel] = true;
        });


        //想打印行号 可以用这种方式
        // Logger.logUI = console.log;
    }

    static error(...params: any) {
        console.error(...params);
    }

    static log(...params: any) {
        console.log(...params);
    }

    static warn(...params: any) {
        console.warn(...params);
    }

    static logChannel(channel: LoggerChannelType, ...params: any) {
        if (this.channels[channel]) {
            this.log("%c" + channelNames[channel], channelStyles[channel], ...params);
        }
    }

    static logNetwork(...params: any) {
        this.logChannel(LoggerChannelType.Network, ...params);
    }

    static logBase(...params: any) {
        this.logChannel(LoggerChannelType.Base, ...params);
    }

    static logGame(...params: any) {
        this.logChannel(LoggerChannelType.Game, ...params);
    }

    static logUI(...params: any) {
        this.logChannel(LoggerChannelType.UI, ...params);
    }

    static logEvent(...params: any) {
        this.logChannel(LoggerChannelType.Event, ...params);
    }

    static logConfig(...params: any) {
        this.logChannel(LoggerChannelType.Config, ...params);
    }

}
