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

echo_color green "start [gen_data_go]"

script_path=`dirname "$0"`

proto_path="$script_path/../DataProto"
target_path="$script_path/../DataAssets/Go/"

echo generating Go Config

if [[ ! -d $target_path ]]; then
	mkdir $target_path
fi

protoc -I=$proto_path --go_out=$target_path $proto_path/*.proto


node $script_path/gen_config_wrapper_go.js


echo "gen message type"

echo_color green "done [gen_data_go]"