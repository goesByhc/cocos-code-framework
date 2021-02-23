var fs = require("fs");
require(__dirname + "/protobuf.js")
let GameConfigAll = require(__dirname + "/../DataAssets/TS/GameConfigAll.js");
let totalFileStr = 'import { ';
let transferList = {};

for(let key in GameConfigAll)
{
    let obj = GameConfigAll[key];

    if(!obj) continue;

    if(obj instanceof Function && (obj.Enums != null || obj.Enum != null)) continue; //如果是枚举类型的话

    if(GameConfigAll[key] instanceof Function && GameConfigAll[key].prototype.list instanceof Array )
    {
        itemName = key.replace("List","");
        totalFileStr += key + ' , I'+itemName + ',';
        if(GameConfigAll[itemName])
        {
            GameConfigAll[itemName] = undefined;
        }
        transferList[key.replace("List","").replace("Config","")] = "list";
    }
    else
    {
        totalFileStr += key +' , I' + key + ', ';
        transferList[key.replace("Config","")] = "constant";
    }
    
}
totalFileStr = totalFileStr.substring(0,totalFileStr.length-1);
totalFileStr += '} from "./GameConfigAll";\n'

totalFileStr += `
import BundleManager from "../util/BundleManager";
import Logger from "../util/Logger";`

totalFileStr += 'export default class GameConfigAll {\n';

function firstLowerCase(str) {
    return `${str[0].toLowerCase()}${str.slice(1)}`
}

for(let key in transferList)
{
    let firstLowerKey = firstLowerCase(key);

    totalFileStr += "    " + firstLowerKey + ": IConfig" + key ;
    if(transferList[key] =='list') totalFileStr +='[]'
    totalFileStr +=';\n';
    
}

totalFileStr +=`\n
    async readFromBinaryFile(key: string, file: string, proto): Promise<void> {
        return new Promise((resolve, reject) => {
            BundleManager.getInstance().frameBundle.load(file, (err, data: cc.Asset) => {
                if (err) {
                    Logger.error("GameConfigAll readFromBinaryFile file:", file, "error:", err);
                }
                cc.assetManager.loadAny({url: data.nativeUrl, type: "binary"}, (err, file: Uint8Array) => {
                    if (err) {
                        Logger.logBase("Config readFromBinaryFile Error: " + data.nativeUrl + err.message);
                        Logger.logBase("Config readFromBinaryFile Error: " + err);
                    }
                    try {
                        let byteArray = new Uint8Array(file);
                        this[key] = proto.decode(byteArray).list;
                        resolve();
                    } catch (e) {
                        throw new Error(e);
                    }
                });
            })
        });
    }

    async readConstantFromBinaryFile(key: string, file: string, proto): Promise<void> {
        return new Promise((resolve, reject) => {
            BundleManager.getInstance().frameBundle.load(file, (err, data: cc.Asset) => {
                if (err) {
                    Logger.error("GameConfigAll readConstantFromBinaryFile file:", file, "error:", err);
                }
                cc.assetManager.loadAny({url: data.nativeUrl, type: "binary"}, (err, file: Uint8Array) => {
                    if (err) {
                        Logger.logBase("Config readConstantFromBinaryFile Error: " + data.nativeUrl + err.message);
                        Logger.logBase("Config readConstantFromBinaryFile Error: " + err);
                    }
                    try {
                        let byteArray = new Uint8Array(file);
                        this[key] = proto.decode(byteArray);
                        resolve();
                    } catch (e) {
                        throw new Error(e);
                    }
                });
            });
        });
    }

    async load() {
`; 

let contentArr = [];
for(let key in transferList)
{
    let firstLowerKey = firstLowerCase(key);
    if(transferList[key] =='list') totalFileStr += `        let ${firstLowerKey} = this.readFromBinaryFile("${firstLowerKey}", "archive/${firstLowerKey}", Config${key}List);\n`
    else totalFileStr += `        let ${firstLowerKey} = this.readConstantFromBinaryFile("${firstLowerKey}", "archive/${firstLowerKey}", Config${key});\n`
    contentArr.push(firstLowerKey)
}

totalFileStr += `        await Promise.all([${contentArr.toString()}]);\n   }\n}\n`

fs.writeFile(__dirname+"/../DataAssets/TS/GameConfigWrapper.ts",totalFileStr,function(err){
    if(err)
    {
        return console.error(err);
    }
    console.log("done generator DataTransferGenerator");
})

