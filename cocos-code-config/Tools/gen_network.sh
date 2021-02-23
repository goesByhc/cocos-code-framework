#!/bin/bash

# 确认有JAVA环境
# 确认安装pbjs pbts
# 确认protobuf版本 3.13.0
# protoc --version
# brew install protobuf@3.13.0


script_path=`dirname "$0"`
echo $script_path
# set -x

proto_path=$script_path/../NetworkProto

target_path=$script_path/../NetworkAssets
target_file_path_TS=$target_path/TS/GameMessage
target_file_path_Go=$target_path/Go
to_path=$script_path/../../sirius-flightchess-cocos/flightchess/assets/scripts/network/
server_path=$script_path/../../sirius-flightchess-cocos/simpleNodeServer/src/network

if [[ ! -d $target_path/TS ]]; then
	mkdir -p $target_path/TS
fi
if [[ ! -d $target_file_path_Go ]]; then
	mkdir -p $target_file_path_Go
fi

#ts
pbjs -t static-module -w commonjs -o ${target_file_path_TS}.js $proto_path/*.proto
pbts --no-comments -g -o ${target_file_path_TS}.d.ts ${target_file_path_TS}.js

sed -i '' 's/"protobufjs";/"..\/libs\/protobuf";\nimport {Long} from "..\/libs\/protobuf";/g' $target_file_path_TS.d.ts
sed -i '' 's/require(\"protobufjs\/minimal\");/protobuf/g' ${target_file_path_TS}.js
sed -i '' 's/|Long//g' $target_file_path_TS.d.ts ##把所有的Long都给取消了 方便代码提示 其实没多少区别


#gp
protoc -I=$proto_path --go_out=$target_file_path_Go $proto_path/*.proto


node $script_path/gen_network_wrapper_ts.js
node $script_path/gen_network_wrapper_go.js


# cp $target_file_path.d.ts $to_path/GameMessage.d.ts
# cp $target_file_path.js $to_path/GameMessage.js
# cp $target_path/MessageTransferAuto.ts $to_path/MessageTransferAuto.ts

##simple server js
# cp ${target_file_path}.js $server_path/GameMessage.js
# sed -i '' 's/var $protobuf = protobuf/var $protobuf = require("..\/libs\/protobuf");/g' $server_path/GameMessage.js
# cp $script_path/../Assets/GameMessage.d.ts $server_path/GameMessage.d.ts
# cp $script_path/../Assets/MessageTransferAuto.ts $server_path/MessageTransferAuto.ts
#server end

echo "done"