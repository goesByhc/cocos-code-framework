set script_path=.
set BAST_CLASSPATH=%script_path%/excel2plist/lib
set CLASSPATH=%BAST_CLASSPATH%/dom4j-1.6.1.jar
set CLASSPATH=%CLASSPATH%;%BAST_CLASSPATH%/poi-3.7.jar
set CLASSPATH=%CLASSPATH%;%BAST_CLASSPATH%/poi-ooxml-3.7.jar
set CLASSPATH=%CLASSPATH%;%BAST_CLASSPATH%/geronimo-stax-api_1.0_spec-1.0.jar
set CLASSPATH=%CLASSPATH%;%BAST_CLASSPATH%/poi-ooxml-schemas-3.7.jar
set CLASSPATH=%CLASSPATH%;%BAST_CLASSPATH%/protobuf-java-2.6.1.jar
set CLASSPATH=%CLASSPATH%;%BAST_CLASSPATH%/stax-api-1.0.1.jar
set CLASSPATH=%CLASSPATH%;%BAST_CLASSPATH%/xml-apis-1.0.b2.jar
set CLASSPATH=%CLASSPATH%;%BAST_CLASSPATH%/xmlbeans-2.3.0.jar
set CLASSPATH=%CLASSPATH%;%script_path%/excel2plist/bin

set binpath=%script_path%/excel2plist/bin/

echo %script_path%
echo %CLASSPATH%

set targetProtoFolder=%script_path%/../Proto
set xlsxPath=%script_path%/../Design/
set protoDataFolder=%script_path%/../Assets

javac -encoding UTF-8 -Xlint:unchecked -classpath %CLASSPATH% -d %binpath% -sourcepath %script_path%/excel2plist/src/ %script_path%/excel2plist/src/com/funlink/pb/*.java
echo 'create proto'
java  -Xmx1024m -Djava.awt.headless=true -classpath %CLASSPATH% com.funlink.pb.BootStrap file %xlsxPath% %targetProtoFolder%/ > %script_path%/gen_data.log
echo 'generating classes files'
protoc %targetProtoFolder%/Config*.proto --proto_path=%targetProtoFolder% --java_out=%script_path%/excel2plist/src
protoc %targetProtoFolder%/Config*.proto --proto_path=%targetProtoFolder% --java_out=D:/work/game-server/game-config/src/main/java/
echo 'compiling Data'
javac -encoding UTF-8 -Xlint:unchecked -classpath %CLASSPATH% -d %binpath% -sourcepath %script_path%/excel2plist/src/ %script_path%/excel2plist/src/com/funlink/conf/*.java
echo 'generating GameConfig file'
java -Xmx512m -classpath %CLASSPATH% com.funlink.pb.BootStrap data  %xlsxPath% %protoDataFolder%/ >> %script_path%/gen_data.log
cd  %targetProductPath%/

pause
