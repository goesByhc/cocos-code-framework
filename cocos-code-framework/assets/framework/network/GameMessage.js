/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("../libs/protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.MS2C = (function() {

    /**
     * Properties of a MS2C.
     * @exports IMS2C
     * @interface IMS2C
     * @property {number|Long|null} [commandId] MS2C commandId
     * @property {number|Long|null} [dmError] MS2C dmError
     * @property {string|null} [errorMsg] MS2C errorMsg
     * @property {Uint8Array|null} [data] MS2C data
     */

    /**
     * Constructs a new MS2C.
     * @exports MS2C
     * @classdesc Represents a MS2C.
     * @implements IMS2C
     * @constructor
     * @param {IMS2C=} [properties] Properties to set
     */
    function MS2C(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MS2C commandId.
     * @member {number|Long} commandId
     * @memberof MS2C
     * @instance
     */
    MS2C.prototype.commandId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MS2C dmError.
     * @member {number|Long} dmError
     * @memberof MS2C
     * @instance
     */
    MS2C.prototype.dmError = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MS2C errorMsg.
     * @member {string} errorMsg
     * @memberof MS2C
     * @instance
     */
    MS2C.prototype.errorMsg = "";

    /**
     * MS2C data.
     * @member {Uint8Array} data
     * @memberof MS2C
     * @instance
     */
    MS2C.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new MS2C instance using the specified properties.
     * @function create
     * @memberof MS2C
     * @static
     * @param {IMS2C=} [properties] Properties to set
     * @returns {MS2C} MS2C instance
     */
    MS2C.create = function create(properties) {
        return new MS2C(properties);
    };

    /**
     * Encodes the specified MS2C message. Does not implicitly {@link MS2C.verify|verify} messages.
     * @function encode
     * @memberof MS2C
     * @static
     * @param {IMS2C} message MS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MS2C.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.commandId != null && Object.hasOwnProperty.call(message, "commandId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.commandId);
        if (message.dmError != null && Object.hasOwnProperty.call(message, "dmError"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.dmError);
        if (message.errorMsg != null && Object.hasOwnProperty.call(message, "errorMsg"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.errorMsg);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified MS2C message, length delimited. Does not implicitly {@link MS2C.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MS2C
     * @static
     * @param {IMS2C} message MS2C message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MS2C.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MS2C message from the specified reader or buffer.
     * @function decode
     * @memberof MS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MS2C} MS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MS2C.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MS2C();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.commandId = reader.int64();
                break;
            case 2:
                message.dmError = reader.int64();
                break;
            case 3:
                message.errorMsg = reader.string();
                break;
            case 4:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MS2C message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MS2C
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MS2C} MS2C
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MS2C.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MS2C message.
     * @function verify
     * @memberof MS2C
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MS2C.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.commandId != null && message.hasOwnProperty("commandId"))
            if (!$util.isInteger(message.commandId) && !(message.commandId && $util.isInteger(message.commandId.low) && $util.isInteger(message.commandId.high)))
                return "commandId: integer|Long expected";
        if (message.dmError != null && message.hasOwnProperty("dmError"))
            if (!$util.isInteger(message.dmError) && !(message.dmError && $util.isInteger(message.dmError.low) && $util.isInteger(message.dmError.high)))
                return "dmError: integer|Long expected";
        if (message.errorMsg != null && message.hasOwnProperty("errorMsg"))
            if (!$util.isString(message.errorMsg))
                return "errorMsg: string expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a MS2C message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MS2C
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MS2C} MS2C
     */
    MS2C.fromObject = function fromObject(object) {
        if (object instanceof $root.MS2C)
            return object;
        var message = new $root.MS2C();
        if (object.commandId != null)
            if ($util.Long)
                (message.commandId = $util.Long.fromValue(object.commandId)).unsigned = false;
            else if (typeof object.commandId === "string")
                message.commandId = parseInt(object.commandId, 10);
            else if (typeof object.commandId === "number")
                message.commandId = object.commandId;
            else if (typeof object.commandId === "object")
                message.commandId = new $util.LongBits(object.commandId.low >>> 0, object.commandId.high >>> 0).toNumber();
        if (object.dmError != null)
            if ($util.Long)
                (message.dmError = $util.Long.fromValue(object.dmError)).unsigned = false;
            else if (typeof object.dmError === "string")
                message.dmError = parseInt(object.dmError, 10);
            else if (typeof object.dmError === "number")
                message.dmError = object.dmError;
            else if (typeof object.dmError === "object")
                message.dmError = new $util.LongBits(object.dmError.low >>> 0, object.dmError.high >>> 0).toNumber();
        if (object.errorMsg != null)
            message.errorMsg = String(object.errorMsg);
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a MS2C message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MS2C
     * @static
     * @param {MS2C} message MS2C
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MS2C.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.commandId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.commandId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.dmError = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.dmError = options.longs === String ? "0" : 0;
            object.errorMsg = "";
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
        }
        if (message.commandId != null && message.hasOwnProperty("commandId"))
            if (typeof message.commandId === "number")
                object.commandId = options.longs === String ? String(message.commandId) : message.commandId;
            else
                object.commandId = options.longs === String ? $util.Long.prototype.toString.call(message.commandId) : options.longs === Number ? new $util.LongBits(message.commandId.low >>> 0, message.commandId.high >>> 0).toNumber() : message.commandId;
        if (message.dmError != null && message.hasOwnProperty("dmError"))
            if (typeof message.dmError === "number")
                object.dmError = options.longs === String ? String(message.dmError) : message.dmError;
            else
                object.dmError = options.longs === String ? $util.Long.prototype.toString.call(message.dmError) : options.longs === Number ? new $util.LongBits(message.dmError.low >>> 0, message.dmError.high >>> 0).toNumber() : message.dmError;
        if (message.errorMsg != null && message.hasOwnProperty("errorMsg"))
            object.errorMsg = message.errorMsg;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this MS2C to JSON.
     * @function toJSON
     * @memberof MS2C
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MS2C.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MS2C;
})();

$root.MC2S = (function() {

    /**
     * Properties of a MC2S.
     * @exports IMC2S
     * @interface IMC2S
     * @property {number|Long|null} [commandId] MC2S commandId
     * @property {Uint8Array|null} [data] MC2S data
     */

    /**
     * Constructs a new MC2S.
     * @exports MC2S
     * @classdesc Represents a MC2S.
     * @implements IMC2S
     * @constructor
     * @param {IMC2S=} [properties] Properties to set
     */
    function MC2S(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MC2S commandId.
     * @member {number|Long} commandId
     * @memberof MC2S
     * @instance
     */
    MC2S.prototype.commandId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MC2S data.
     * @member {Uint8Array} data
     * @memberof MC2S
     * @instance
     */
    MC2S.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new MC2S instance using the specified properties.
     * @function create
     * @memberof MC2S
     * @static
     * @param {IMC2S=} [properties] Properties to set
     * @returns {MC2S} MC2S instance
     */
    MC2S.create = function create(properties) {
        return new MC2S(properties);
    };

    /**
     * Encodes the specified MC2S message. Does not implicitly {@link MC2S.verify|verify} messages.
     * @function encode
     * @memberof MC2S
     * @static
     * @param {IMC2S} message MC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MC2S.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.commandId != null && Object.hasOwnProperty.call(message, "commandId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.commandId);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified MC2S message, length delimited. Does not implicitly {@link MC2S.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MC2S
     * @static
     * @param {IMC2S} message MC2S message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MC2S.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MC2S message from the specified reader or buffer.
     * @function decode
     * @memberof MC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MC2S} MC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MC2S.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MC2S();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.commandId = reader.int64();
                break;
            case 2:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MC2S message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MC2S
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MC2S} MC2S
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MC2S.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MC2S message.
     * @function verify
     * @memberof MC2S
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MC2S.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.commandId != null && message.hasOwnProperty("commandId"))
            if (!$util.isInteger(message.commandId) && !(message.commandId && $util.isInteger(message.commandId.low) && $util.isInteger(message.commandId.high)))
                return "commandId: integer|Long expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a MC2S message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MC2S
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MC2S} MC2S
     */
    MC2S.fromObject = function fromObject(object) {
        if (object instanceof $root.MC2S)
            return object;
        var message = new $root.MC2S();
        if (object.commandId != null)
            if ($util.Long)
                (message.commandId = $util.Long.fromValue(object.commandId)).unsigned = false;
            else if (typeof object.commandId === "string")
                message.commandId = parseInt(object.commandId, 10);
            else if (typeof object.commandId === "number")
                message.commandId = object.commandId;
            else if (typeof object.commandId === "object")
                message.commandId = new $util.LongBits(object.commandId.low >>> 0, object.commandId.high >>> 0).toNumber();
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a MC2S message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MC2S
     * @static
     * @param {MC2S} message MC2S
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MC2S.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.commandId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.commandId = options.longs === String ? "0" : 0;
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
        }
        if (message.commandId != null && message.hasOwnProperty("commandId"))
            if (typeof message.commandId === "number")
                object.commandId = options.longs === String ? String(message.commandId) : message.commandId;
            else
                object.commandId = options.longs === String ? $util.Long.prototype.toString.call(message.commandId) : options.longs === Number ? new $util.LongBits(message.commandId.low >>> 0, message.commandId.high >>> 0).toNumber() : message.commandId;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this MC2S to JSON.
     * @function toJSON
     * @memberof MC2S
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MC2S.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MC2S;
})();

$root.MessageType = (function() {

    /**
     * Properties of a MessageType.
     * @exports IMessageType
     * @interface IMessageType
     */

    /**
     * Constructs a new MessageType.
     * @exports MessageType
     * @classdesc Represents a MessageType.
     * @implements IMessageType
     * @constructor
     * @param {IMessageType=} [properties] Properties to set
     */
    function MessageType(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new MessageType instance using the specified properties.
     * @function create
     * @memberof MessageType
     * @static
     * @param {IMessageType=} [properties] Properties to set
     * @returns {MessageType} MessageType instance
     */
    MessageType.create = function create(properties) {
        return new MessageType(properties);
    };

    /**
     * Encodes the specified MessageType message. Does not implicitly {@link MessageType.verify|verify} messages.
     * @function encode
     * @memberof MessageType
     * @static
     * @param {IMessageType} message MessageType message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageType.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified MessageType message, length delimited. Does not implicitly {@link MessageType.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MessageType
     * @static
     * @param {IMessageType} message MessageType message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageType.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MessageType message from the specified reader or buffer.
     * @function decode
     * @memberof MessageType
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MessageType} MessageType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageType.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MessageType();
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
     * Decodes a MessageType message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MessageType
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MessageType} MessageType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageType.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MessageType message.
     * @function verify
     * @memberof MessageType
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MessageType.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a MessageType message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MessageType
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MessageType} MessageType
     */
    MessageType.fromObject = function fromObject(object) {
        if (object instanceof $root.MessageType)
            return object;
        return new $root.MessageType();
    };

    /**
     * Creates a plain object from a MessageType message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MessageType
     * @static
     * @param {MessageType} message MessageType
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MessageType.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this MessageType to JSON.
     * @function toJSON
     * @memberof MessageType
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MessageType.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Enums enum.
     * @name MessageType.Enums
     * @enum {number}
     * @property {number} Unknown=0 Unknown value
     * @property {number} C2S_Heart=1 C2S_Heart value
     * @property {number} S2C_Heart=-1 S2C_Heart value
     */
    MessageType.Enums = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Unknown"] = 0;
        values[valuesById[1] = "C2S_Heart"] = 1;
        values[valuesById[-1] = "S2C_Heart"] = -1;
        return values;
    })();

    return MessageType;
})();

$root.C2S_Heart = (function() {

    /**
     * Properties of a C2S_Heart.
     * @exports IC2S_Heart
     * @interface IC2S_Heart
     * @property {string|null} [uid] C2S_Heart uid
     * @property {string|null} [roomId] C2S_Heart roomId
     */

    /**
     * Constructs a new C2S_Heart.
     * @exports C2S_Heart
     * @classdesc Represents a C2S_Heart.
     * @implements IC2S_Heart
     * @constructor
     * @param {IC2S_Heart=} [properties] Properties to set
     */
    function C2S_Heart(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2S_Heart uid.
     * @member {string} uid
     * @memberof C2S_Heart
     * @instance
     */
    C2S_Heart.prototype.uid = "";

    /**
     * C2S_Heart roomId.
     * @member {string} roomId
     * @memberof C2S_Heart
     * @instance
     */
    C2S_Heart.prototype.roomId = "";

    /**
     * Creates a new C2S_Heart instance using the specified properties.
     * @function create
     * @memberof C2S_Heart
     * @static
     * @param {IC2S_Heart=} [properties] Properties to set
     * @returns {C2S_Heart} C2S_Heart instance
     */
    C2S_Heart.create = function create(properties) {
        return new C2S_Heart(properties);
    };

    /**
     * Encodes the specified C2S_Heart message. Does not implicitly {@link C2S_Heart.verify|verify} messages.
     * @function encode
     * @memberof C2S_Heart
     * @static
     * @param {IC2S_Heart} message C2S_Heart message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S_Heart.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomId);
        return writer;
    };

    /**
     * Encodes the specified C2S_Heart message, length delimited. Does not implicitly {@link C2S_Heart.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2S_Heart
     * @static
     * @param {IC2S_Heart} message C2S_Heart message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2S_Heart.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2S_Heart message from the specified reader or buffer.
     * @function decode
     * @memberof C2S_Heart
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2S_Heart} C2S_Heart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S_Heart.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2S_Heart();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uid = reader.string();
                break;
            case 2:
                message.roomId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2S_Heart message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2S_Heart
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2S_Heart} C2S_Heart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2S_Heart.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2S_Heart message.
     * @function verify
     * @memberof C2S_Heart
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2S_Heart.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isString(message.uid))
                return "uid: string expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isString(message.roomId))
                return "roomId: string expected";
        return null;
    };

    /**
     * Creates a C2S_Heart message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2S_Heart
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2S_Heart} C2S_Heart
     */
    C2S_Heart.fromObject = function fromObject(object) {
        if (object instanceof $root.C2S_Heart)
            return object;
        var message = new $root.C2S_Heart();
        if (object.uid != null)
            message.uid = String(object.uid);
        if (object.roomId != null)
            message.roomId = String(object.roomId);
        return message;
    };

    /**
     * Creates a plain object from a C2S_Heart message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2S_Heart
     * @static
     * @param {C2S_Heart} message C2S_Heart
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2S_Heart.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.uid = "";
            object.roomId = "";
        }
        if (message.uid != null && message.hasOwnProperty("uid"))
            object.uid = message.uid;
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            object.roomId = message.roomId;
        return object;
    };

    /**
     * Converts this C2S_Heart to JSON.
     * @function toJSON
     * @memberof C2S_Heart
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2S_Heart.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return C2S_Heart;
})();

$root.S2C_Heart = (function() {

    /**
     * Properties of a S2C_Heart.
     * @exports IS2C_Heart
     * @interface IS2C_Heart
     * @property {string|null} [roomId] S2C_Heart roomId
     * @property {number|Long|null} [timeStamp] S2C_Heart timeStamp
     */

    /**
     * Constructs a new S2C_Heart.
     * @exports S2C_Heart
     * @classdesc Represents a S2C_Heart.
     * @implements IS2C_Heart
     * @constructor
     * @param {IS2C_Heart=} [properties] Properties to set
     */
    function S2C_Heart(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2C_Heart roomId.
     * @member {string} roomId
     * @memberof S2C_Heart
     * @instance
     */
    S2C_Heart.prototype.roomId = "";

    /**
     * S2C_Heart timeStamp.
     * @member {number|Long} timeStamp
     * @memberof S2C_Heart
     * @instance
     */
    S2C_Heart.prototype.timeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new S2C_Heart instance using the specified properties.
     * @function create
     * @memberof S2C_Heart
     * @static
     * @param {IS2C_Heart=} [properties] Properties to set
     * @returns {S2C_Heart} S2C_Heart instance
     */
    S2C_Heart.create = function create(properties) {
        return new S2C_Heart(properties);
    };

    /**
     * Encodes the specified S2C_Heart message. Does not implicitly {@link S2C_Heart.verify|verify} messages.
     * @function encode
     * @memberof S2C_Heart
     * @static
     * @param {IS2C_Heart} message S2C_Heart message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_Heart.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
        if (message.timeStamp != null && Object.hasOwnProperty.call(message, "timeStamp"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timeStamp);
        return writer;
    };

    /**
     * Encodes the specified S2C_Heart message, length delimited. Does not implicitly {@link S2C_Heart.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2C_Heart
     * @static
     * @param {IS2C_Heart} message S2C_Heart message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2C_Heart.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2C_Heart message from the specified reader or buffer.
     * @function decode
     * @memberof S2C_Heart
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2C_Heart} S2C_Heart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_Heart.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2C_Heart();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.roomId = reader.string();
                break;
            case 2:
                message.timeStamp = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2C_Heart message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2C_Heart
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2C_Heart} S2C_Heart
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2C_Heart.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2C_Heart message.
     * @function verify
     * @memberof S2C_Heart
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2C_Heart.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isString(message.roomId))
                return "roomId: string expected";
        if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
            if (!$util.isInteger(message.timeStamp) && !(message.timeStamp && $util.isInteger(message.timeStamp.low) && $util.isInteger(message.timeStamp.high)))
                return "timeStamp: integer|Long expected";
        return null;
    };

    /**
     * Creates a S2C_Heart message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2C_Heart
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2C_Heart} S2C_Heart
     */
    S2C_Heart.fromObject = function fromObject(object) {
        if (object instanceof $root.S2C_Heart)
            return object;
        var message = new $root.S2C_Heart();
        if (object.roomId != null)
            message.roomId = String(object.roomId);
        if (object.timeStamp != null)
            if ($util.Long)
                (message.timeStamp = $util.Long.fromValue(object.timeStamp)).unsigned = false;
            else if (typeof object.timeStamp === "string")
                message.timeStamp = parseInt(object.timeStamp, 10);
            else if (typeof object.timeStamp === "number")
                message.timeStamp = object.timeStamp;
            else if (typeof object.timeStamp === "object")
                message.timeStamp = new $util.LongBits(object.timeStamp.low >>> 0, object.timeStamp.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a S2C_Heart message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2C_Heart
     * @static
     * @param {S2C_Heart} message S2C_Heart
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2C_Heart.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.roomId = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.timeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timeStamp = options.longs === String ? "0" : 0;
        }
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            object.roomId = message.roomId;
        if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
            if (typeof message.timeStamp === "number")
                object.timeStamp = options.longs === String ? String(message.timeStamp) : message.timeStamp;
            else
                object.timeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.timeStamp) : options.longs === Number ? new $util.LongBits(message.timeStamp.low >>> 0, message.timeStamp.high >>> 0).toNumber() : message.timeStamp;
        return object;
    };

    /**
     * Converts this S2C_Heart to JSON.
     * @function toJSON
     * @memberof S2C_Heart
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2C_Heart.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return S2C_Heart;
})();

module.exports = $root;
