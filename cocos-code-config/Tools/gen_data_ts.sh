#!/bin/bash
#set $1 to generate config 
#else generate clientServer proto

function echo_color() {
    if [ $1 == "green" ]; then
        echo "\033[32;40m$2\033[0m"
    elif [ $1 == "red" ]; then
        echo "\033[31;40m$2\033[0m"
    fi
}

echo_color green "start [gen_data_ts]"

script_path=`dirname "$0"`

target_path="$script_path/../DataAssets/TS"
product_path="$target_path/GameConfigAll"
proto_path="$script_path/../DataProto"

if [[ ! -d $target_path ]]; then
	mkdir $target_path
fi

echo generating config js ts

pbjs -t static-module -w commonjs -o ${product_path}.js $proto_path/*.proto
pbts --no-comments -g -o ${product_path}.d.ts ${product_path}.js


sed -i '' 's/require(\"protobufjs\/minimal\");/protobuf/g' ${product_path}.js

echo "gen message type"

# echo_color green "generator GameConfigAll"
# $tsGaneratorTool -p $targetProtoFolder -o $protoDataFolder

node $script_path/gen_config_wrapper_ts.js

echo_color green "done [gen_data_ts]"
