var fs = require("fs");
require(__dirname+"/protobuf.js")
let Gamemessage = require(__dirname+"/../NetworkAssets/TS/Gamemessage.js")

let Enums = Gamemessage.MessageType.Enums

let MessageTypeEnums = JSON.parse(JSON.stringify(Enums))

let totalFileStr = `
package game

import (
    "github.com/golang/protobuf/proto"
)

type DataStruct interface {
    proto.Message

    GetUid() string
    GetRoomId() string
}
`

let allMsgType = [];


for(let key in MessageTypeEnums) {
	if (key != "Unknown") {
		allMsgType.push(key)
	}
}

let strGet2SMessageStruct = `
func Get2SMessageStruct(commandId MessageType_Enums) DataStruct {
    switch commandId {
`

for (let i = 0; i < allMsgType.length; i ++) {
	let m = allMsgType[i];
	if (m.indexOf("2S") != -1) {
		strGet2SMessageStruct +=
`        case MessageType_${m}:
            return &${m}{}
`
	}
}

strGet2SMessageStruct +=
	`
        default:
            return nil
	}
}
`

totalFileStr += strGet2SMessageStruct


let strGetMessageStruct = `
func GetMessageStruct(commandId MessageType_Enums) proto.Message {
    switch commandId {
`

for (let i = 0; i < allMsgType.length; i ++) {
	let name = allMsgType[i];
	strGetMessageStruct += 
`        case MessageType_${name}:
            return &${name}{}
`
}

strGetMessageStruct += 
`
        default:
            return nil
	}
}
`

totalFileStr += strGetMessageStruct


// let factorStr = ``;
//
// for (let i = 0; i < allMsgType.length; i ++) {
// 	let name = allMsgType[i];
// 	let msgHost = name.substring(0, 3)
// 	factorStr +=
// `func (${msgHost.toLowerCase()} *GameMessage${msgHost}) Get${name}() *${name} {
//     return ${msgHost.toLowerCase()}.Body.(*${name})
// }
// `
// }
//
// totalFileStr += factorStr

// console.log(totalFileStr);


fs.writeFile(__dirname+"/../NetworkAssets/Go/MessageTransfer.go", totalFileStr, function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("done generate gen_network_wrapper_go");
});



