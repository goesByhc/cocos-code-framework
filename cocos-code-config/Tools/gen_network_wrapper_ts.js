var fs = require("fs");
require(__dirname+"/protobuf.js")
let Gamemessage = require(__dirname+"/../NetworkAssets/TS/Gamemessage.js")

let Enums = Gamemessage.MessageType.Enums

let totalFileStr = 'import {'

let MessageTypeEnums = JSON.parse(JSON.stringify(Enums))

for(let key in MessageTypeEnums) {
	if (key == "Unknown") {
		continue;
	}

	totalFileStr += key + ', '
}

//import类型
totalFileStr += 'MessageType} from "./GameMessage";\n'

totalFileStr += 'import Util from "../util/Util";\n'

totalFileStr += "\n"


//生成protoType
totalFileStr += 'export function getMessagePrototypeById(id: MessageType.Enums): {encode: Function, decode: Function, create: Function} {\n'
totalFileStr += '	switch (id) {\n'

for(let key in MessageTypeEnums) {

	if (key == "Unknown") {
		continue;
	}

	totalFileStr += `		case MessageType.Enums.${key}:\n`
	totalFileStr += `			return ${key};\n`
}

totalFileStr += '	}\n'
totalFileStr += '	Util.Error("Unknown Message Type Id: " + id);\n'
totalFileStr += '}\n\n\n'



//生成名字
totalFileStr += 'export function getMessageNameById(id: MessageType.Enums): string {\n'
totalFileStr += '	switch (id) {\n'

for(let key in MessageTypeEnums) {
	totalFileStr += `		case MessageType.Enums.${key}:\n`
	totalFileStr += `			return "${key}";\n`
}

totalFileStr += '	}\n'
totalFileStr += '	Util.Error("Unknown Message Type Id: " + id);\n'
totalFileStr += '}\n\n\n'



// console.log(totalFileStr);

fs.writeFile(__dirname+"/../NetworkAssets/TS/MessageTransferAuto.ts", totalFileStr, function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("done generate gen_network_wrapper_ts");
});



