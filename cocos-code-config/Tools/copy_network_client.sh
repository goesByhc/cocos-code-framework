
script_path=`dirname "$0"`
echo $script_path
# set -x

proto_path=$script_path/../NetworkProto

target_path=$script_path/../NetworkAssets
target_file_path_TS=$target_path/TS/GameMessage
target_file_path_Go=$target_path/Go
source $script_path/config


cp $target_file_path_TS.d.ts $target_network_path/GameMessage.d.ts
cp $target_file_path_TS.js $target_network_path/GameMessage.js
sed -i '' 's/var \$protobuf = protobuf/var \$protobuf = require("..\/libs\/protobuf\");/g' $target_network_path/GameMessage.js
cp $target_path/TS/MessageTransferAuto.ts $target_network_path/MessageTransferAuto.ts