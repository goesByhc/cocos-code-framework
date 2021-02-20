/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("../libs/protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ConfigAudioList = (function() {

    /**
     * Properties of a ConfigAudioList.
     * @exports IConfigAudioList
     * @interface IConfigAudioList
     * @property {Array.<IConfigAudio>|null} [list] ConfigAudioList list
     */

    /**
     * Constructs a new ConfigAudioList.
     * @exports ConfigAudioList
     * @classdesc Represents a ConfigAudioList.
     * @implements IConfigAudioList
     * @constructor
     * @param {IConfigAudioList=} [properties] Properties to set
     */
    function ConfigAudioList(properties) {
        this.list = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConfigAudioList list.
     * @member {Array.<IConfigAudio>} list
     * @memberof ConfigAudioList
     * @instance
     */
    ConfigAudioList.prototype.list = $util.emptyArray;

    /**
     * Creates a new ConfigAudioList instance using the specified properties.
     * @function create
     * @memberof ConfigAudioList
     * @static
     * @param {IConfigAudioList=} [properties] Properties to set
     * @returns {ConfigAudioList} ConfigAudioList instance
     */
    ConfigAudioList.create = function create(properties) {
        return new ConfigAudioList(properties);
    };

    /**
     * Encodes the specified ConfigAudioList message. Does not implicitly {@link ConfigAudioList.verify|verify} messages.
     * @function encode
     * @memberof ConfigAudioList
     * @static
     * @param {IConfigAudioList} message ConfigAudioList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConfigAudioList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.list != null && message.list.length)
            for (var i = 0; i < message.list.length; ++i)
                $root.ConfigAudio.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ConfigAudioList message, length delimited. Does not implicitly {@link ConfigAudioList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConfigAudioList
     * @static
     * @param {IConfigAudioList} message ConfigAudioList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConfigAudioList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConfigAudioList message from the specified reader or buffer.
     * @function decode
     * @memberof ConfigAudioList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConfigAudioList} ConfigAudioList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConfigAudioList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConfigAudioList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.list && message.list.length))
                    message.list = [];
                message.list.push($root.ConfigAudio.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ConfigAudioList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConfigAudioList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConfigAudioList} ConfigAudioList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConfigAudioList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConfigAudioList message.
     * @function verify
     * @memberof ConfigAudioList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConfigAudioList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.list != null && message.hasOwnProperty("list")) {
            if (!Array.isArray(message.list))
                return "list: array expected";
            for (var i = 0; i < message.list.length; ++i) {
                var error = $root.ConfigAudio.verify(message.list[i]);
                if (error)
                    return "list." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ConfigAudioList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConfigAudioList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConfigAudioList} ConfigAudioList
     */
    ConfigAudioList.fromObject = function fromObject(object) {
        if (object instanceof $root.ConfigAudioList)
            return object;
        var message = new $root.ConfigAudioList();
        if (object.list) {
            if (!Array.isArray(object.list))
                throw TypeError(".ConfigAudioList.list: array expected");
            message.list = [];
            for (var i = 0; i < object.list.length; ++i) {
                if (typeof object.list[i] !== "object")
                    throw TypeError(".ConfigAudioList.list: object expected");
                message.list[i] = $root.ConfigAudio.fromObject(object.list[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ConfigAudioList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConfigAudioList
     * @static
     * @param {ConfigAudioList} message ConfigAudioList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConfigAudioList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.list = [];
        if (message.list && message.list.length) {
            object.list = [];
            for (var j = 0; j < message.list.length; ++j)
                object.list[j] = $root.ConfigAudio.toObject(message.list[j], options);
        }
        return object;
    };

    /**
     * Converts this ConfigAudioList to JSON.
     * @function toJSON
     * @memberof ConfigAudioList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConfigAudioList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ConfigAudioList;
})();

$root.ConfigAudio = (function() {

    /**
     * Properties of a ConfigAudio.
     * @exports IConfigAudio
     * @interface IConfigAudio
     * @property {number|null} [typeId] ConfigAudio typeId
     * @property {string|null} [path] ConfigAudio path
     */

    /**
     * Constructs a new ConfigAudio.
     * @exports ConfigAudio
     * @classdesc Represents a ConfigAudio.
     * @implements IConfigAudio
     * @constructor
     * @param {IConfigAudio=} [properties] Properties to set
     */
    function ConfigAudio(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConfigAudio typeId.
     * @member {number} typeId
     * @memberof ConfigAudio
     * @instance
     */
    ConfigAudio.prototype.typeId = 0;

    /**
     * ConfigAudio path.
     * @member {string} path
     * @memberof ConfigAudio
     * @instance
     */
    ConfigAudio.prototype.path = "";

    /**
     * Creates a new ConfigAudio instance using the specified properties.
     * @function create
     * @memberof ConfigAudio
     * @static
     * @param {IConfigAudio=} [properties] Properties to set
     * @returns {ConfigAudio} ConfigAudio instance
     */
    ConfigAudio.create = function create(properties) {
        return new ConfigAudio(properties);
    };

    /**
     * Encodes the specified ConfigAudio message. Does not implicitly {@link ConfigAudio.verify|verify} messages.
     * @function encode
     * @memberof ConfigAudio
     * @static
     * @param {IConfigAudio} message ConfigAudio message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConfigAudio.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.typeId != null && Object.hasOwnProperty.call(message, "typeId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.typeId);
        if (message.path != null && Object.hasOwnProperty.call(message, "path"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
        return writer;
    };

    /**
     * Encodes the specified ConfigAudio message, length delimited. Does not implicitly {@link ConfigAudio.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConfigAudio
     * @static
     * @param {IConfigAudio} message ConfigAudio message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConfigAudio.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConfigAudio message from the specified reader or buffer.
     * @function decode
     * @memberof ConfigAudio
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConfigAudio} ConfigAudio
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConfigAudio.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConfigAudio();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.typeId = reader.int32();
                break;
            case 2:
                message.path = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ConfigAudio message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConfigAudio
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConfigAudio} ConfigAudio
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConfigAudio.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConfigAudio message.
     * @function verify
     * @memberof ConfigAudio
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConfigAudio.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.typeId != null && message.hasOwnProperty("typeId"))
            if (!$util.isInteger(message.typeId))
                return "typeId: integer expected";
        if (message.path != null && message.hasOwnProperty("path"))
            if (!$util.isString(message.path))
                return "path: string expected";
        return null;
    };

    /**
     * Creates a ConfigAudio message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConfigAudio
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConfigAudio} ConfigAudio
     */
    ConfigAudio.fromObject = function fromObject(object) {
        if (object instanceof $root.ConfigAudio)
            return object;
        var message = new $root.ConfigAudio();
        if (object.typeId != null)
            message.typeId = object.typeId | 0;
        if (object.path != null)
            message.path = String(object.path);
        return message;
    };

    /**
     * Creates a plain object from a ConfigAudio message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConfigAudio
     * @static
     * @param {ConfigAudio} message ConfigAudio
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConfigAudio.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.typeId = 0;
            object.path = "";
        }
        if (message.typeId != null && message.hasOwnProperty("typeId"))
            object.typeId = message.typeId;
        if (message.path != null && message.hasOwnProperty("path"))
            object.path = message.path;
        return object;
    };

    /**
     * Converts this ConfigAudio to JSON.
     * @function toJSON
     * @memberof ConfigAudio
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConfigAudio.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ConfigAudio;
})();

$root.ConfigConstants = (function() {

    /**
     * Properties of a ConfigConstants.
     * @exports IConfigConstants
     * @interface IConfigConstants
     * @property {string|null} [gameName] ConfigConstants gameName
     * @property {number|null} [maxPlayerCount] ConfigConstants maxPlayerCount
     * @property {number|null} [maxChessCount] ConfigConstants maxChessCount
     * @property {number|null} [energyCount] ConfigConstants energyCount
     * @property {number|null} [gameStartCountDown] ConfigConstants gameStartCountDown
     * @property {number|null} [playerActionOverTime] ConfigConstants playerActionOverTime
     * @property {number|null} [TypeTriggerConfig] ConfigConstants TypeTriggerConfig
     * @property {number|null} [TypeTriggerCondition] ConfigConstants TypeTriggerCondition
     * @property {number|null} [TypeTriggerEffect] ConfigConstants TypeTriggerEffect
     * @property {number|null} [TypeTargetSelector] ConfigConstants TypeTargetSelector
     * @property {number|null} [TypeRandomPool] ConfigConstants TypeRandomPool
     * @property {number|null} [TypeGrid] ConfigConstants TypeGrid
     * @property {number|null} [TypePlayer] ConfigConstants TypePlayer
     * @property {number|null} [TypeChessGroup] ConfigConstants TypeChessGroup
     * @property {number|null} [TypeStar] ConfigConstants TypeStar
     */

    /**
     * Constructs a new ConfigConstants.
     * @exports ConfigConstants
     * @classdesc Represents a ConfigConstants.
     * @implements IConfigConstants
     * @constructor
     * @param {IConfigConstants=} [properties] Properties to set
     */
    function ConfigConstants(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConfigConstants gameName.
     * @member {string} gameName
     * @memberof ConfigConstants
     * @instance
     */
    ConfigConstants.prototype.gameName = "";

    /**
     * ConfigConstants maxPlayerCount.
     * @member {number} maxPlayerCount
     * @memberof ConfigConstants
     * @instance
     */
    ConfigConstants.prototype.maxPlayerCount = 0;

    /**
     * ConfigConstants maxChessCount.
     * @member {number} maxChessCount
     * @memberof ConfigConstants
     * @instance
     */
    ConfigConstants.prototype.maxChessCount = 0;

    /**
     * ConfigConstants energyCount.
     * @member {number} energyCount
     * @memberof ConfigConstants
     * @instance
     */
    ConfigConstants.prototype.energyCount = 0;

    /**
     * ConfigConstants gameStartCountDown.
     * @member {number} gameStartCountDown
     * @memberof ConfigConstants
     * @instance
     */
    ConfigConstants.prototype.gameStartCountDown = 0;

    /**
     * ConfigConstants playerActionOverTime.
     * @member {number} playerActionOverTime
     * @memberof ConfigConstants
     * @instance
     */
    ConfigConstants.prototype.playerActionOverTime = 0;

    /**
     * ConfigConstants TypeTriggerConfig.
     * @member {number} TypeTriggerConfig
     * @memberof ConfigConstants
     * @instance
     */
    ConfigConstants.prototype.TypeTriggerConfig = 0;

    /**
     * ConfigConstants TypeTriggerCondition.
     * @member {number} TypeTriggerCondition
     * @memberof ConfigConstants
     * @instance
     */
    ConfigConstants.prototype.TypeTriggerCondition = 0;

    /**
     * ConfigConstants TypeTriggerEffect.
     * @member {number} TypeTriggerEffect
     * @memberof ConfigConstants
     * @instance
     */
    ConfigConstants.prototype.TypeTriggerEffect = 0;

    /**
     * ConfigConstants TypeTargetSelector.
     * @member {number} TypeTargetSelector
     * @memberof ConfigConstants
     * @instance
     */
    ConfigConstants.prototype.TypeTargetSelector = 0;

    /**
     * ConfigConstants TypeRandomPool.
     * @member {number} TypeRandomPool
     * @memberof ConfigConstants
     * @instance
     */
    ConfigConstants.prototype.TypeRandomPool = 0;

    /**
     * ConfigConstants TypeGrid.
     * @member {number} TypeGrid
     * @memberof ConfigConstants
     * @instance
     */
    ConfigConstants.prototype.TypeGrid = 0;

    /**
     * ConfigConstants TypePlayer.
     * @member {number} TypePlayer
     * @memberof ConfigConstants
     * @instance
     */
    ConfigConstants.prototype.TypePlayer = 0;

    /**
     * ConfigConstants TypeChessGroup.
     * @member {number} TypeChessGroup
     * @memberof ConfigConstants
     * @instance
     */
    ConfigConstants.prototype.TypeChessGroup = 0;

    /**
     * ConfigConstants TypeStar.
     * @member {number} TypeStar
     * @memberof ConfigConstants
     * @instance
     */
    ConfigConstants.prototype.TypeStar = 0;

    /**
     * Creates a new ConfigConstants instance using the specified properties.
     * @function create
     * @memberof ConfigConstants
     * @static
     * @param {IConfigConstants=} [properties] Properties to set
     * @returns {ConfigConstants} ConfigConstants instance
     */
    ConfigConstants.create = function create(properties) {
        return new ConfigConstants(properties);
    };

    /**
     * Encodes the specified ConfigConstants message. Does not implicitly {@link ConfigConstants.verify|verify} messages.
     * @function encode
     * @memberof ConfigConstants
     * @static
     * @param {IConfigConstants} message ConfigConstants message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConfigConstants.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.gameName != null && Object.hasOwnProperty.call(message, "gameName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameName);
        if (message.maxPlayerCount != null && Object.hasOwnProperty.call(message, "maxPlayerCount"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.maxPlayerCount);
        if (message.maxChessCount != null && Object.hasOwnProperty.call(message, "maxChessCount"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.maxChessCount);
        if (message.energyCount != null && Object.hasOwnProperty.call(message, "energyCount"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.energyCount);
        if (message.gameStartCountDown != null && Object.hasOwnProperty.call(message, "gameStartCountDown"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.gameStartCountDown);
        if (message.playerActionOverTime != null && Object.hasOwnProperty.call(message, "playerActionOverTime"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.playerActionOverTime);
        if (message.TypeTriggerConfig != null && Object.hasOwnProperty.call(message, "TypeTriggerConfig"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.TypeTriggerConfig);
        if (message.TypeTriggerCondition != null && Object.hasOwnProperty.call(message, "TypeTriggerCondition"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.TypeTriggerCondition);
        if (message.TypeTriggerEffect != null && Object.hasOwnProperty.call(message, "TypeTriggerEffect"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.TypeTriggerEffect);
        if (message.TypeTargetSelector != null && Object.hasOwnProperty.call(message, "TypeTargetSelector"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.TypeTargetSelector);
        if (message.TypeRandomPool != null && Object.hasOwnProperty.call(message, "TypeRandomPool"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.TypeRandomPool);
        if (message.TypeGrid != null && Object.hasOwnProperty.call(message, "TypeGrid"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.TypeGrid);
        if (message.TypePlayer != null && Object.hasOwnProperty.call(message, "TypePlayer"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.TypePlayer);
        if (message.TypeChessGroup != null && Object.hasOwnProperty.call(message, "TypeChessGroup"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.TypeChessGroup);
        if (message.TypeStar != null && Object.hasOwnProperty.call(message, "TypeStar"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.TypeStar);
        return writer;
    };

    /**
     * Encodes the specified ConfigConstants message, length delimited. Does not implicitly {@link ConfigConstants.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConfigConstants
     * @static
     * @param {IConfigConstants} message ConfigConstants message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConfigConstants.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConfigConstants message from the specified reader or buffer.
     * @function decode
     * @memberof ConfigConstants
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConfigConstants} ConfigConstants
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConfigConstants.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConfigConstants();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.gameName = reader.string();
                break;
            case 2:
                message.maxPlayerCount = reader.int32();
                break;
            case 3:
                message.maxChessCount = reader.int32();
                break;
            case 4:
                message.energyCount = reader.int32();
                break;
            case 5:
                message.gameStartCountDown = reader.int32();
                break;
            case 6:
                message.playerActionOverTime = reader.int32();
                break;
            case 7:
                message.TypeTriggerConfig = reader.int32();
                break;
            case 8:
                message.TypeTriggerCondition = reader.int32();
                break;
            case 9:
                message.TypeTriggerEffect = reader.int32();
                break;
            case 10:
                message.TypeTargetSelector = reader.int32();
                break;
            case 11:
                message.TypeRandomPool = reader.int32();
                break;
            case 12:
                message.TypeGrid = reader.int32();
                break;
            case 13:
                message.TypePlayer = reader.int32();
                break;
            case 14:
                message.TypeChessGroup = reader.int32();
                break;
            case 15:
                message.TypeStar = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ConfigConstants message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConfigConstants
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConfigConstants} ConfigConstants
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConfigConstants.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConfigConstants message.
     * @function verify
     * @memberof ConfigConstants
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConfigConstants.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.gameName != null && message.hasOwnProperty("gameName"))
            if (!$util.isString(message.gameName))
                return "gameName: string expected";
        if (message.maxPlayerCount != null && message.hasOwnProperty("maxPlayerCount"))
            if (!$util.isInteger(message.maxPlayerCount))
                return "maxPlayerCount: integer expected";
        if (message.maxChessCount != null && message.hasOwnProperty("maxChessCount"))
            if (!$util.isInteger(message.maxChessCount))
                return "maxChessCount: integer expected";
        if (message.energyCount != null && message.hasOwnProperty("energyCount"))
            if (!$util.isInteger(message.energyCount))
                return "energyCount: integer expected";
        if (message.gameStartCountDown != null && message.hasOwnProperty("gameStartCountDown"))
            if (!$util.isInteger(message.gameStartCountDown))
                return "gameStartCountDown: integer expected";
        if (message.playerActionOverTime != null && message.hasOwnProperty("playerActionOverTime"))
            if (!$util.isInteger(message.playerActionOverTime))
                return "playerActionOverTime: integer expected";
        if (message.TypeTriggerConfig != null && message.hasOwnProperty("TypeTriggerConfig"))
            if (!$util.isInteger(message.TypeTriggerConfig))
                return "TypeTriggerConfig: integer expected";
        if (message.TypeTriggerCondition != null && message.hasOwnProperty("TypeTriggerCondition"))
            if (!$util.isInteger(message.TypeTriggerCondition))
                return "TypeTriggerCondition: integer expected";
        if (message.TypeTriggerEffect != null && message.hasOwnProperty("TypeTriggerEffect"))
            if (!$util.isInteger(message.TypeTriggerEffect))
                return "TypeTriggerEffect: integer expected";
        if (message.TypeTargetSelector != null && message.hasOwnProperty("TypeTargetSelector"))
            if (!$util.isInteger(message.TypeTargetSelector))
                return "TypeTargetSelector: integer expected";
        if (message.TypeRandomPool != null && message.hasOwnProperty("TypeRandomPool"))
            if (!$util.isInteger(message.TypeRandomPool))
                return "TypeRandomPool: integer expected";
        if (message.TypeGrid != null && message.hasOwnProperty("TypeGrid"))
            if (!$util.isInteger(message.TypeGrid))
                return "TypeGrid: integer expected";
        if (message.TypePlayer != null && message.hasOwnProperty("TypePlayer"))
            if (!$util.isInteger(message.TypePlayer))
                return "TypePlayer: integer expected";
        if (message.TypeChessGroup != null && message.hasOwnProperty("TypeChessGroup"))
            if (!$util.isInteger(message.TypeChessGroup))
                return "TypeChessGroup: integer expected";
        if (message.TypeStar != null && message.hasOwnProperty("TypeStar"))
            if (!$util.isInteger(message.TypeStar))
                return "TypeStar: integer expected";
        return null;
    };

    /**
     * Creates a ConfigConstants message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConfigConstants
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConfigConstants} ConfigConstants
     */
    ConfigConstants.fromObject = function fromObject(object) {
        if (object instanceof $root.ConfigConstants)
            return object;
        var message = new $root.ConfigConstants();
        if (object.gameName != null)
            message.gameName = String(object.gameName);
        if (object.maxPlayerCount != null)
            message.maxPlayerCount = object.maxPlayerCount | 0;
        if (object.maxChessCount != null)
            message.maxChessCount = object.maxChessCount | 0;
        if (object.energyCount != null)
            message.energyCount = object.energyCount | 0;
        if (object.gameStartCountDown != null)
            message.gameStartCountDown = object.gameStartCountDown | 0;
        if (object.playerActionOverTime != null)
            message.playerActionOverTime = object.playerActionOverTime | 0;
        if (object.TypeTriggerConfig != null)
            message.TypeTriggerConfig = object.TypeTriggerConfig | 0;
        if (object.TypeTriggerCondition != null)
            message.TypeTriggerCondition = object.TypeTriggerCondition | 0;
        if (object.TypeTriggerEffect != null)
            message.TypeTriggerEffect = object.TypeTriggerEffect | 0;
        if (object.TypeTargetSelector != null)
            message.TypeTargetSelector = object.TypeTargetSelector | 0;
        if (object.TypeRandomPool != null)
            message.TypeRandomPool = object.TypeRandomPool | 0;
        if (object.TypeGrid != null)
            message.TypeGrid = object.TypeGrid | 0;
        if (object.TypePlayer != null)
            message.TypePlayer = object.TypePlayer | 0;
        if (object.TypeChessGroup != null)
            message.TypeChessGroup = object.TypeChessGroup | 0;
        if (object.TypeStar != null)
            message.TypeStar = object.TypeStar | 0;
        return message;
    };

    /**
     * Creates a plain object from a ConfigConstants message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConfigConstants
     * @static
     * @param {ConfigConstants} message ConfigConstants
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConfigConstants.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.gameName = "";
            object.maxPlayerCount = 0;
            object.maxChessCount = 0;
            object.energyCount = 0;
            object.gameStartCountDown = 0;
            object.playerActionOverTime = 0;
            object.TypeTriggerConfig = 0;
            object.TypeTriggerCondition = 0;
            object.TypeTriggerEffect = 0;
            object.TypeTargetSelector = 0;
            object.TypeRandomPool = 0;
            object.TypeGrid = 0;
            object.TypePlayer = 0;
            object.TypeChessGroup = 0;
            object.TypeStar = 0;
        }
        if (message.gameName != null && message.hasOwnProperty("gameName"))
            object.gameName = message.gameName;
        if (message.maxPlayerCount != null && message.hasOwnProperty("maxPlayerCount"))
            object.maxPlayerCount = message.maxPlayerCount;
        if (message.maxChessCount != null && message.hasOwnProperty("maxChessCount"))
            object.maxChessCount = message.maxChessCount;
        if (message.energyCount != null && message.hasOwnProperty("energyCount"))
            object.energyCount = message.energyCount;
        if (message.gameStartCountDown != null && message.hasOwnProperty("gameStartCountDown"))
            object.gameStartCountDown = message.gameStartCountDown;
        if (message.playerActionOverTime != null && message.hasOwnProperty("playerActionOverTime"))
            object.playerActionOverTime = message.playerActionOverTime;
        if (message.TypeTriggerConfig != null && message.hasOwnProperty("TypeTriggerConfig"))
            object.TypeTriggerConfig = message.TypeTriggerConfig;
        if (message.TypeTriggerCondition != null && message.hasOwnProperty("TypeTriggerCondition"))
            object.TypeTriggerCondition = message.TypeTriggerCondition;
        if (message.TypeTriggerEffect != null && message.hasOwnProperty("TypeTriggerEffect"))
            object.TypeTriggerEffect = message.TypeTriggerEffect;
        if (message.TypeTargetSelector != null && message.hasOwnProperty("TypeTargetSelector"))
            object.TypeTargetSelector = message.TypeTargetSelector;
        if (message.TypeRandomPool != null && message.hasOwnProperty("TypeRandomPool"))
            object.TypeRandomPool = message.TypeRandomPool;
        if (message.TypeGrid != null && message.hasOwnProperty("TypeGrid"))
            object.TypeGrid = message.TypeGrid;
        if (message.TypePlayer != null && message.hasOwnProperty("TypePlayer"))
            object.TypePlayer = message.TypePlayer;
        if (message.TypeChessGroup != null && message.hasOwnProperty("TypeChessGroup"))
            object.TypeChessGroup = message.TypeChessGroup;
        if (message.TypeStar != null && message.hasOwnProperty("TypeStar"))
            object.TypeStar = message.TypeStar;
        return object;
    };

    /**
     * Converts this ConfigConstants to JSON.
     * @function toJSON
     * @memberof ConfigConstants
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConfigConstants.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ConfigConstants;
})();

$root.Camp = (function() {

    /**
     * Properties of a Camp.
     * @exports ICamp
     * @interface ICamp
     */

    /**
     * Constructs a new Camp.
     * @exports Camp
     * @classdesc Represents a Camp.
     * @implements ICamp
     * @constructor
     * @param {ICamp=} [properties] Properties to set
     */
    function Camp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Camp instance using the specified properties.
     * @function create
     * @memberof Camp
     * @static
     * @param {ICamp=} [properties] Properties to set
     * @returns {Camp} Camp instance
     */
    Camp.create = function create(properties) {
        return new Camp(properties);
    };

    /**
     * Encodes the specified Camp message. Does not implicitly {@link Camp.verify|verify} messages.
     * @function encode
     * @memberof Camp
     * @static
     * @param {ICamp} message Camp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Camp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Camp message, length delimited. Does not implicitly {@link Camp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Camp
     * @static
     * @param {ICamp} message Camp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Camp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Camp message from the specified reader or buffer.
     * @function decode
     * @memberof Camp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Camp} Camp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Camp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Camp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Camp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Camp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Camp} Camp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Camp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Camp message.
     * @function verify
     * @memberof Camp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Camp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a Camp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Camp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Camp} Camp
     */
    Camp.fromObject = function fromObject(object) {
        if (object instanceof $root.Camp)
            return object;
        return new $root.Camp();
    };

    /**
     * Creates a plain object from a Camp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Camp
     * @static
     * @param {Camp} message Camp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Camp.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Camp to JSON.
     * @function toJSON
     * @memberof Camp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Camp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Enums enum.
     * @name Camp.Enums
     * @enum {number}
     * @property {number} None=0 None value
     * @property {number} Green=1 Green value
     * @property {number} Blue=2 Blue value
     * @property {number} Red=3 Red value
     * @property {number} Yellow=4 Yellow value
     */
    Camp.Enums = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "None"] = 0;
        values[valuesById[1] = "Green"] = 1;
        values[valuesById[2] = "Blue"] = 2;
        values[valuesById[3] = "Red"] = 3;
        values[valuesById[4] = "Yellow"] = 4;
        return values;
    })();

    return Camp;
})();

$root.TriggerStage = (function() {

    /**
     * Properties of a TriggerStage.
     * @exports ITriggerStage
     * @interface ITriggerStage
     */

    /**
     * Constructs a new TriggerStage.
     * @exports TriggerStage
     * @classdesc Represents a TriggerStage.
     * @implements ITriggerStage
     * @constructor
     * @param {ITriggerStage=} [properties] Properties to set
     */
    function TriggerStage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new TriggerStage instance using the specified properties.
     * @function create
     * @memberof TriggerStage
     * @static
     * @param {ITriggerStage=} [properties] Properties to set
     * @returns {TriggerStage} TriggerStage instance
     */
    TriggerStage.create = function create(properties) {
        return new TriggerStage(properties);
    };

    /**
     * Encodes the specified TriggerStage message. Does not implicitly {@link TriggerStage.verify|verify} messages.
     * @function encode
     * @memberof TriggerStage
     * @static
     * @param {ITriggerStage} message TriggerStage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TriggerStage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified TriggerStage message, length delimited. Does not implicitly {@link TriggerStage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TriggerStage
     * @static
     * @param {ITriggerStage} message TriggerStage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TriggerStage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TriggerStage message from the specified reader or buffer.
     * @function decode
     * @memberof TriggerStage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TriggerStage} TriggerStage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TriggerStage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TriggerStage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TriggerStage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TriggerStage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TriggerStage} TriggerStage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TriggerStage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TriggerStage message.
     * @function verify
     * @memberof TriggerStage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TriggerStage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a TriggerStage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TriggerStage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TriggerStage} TriggerStage
     */
    TriggerStage.fromObject = function fromObject(object) {
        if (object instanceof $root.TriggerStage)
            return object;
        return new $root.TriggerStage();
    };

    /**
     * Creates a plain object from a TriggerStage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TriggerStage
     * @static
     * @param {TriggerStage} message TriggerStage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TriggerStage.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this TriggerStage to JSON.
     * @function toJSON
     * @memberof TriggerStage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TriggerStage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Enums enum.
     * @name TriggerStage.Enums
     * @enum {number}
     * @property {number} None=0 None value
     * @property {number} BeforeRoundStart=1 BeforeRoundStart value
     */
    TriggerStage.Enums = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "None"] = 0;
        values[valuesById[1] = "BeforeRoundStart"] = 1;
        return values;
    })();

    return TriggerStage;
})();

$root.AudioResource = (function() {

    /**
     * Properties of an AudioResource.
     * @exports IAudioResource
     * @interface IAudioResource
     */

    /**
     * Constructs a new AudioResource.
     * @exports AudioResource
     * @classdesc Represents an AudioResource.
     * @implements IAudioResource
     * @constructor
     * @param {IAudioResource=} [properties] Properties to set
     */
    function AudioResource(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new AudioResource instance using the specified properties.
     * @function create
     * @memberof AudioResource
     * @static
     * @param {IAudioResource=} [properties] Properties to set
     * @returns {AudioResource} AudioResource instance
     */
    AudioResource.create = function create(properties) {
        return new AudioResource(properties);
    };

    /**
     * Encodes the specified AudioResource message. Does not implicitly {@link AudioResource.verify|verify} messages.
     * @function encode
     * @memberof AudioResource
     * @static
     * @param {IAudioResource} message AudioResource message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AudioResource.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified AudioResource message, length delimited. Does not implicitly {@link AudioResource.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AudioResource
     * @static
     * @param {IAudioResource} message AudioResource message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AudioResource.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AudioResource message from the specified reader or buffer.
     * @function decode
     * @memberof AudioResource
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AudioResource} AudioResource
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AudioResource.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AudioResource();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AudioResource message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AudioResource
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AudioResource} AudioResource
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AudioResource.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AudioResource message.
     * @function verify
     * @memberof AudioResource
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AudioResource.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an AudioResource message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AudioResource
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AudioResource} AudioResource
     */
    AudioResource.fromObject = function fromObject(object) {
        if (object instanceof $root.AudioResource)
            return object;
        return new $root.AudioResource();
    };

    /**
     * Creates a plain object from an AudioResource message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AudioResource
     * @static
     * @param {AudioResource} message AudioResource
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AudioResource.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this AudioResource to JSON.
     * @function toJSON
     * @memberof AudioResource
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AudioResource.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Enums enum.
     * @name AudioResource.Enums
     * @enum {number}
     * @property {number} Default=0 Default value
     * @property {number} BGM2=1 BGM2 value
     * @property {number} Jump=2 Jump value
     * @property {number} BtnClick=3 BtnClick value
     * @property {number} Move1=4 Move1 value
     * @property {number} Energy=5 Energy value
     * @property {number} Tip1=6 Tip1 value
     * @property {number} Across=7 Across value
     * @property {number} Window=8 Window value
     * @property {number} Win2=9 Win2 value
     * @property {number} Finish=10 Finish value
     * @property {number} Roll=11 Roll value
     * @property {number} God=12 God value
     * @property {number} Skill=13 Skill value
     * @property {number} UseSkill=14 UseSkill value
     * @property {number} Together=15 Together value
     * @property {number} HitChess=16 HitChess value
     * @property {number} Storm=17 Storm value
     * @property {number} Thorns=18 Thorns value
     */
    AudioResource.Enums = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Default"] = 0;
        values[valuesById[1] = "BGM2"] = 1;
        values[valuesById[2] = "Jump"] = 2;
        values[valuesById[3] = "BtnClick"] = 3;
        values[valuesById[4] = "Move1"] = 4;
        values[valuesById[5] = "Energy"] = 5;
        values[valuesById[6] = "Tip1"] = 6;
        values[valuesById[7] = "Across"] = 7;
        values[valuesById[8] = "Window"] = 8;
        values[valuesById[9] = "Win2"] = 9;
        values[valuesById[10] = "Finish"] = 10;
        values[valuesById[11] = "Roll"] = 11;
        values[valuesById[12] = "God"] = 12;
        values[valuesById[13] = "Skill"] = 13;
        values[valuesById[14] = "UseSkill"] = 14;
        values[valuesById[15] = "Together"] = 15;
        values[valuesById[16] = "HitChess"] = 16;
        values[valuesById[17] = "Storm"] = 17;
        values[valuesById[18] = "Thorns"] = 18;
        return values;
    })();

    return AudioResource;
})();

$root.ConfigLanguageList = (function() {

    /**
     * Properties of a ConfigLanguageList.
     * @exports IConfigLanguageList
     * @interface IConfigLanguageList
     * @property {Array.<IConfigLanguage>|null} [list] ConfigLanguageList list
     */

    /**
     * Constructs a new ConfigLanguageList.
     * @exports ConfigLanguageList
     * @classdesc Represents a ConfigLanguageList.
     * @implements IConfigLanguageList
     * @constructor
     * @param {IConfigLanguageList=} [properties] Properties to set
     */
    function ConfigLanguageList(properties) {
        this.list = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConfigLanguageList list.
     * @member {Array.<IConfigLanguage>} list
     * @memberof ConfigLanguageList
     * @instance
     */
    ConfigLanguageList.prototype.list = $util.emptyArray;

    /**
     * Creates a new ConfigLanguageList instance using the specified properties.
     * @function create
     * @memberof ConfigLanguageList
     * @static
     * @param {IConfigLanguageList=} [properties] Properties to set
     * @returns {ConfigLanguageList} ConfigLanguageList instance
     */
    ConfigLanguageList.create = function create(properties) {
        return new ConfigLanguageList(properties);
    };

    /**
     * Encodes the specified ConfigLanguageList message. Does not implicitly {@link ConfigLanguageList.verify|verify} messages.
     * @function encode
     * @memberof ConfigLanguageList
     * @static
     * @param {IConfigLanguageList} message ConfigLanguageList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConfigLanguageList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.list != null && message.list.length)
            for (var i = 0; i < message.list.length; ++i)
                $root.ConfigLanguage.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ConfigLanguageList message, length delimited. Does not implicitly {@link ConfigLanguageList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConfigLanguageList
     * @static
     * @param {IConfigLanguageList} message ConfigLanguageList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConfigLanguageList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConfigLanguageList message from the specified reader or buffer.
     * @function decode
     * @memberof ConfigLanguageList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConfigLanguageList} ConfigLanguageList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConfigLanguageList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConfigLanguageList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.list && message.list.length))
                    message.list = [];
                message.list.push($root.ConfigLanguage.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ConfigLanguageList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConfigLanguageList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConfigLanguageList} ConfigLanguageList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConfigLanguageList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConfigLanguageList message.
     * @function verify
     * @memberof ConfigLanguageList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConfigLanguageList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.list != null && message.hasOwnProperty("list")) {
            if (!Array.isArray(message.list))
                return "list: array expected";
            for (var i = 0; i < message.list.length; ++i) {
                var error = $root.ConfigLanguage.verify(message.list[i]);
                if (error)
                    return "list." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ConfigLanguageList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConfigLanguageList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConfigLanguageList} ConfigLanguageList
     */
    ConfigLanguageList.fromObject = function fromObject(object) {
        if (object instanceof $root.ConfigLanguageList)
            return object;
        var message = new $root.ConfigLanguageList();
        if (object.list) {
            if (!Array.isArray(object.list))
                throw TypeError(".ConfigLanguageList.list: array expected");
            message.list = [];
            for (var i = 0; i < object.list.length; ++i) {
                if (typeof object.list[i] !== "object")
                    throw TypeError(".ConfigLanguageList.list: object expected");
                message.list[i] = $root.ConfigLanguage.fromObject(object.list[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ConfigLanguageList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConfigLanguageList
     * @static
     * @param {ConfigLanguageList} message ConfigLanguageList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConfigLanguageList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.list = [];
        if (message.list && message.list.length) {
            object.list = [];
            for (var j = 0; j < message.list.length; ++j)
                object.list[j] = $root.ConfigLanguage.toObject(message.list[j], options);
        }
        return object;
    };

    /**
     * Converts this ConfigLanguageList to JSON.
     * @function toJSON
     * @memberof ConfigLanguageList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConfigLanguageList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ConfigLanguageList;
})();

$root.ConfigLanguage = (function() {

    /**
     * Properties of a ConfigLanguage.
     * @exports IConfigLanguage
     * @interface IConfigLanguage
     * @property {string|null} [id] ConfigLanguage id
     * @property {string|null} [cn] ConfigLanguage cn
     */

    /**
     * Constructs a new ConfigLanguage.
     * @exports ConfigLanguage
     * @classdesc Represents a ConfigLanguage.
     * @implements IConfigLanguage
     * @constructor
     * @param {IConfigLanguage=} [properties] Properties to set
     */
    function ConfigLanguage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConfigLanguage id.
     * @member {string} id
     * @memberof ConfigLanguage
     * @instance
     */
    ConfigLanguage.prototype.id = "";

    /**
     * ConfigLanguage cn.
     * @member {string} cn
     * @memberof ConfigLanguage
     * @instance
     */
    ConfigLanguage.prototype.cn = "";

    /**
     * Creates a new ConfigLanguage instance using the specified properties.
     * @function create
     * @memberof ConfigLanguage
     * @static
     * @param {IConfigLanguage=} [properties] Properties to set
     * @returns {ConfigLanguage} ConfigLanguage instance
     */
    ConfigLanguage.create = function create(properties) {
        return new ConfigLanguage(properties);
    };

    /**
     * Encodes the specified ConfigLanguage message. Does not implicitly {@link ConfigLanguage.verify|verify} messages.
     * @function encode
     * @memberof ConfigLanguage
     * @static
     * @param {IConfigLanguage} message ConfigLanguage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConfigLanguage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.cn != null && Object.hasOwnProperty.call(message, "cn"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.cn);
        return writer;
    };

    /**
     * Encodes the specified ConfigLanguage message, length delimited. Does not implicitly {@link ConfigLanguage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConfigLanguage
     * @static
     * @param {IConfigLanguage} message ConfigLanguage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConfigLanguage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConfigLanguage message from the specified reader or buffer.
     * @function decode
     * @memberof ConfigLanguage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConfigLanguage} ConfigLanguage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConfigLanguage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConfigLanguage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.cn = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ConfigLanguage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConfigLanguage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConfigLanguage} ConfigLanguage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConfigLanguage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConfigLanguage message.
     * @function verify
     * @memberof ConfigLanguage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConfigLanguage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.cn != null && message.hasOwnProperty("cn"))
            if (!$util.isString(message.cn))
                return "cn: string expected";
        return null;
    };

    /**
     * Creates a ConfigLanguage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConfigLanguage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConfigLanguage} ConfigLanguage
     */
    ConfigLanguage.fromObject = function fromObject(object) {
        if (object instanceof $root.ConfigLanguage)
            return object;
        var message = new $root.ConfigLanguage();
        if (object.id != null)
            message.id = String(object.id);
        if (object.cn != null)
            message.cn = String(object.cn);
        return message;
    };

    /**
     * Creates a plain object from a ConfigLanguage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConfigLanguage
     * @static
     * @param {ConfigLanguage} message ConfigLanguage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConfigLanguage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.cn = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.cn != null && message.hasOwnProperty("cn"))
            object.cn = message.cn;
        return object;
    };

    /**
     * Converts this ConfigLanguage to JSON.
     * @function toJSON
     * @memberof ConfigLanguage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConfigLanguage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ConfigLanguage;
})();

module.exports = $root;
