var fs = require("fs");
require(__dirname + "/protobuf.js")
let GameConfigAll = require(__dirname + "/../DataAssets/TS/GameConfigAll.js");
let totalFileStr = 'package game';

totalFileStr += `

import (
    "fmt"
    "io/ioutil"
    
    "git.inke.cn/BackendPlatform/golang/logging"

    "github.com/golang/protobuf/proto"
)

`

function firstLowerCase(str) {
    return `${str[0].toLowerCase()}${str.slice(1)}`
}


transferList = {};

for(let key in GameConfigAll)
{

    let obj = GameConfigAll[key];

    if(!obj) continue;

    if(obj instanceof Function && (obj.Enums != null || obj.Enum != null)) continue; //如果是枚举类型的话

    if(!key.startsWith("Config")) continue; //说明是某个表的子类型

    if(GameConfigAll[key] instanceof Function && GameConfigAll[key].prototype.list instanceof Array )
    {
        itemName = key.replace("List","");
        // totalFileStr += key + ' , I'+itemName + ',';
        if(GameConfigAll[itemName])
        {
            GameConfigAll[itemName] = undefined;
        }
        transferList[key.replace("List","").replace("Config","")] = "List";
    }
    else
    {
        // totalFileStr += key +' , I' + key + ', ';
        transferList[key.replace("Config","")] = "constant";
    }
    
}

let strStruct = "type GameConfigAll struct {\n";
let strLoad = "func (config *GameConfigAll) LoadData(dir string) {\n";

// console.log(JSON.stringify(transferList));

for(let key in transferList) {
	let isList = transferList[key] == "List";
	let keyName = key + (isList ? "List" : "");
	strStruct += `\n    ${keyName} Config${keyName}`
	strLoad += `\n    config.decode(fmt.Sprintf("%s/${firstLowerCase(key)}.bin", dir), &config.${keyName})`
}

strStruct += "\n}\n\n"
strLoad += "\n}"

totalFileStr += strStruct;
totalFileStr += strLoad;

totalFileStr += `

func (config *GameConfigAll) decode(filePath string, m proto.Message) {
    in, err := ioutil.ReadFile(filePath)
    if err != nil {
        logging.Fatalf("Error reading file: %v, error: %v", filePath, err)
    }

    err = proto.Unmarshal(in, m)
    if err != nil {
        logging.Fatalf("Error Proto Unmarshal file: %v, error: %v", filePath, err)
    }
}

`

// console.log(totalFileStr);


fs.writeFile(__dirname+"/../DataAssets/Go/GameConfigAll.go",totalFileStr,function(err){
    if(err)
    {
        return console.error(err);
    }
    console.log("done generator DataTransferGenerator");
})
