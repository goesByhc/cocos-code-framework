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

echo_color green "start [copy data client]"

script_path=`dirname "$0"`

assets_path="$script_path/../DataAssets"
bin_path="$assets_path/Archive"
ts_path="$assets_path/TS"

# set -x

source $script_path/config


#Copy bin
for file in `ls $bin_path` ; do
	cp $bin_path/$file $target_archive_path/$file
done


#Copy TypeScript file
# cp -rf $assets_path/Archive $project_path/resources/
cp $ts_path/GameConfigAll.d.ts $target_config_path/GameConfigAll.d.ts
cp $ts_path/GameConfigAll.js $target_config_path/GameConfigAll.js
sed -i '' 's/var \$protobuf = protobuf/var \$protobuf = require("..\/libs\/protobuf\");/g' $target_config_path/GameConfigAll.js
cp $ts_path/GameConfigWrapper.ts $target_config_path/GameConfigWrapper.ts

echo_color green "done [copy data client]"
