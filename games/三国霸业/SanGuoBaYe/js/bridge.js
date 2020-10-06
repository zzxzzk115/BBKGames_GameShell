
window.onerror = function(msg, url, line, col, error) {
   var extra = !col ? '' : '\ncolumn: ' + col;
   extra += !error ? '' : '\nerror: ' + error;
   alert("Error: " + msg + "\nurl: " + url + "\nline: " + line + extra);
   return false;
};

if (window._bayeRand === undefined) {
    window._bayeRand = function() {
        return 0.5;
    };
}

Math.random = function() {
    return _bayeRand() % 65536 / 65536;
};

if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

if (!Array.prototype.includes) {
    Array.prototype.includes = function(searchElement, fromIndex) {
        return this.indexOf(searchElement, fromIndex) >= 0;
    }
}

var    ValueTypeU8 = 0;
var    ValueTypeU16 = 1;
var    ValueTypeU32 = 2;
var    ValueTypeString = 3;
var    ValueTypeObject = 4;
var    ValueTypeArray = 5;
var    ValueTypeMethod = 6;
var    ValueTypeGBKBuffer = 7;

var gbkDecoder = new TextDecoder('GBK');
var gbkEncoder = new TextEncoder('GBK', { NONSTANDARD_allowLegacyEncoding: true });

function BayeObject() {
}

BayeObject.prototype.toString = function() {
    switch (this._type) {
    case ValueTypeU8:
        return 'U8(' + this.value + ')';
    case ValueTypeU16:
        return 'U16(' + this.value + ')';
    case ValueTypeU32:
        return 'U32(' + this.value + ')';
    case ValueTypeString:
        return 'String("' + this.value + '")';
    case ValueTypeObject:
        return 'Object';
    case ValueTypeArray:
        return 'Array[' + this.length + ']';
    case ValueTypeGBKBuffer:
        return 'GBKBuffer[' + this.length + ']';
    case ValueTypeMethod:
        return 'Method';
    }
};

function baye_bridge_value(value) {
    return baye_bridge_valuedef(_Value_get_def(value), _Value_get_addr(value));
}

function baye_bridge_description_for_value(jvalue, type) {
    switch (type) {
        case ValueTypeU8:
        case ValueTypeU16:
        case ValueTypeU32:
        case ValueTypeString:
            return {
                get: function() {
                    return jvalue.value.value;
                },
                set: function(value) {
                    jvalue.value.value = value;
                }
            };
            break;
        case ValueTypeArray:
            return {
                get: function() {
                    return jvalue.value;
                },
                set: function(value) {
                    var jv = jvalue.value;
                    var length = jv.length;
                    for(var i = 0; i < length && i < value.length; i++) {
                        jv[i] = value[i]
                    }
                }
            };
            break;
        case ValueTypeGBKBuffer:
            return {
                get: function() {
                    var buffer = bayeU8Array(jvalue.value._addr, _bayeStrLen(jvalue.value._addr));
                    return gbkDecoder.decode(buffer);
                },
                set: function(value) {
                    var jv = jvalue.value;
                    var arr = gbkEncoder.encode('' + value);
                    var length = Math.min(jv.length - 1, arr.length);
                    for(var i = 0; i < length; i++) {
                        jv[i] = arr[i]
                    }
                    jv[length] = 0;
                }
            };
            break;
        case ValueTypeObject:
            return {
                get: function() {
                    return jvalue.value;
                }
            }
            break;
    }
}

function defineProperty(obj, p, desc) {
    Object.defineProperty(obj, p, desc);
}

function defineProperties(obj, desc) {
    Object.defineProperties(obj, desc);
}

function baye_bridge_valuedef_lazy(def, addr) {
    var obj = {
        get value() {
            if (this._value == undefined) {
                this._value = baye_bridge_valuedef(def, addr);
            }
            return this._value;
        }
    };
    return obj;
}

function baye_bridge_valuedef(def, addr) {
    var type = _ValueDef_get_type(def);
    var jsObj = new BayeObject();
    jsObj._def = def;
    jsObj._addr = addr;
    jsObj._type = type;

    switch (type) {
        case ValueTypeU8:
            defineProperty(jsObj, 'value', {
                get: function() {
                    return _baye_get_u8_value(this._addr);
                },
                set: function(value) {
                    if (value > 0xff) value = 0xff;
                    if (value < 0) value = 0;
                    return _baye_set_u8_value(this._addr, value);
                }
            });
            break;
        case ValueTypeU16:
            defineProperty(jsObj, 'value', {
                get: function() {
                    return _baye_get_u16_value(this._addr);
                },
                set: function(value) {
                    if (value > 0xffff) value = 0xffff;
                    if (value < 0) value = 0;
                    return _baye_set_u16_value(this._addr, value);
                }
            });
            break;
        case ValueTypeU32:
            defineProperty(jsObj, 'value', {
                get: function() {
                    return _baye_get_u32_value(this._addr);
                },
                set: function(value) {
                    return _baye_set_u32_value(this._addr, value);
                }
            });
            break;
        case ValueTypeString:
            defineProperty(jsObj, 'value', {
                get: function() {
                    // TODO:
                    return this._addr;
                }
            });
            break;
        case ValueTypeObject:
            return baye_bridge_obj(def, addr);
        case ValueTypeArray:
        case ValueTypeGBKBuffer:
            var length = _ValueDef_get_array_length(def);
            jsObj.length = length;
            var subdef = _ValueDef_get_array_subdef(def);
            var subsize = _ValueDef_get_size(subdef);
            var properties = {};
            for (var i = 0; i < length; i++) {
                var item_value = baye_bridge_valuedef_lazy(subdef, addr + subsize * i);
                var desc = baye_bridge_description_for_value(item_value, _ValueDef_get_type(subdef));
                properties[i] = desc;
            }
            defineProperties(jsObj, properties);
            break;
        case ValueTypeMethod:
            return function() {
            };
    }
    return jsObj;
}

function baye_bridge_obj(def, addr) {
    var jsObj = new BayeObject();
    var properties = {};

    var count = _ValueDef_get_field_count(def);


    jsObj._def = def;
    jsObj._addr = addr;

    for (var i = 0; i < count; i++) {
        var field = _ValueDef_get_field_by_index(def, i);
        var cname = _Field_get_name(field);
        var name = UTF8ToString(cname);
        var field_value_addr = _Field_get_value(field);
        var value_def = _Value_get_def(field_value_addr);
        var value_offset = _Value_get_addr(field_value_addr);
        var field_value = baye_bridge_valuedef_lazy(value_def, addr + value_offset);

        var desc = baye_bridge_description_for_value(field_value, _Field_get_type(field));
        properties[name] = desc;
    }
    defineProperties(jsObj, properties);
    return jsObj;
}

function bayeU8Array(caddr, length) {
    return Module.HEAPU8.subarray(caddr, caddr+length);
}

function bayeWrapFunctionS(innerf) {
    return function() {
        var addr = innerf.apply(this, arguments);
        if (addr != 0) {
            return new TextDecoder('GBK').decode(bayeU8Array(addr, _bayeStrLen(addr)));
        }
        return null;
    };
}

function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
}

$(function(){

    function truncate(s, n, pad) {
        var l = 0;
        var c = 0;
        for (var i = 0; i < s.length; i++) {
            var cs = s.charCodeAt(i) > 256 ? 2 : 1;
            if (l + cs <= n) {
                l += cs;
                c += 1;
            } else {
                break;
            }
        }
        var rv = s.slice(0, c);
        if (pad) {
            while (l < n) {
                rv += ' ';
                l += 1;
            }
        }
        return rv;
    }

    if (window.baye === undefined) {
        window.baye = {};
    }
    baye.debug = {};

    baye.getPersonName = bayeWrapFunctionS(_bayeGetPersonName);
    baye.getToolName = bayeWrapFunctionS(_bayeGetToolName);
    baye.getSkillName = bayeWrapFunctionS(_bayeGetSkillName);
    baye.getCityName = bayeWrapFunctionS(_bayeGetCityName);

    baye.getCustomData = function() {
        var cstr = _bayeGetCustomData();
        if (cstr == 0) return null;
        return UTF8ToString(cstr);
    }

    baye.setCustomData = function(data) {
        var length = lengthBytesUTF8(data) + 1;
        var buffer = Module._bayeAlloc(length);
        stringToUTF8(data, buffer, length);
        _bayeSetCustomData(buffer);
        Module._free(buffer);
    }

    baye.alert = function(msg, then){
        baye.data.g_asyncActionID = 1;
        baye.data.g_asyncActionParams[0] = 3;
        baye.data.g_asyncActionStringParam = msg;
        baye.callback = then;
    };

    baye.say = function(personIndex, msg, then){
        baye.data.g_asyncActionID = 2;
        baye.data.g_asyncActionParams[0] = personIndex;
        baye.data.g_asyncActionStringParam = msg;
        baye.callback = then;
    };

    baye.delay = function(ticks, flag, then){
        baye.data.g_asyncActionID = 7;
        baye.data.g_asyncActionParams[0] = ticks;
        baye.data.g_asyncActionParams[1] = flag;
        setcb0(then);
    };

    baye.playSPE = function(x, y, speid, index, flag, then){
        baye.data.g_asyncActionID = 8;
        baye.data.g_asyncActionParams[0] = speid;
        baye.data.g_asyncActionParams[1] = index;
        baye.data.g_asyncActionParams[2] = x;
        baye.data.g_asyncActionParams[3] = y;
        baye.data.g_asyncActionParams[4] = flag;
        setcb0(then);
    };

    function setcb0(then) {
        if (then) {
            baye.callback = function() {
                return then(baye.data.g_asyncActionParams[0]);
            };
        } else {
            baye.callback = undefined;
        }
    }

    baye.choose = function(x, y, w, h, items, init, then){
        baye.data.g_asyncActionID = 3;
        baye.data.g_asyncActionParams[0] = x;
        baye.data.g_asyncActionParams[1] = y;
        baye.data.g_asyncActionParams[2] = w;
        baye.data.g_asyncActionParams[3] = h;
        baye.data.g_asyncActionParams[4] = init;

        var n = Math.floor(w / 6);
        var s = "";

        for (var i = 0; i < items.length; i++) {
            s += truncate(items[i], n, true);
        }

        baye.data.g_asyncActionStringParam = s;
        setcb0(then);
    };

    baye.centerChoose = function(w, h, items, init, then) {

        var x = (baye.data.g_screenWidth - w) / 2;
        var y = (baye.data.g_screenHeight - h) / 2;

        return baye.choose(x, y, w, h, items, init, then);
    };

    baye.choosePerson = function(items, init, then) {
        baye.data.g_asyncActionID = 4;
        baye.data.g_asyncActionParams[0] = items.length;
        baye.data.g_asyncActionParams[1] = init;

        for (var i = 0; i < items.length; i++) {
            baye.data.g_asyncActionStringParamArray[i] = items[i];
        }
        setcb0(then);
    };

    baye.chooseTool = function(items, init, then) {
        baye.data.g_asyncActionID = 5;
        baye.data.g_asyncActionParams[0] = items.length;
        baye.data.g_asyncActionParams[1] = init;

        for (var i = 0; i < items.length; i++) {
            baye.data.g_asyncActionStringParamArray[i] = items[i];
        }
        setcb0(then);
    };

    baye.chooseCity = function(then) {
        baye.data.g_asyncActionID = 6;
        setcb0(then);
    };

    baye.getPersonByName = function(name) {
        var all = baye.data.g_Persons;
        for (var i = 0; i < all.length; i++) {
            if (baye.getPersonName(i) == name) {
                return all[i];
            }
        }
    };

    baye.getCityByName = function(name) {
        var all = baye.data.g_Cities;
        for (var i = 0; i < all.length; i++) {
            if (baye.getCityName(i) == name) {
                return all[i];
            }
        }
    };

    baye.getFighterIndexByName = function(name) {
        var all = baye.data.g_FgtParam.GenArray;
        for (var i = 0; i < all.length; i++) {
            var index = all[i] - 1;
            if (index >= 0 && baye.getPersonName(index) == name) {
                return i;
            }
        }
    };

    baye.getFighterPositionByName = function(name) {
        var idx = baye.getFighterIndexByName(name);
        return baye.data.g_GenPos[idx];
    };

    baye.getPersonNameByID = function(id) {
        switch (id) {
        case 0:
            return "-";
        case 0xff:
            return "俘虏";
        default:
            return baye.getPersonName(id - 1);
        }
    };

    baye.printCity = function(i) {
        var city = baye.data.g_Cities[i];
        var people = baye.data.g_Persons;
        var queue = baye.data.g_PersonsQueue;

        var belong = baye.getPersonNameByID(city.Belong);

        console.log("--------" + baye.getCityName(i) + "--------");
        console.log("id: " + i);
        console.log("归属: " + belong);
        console.log("-");
        for (var qi = 0; qi  < city.Persons; qi++) {
            var pind = queue[city.PersonQueue + qi];
            var person = people[pind];
            var name = baye.getPersonName(pind);
            var belong = baye.getPersonNameByID(person.Belong);
            console.log(sprintf("%-10s 归属:%-10s", name, belong));
        }
        console.log("-");
        var queue = baye.data.g_GoodsQueue;
        var tools = baye.data.g_Tools;
        for (var qi = 0; qi  < city.Tools; qi++) {
            var tindex = queue[city.ToolQueue + qi];
            var tool = tools[pind];
            var name = baye.getToolName(pind);
            console.log(name);
        }
    };

    baye.printPeople = function () {
        for (var i = 0; i < 250; i++) {
            var p = baye.data.g_Persons[i];
            if (p.Level > 0) {
                console.log(sprintf('index: %03d name: %-08s 归属:%-08s', i, baye.getPersonName(i), baye.getPersonNameByID(p.Belong)));
            }
        }
    };

    baye.printAllCities = function() {
        var cities = baye.data.g_Cities;

        for (var i = 0; i < cities.length; i++) {
            baye.printCity(i);
        }
    };

    baye.getTerrainByGeneralIndex = function(index) {
        return _bayeFgtGetGenTer(index);
    };

    baye.putPersonInCity = function(city, person) {
        return _bayePutPersonInCity(city, person);
    };

    baye.putToolInCity = function(city, tool, hide) {
        return _bayePutToolInCity(city, tool, hide ? 1 : 0);
    };

    baye.deletePersonInCity = function(city, person) {
        return _bayeDeletePersonInCity(city, person);
    };

    baye.deleteToolInCity = function(city, tool) {
        return _bayeDeleteToolInCity(city, tool);
    };

    baye.getPersonByGeneralIndex = function(gIndex) {
        var pid = baye.data.g_FgtParam.GenArray[gIndex];
        return baye.data.g_Persons[pid - 1];
    };

    baye.moveHere = function(name) {
        var i = baye.getFighterIndexByName(name);
        var pd = baye.data.g_GenPos[i];
        pd.x = baye.data.g_FoucsX;
        pd.y = baye.data.g_FoucsY;
    };

    baye.getArmType = function(pindex) {
        return _bayeGetArmType(pindex);
    };

    var gbkPtr = _bayeGetGBKBuffer();
    baye.drawText = function (x, y, text) {
        baye.data.g_asyncActionStringParam = text;
        return _bayeLcdDrawText(gbkPtr, x, y);
    };

    baye.drawImage = function(x, y, resid, resitem, picIndex, scr) {
        _bayeLcdDrawImage(resid, resitem, picIndex, x, y, scr == 1 ? 0 : 1);
    };

    baye.clearRect = function(left, top, right, bottom) {
        _bayeLcdClearRect(left, top, right, bottom);
    };

    baye.revertRect = function(left, top, right, bottom) {
        _bayeLcdRevertRect(left, top, right, bottom);
    };

    baye.drawLine = function(startX, startY, endX, endY) {
        _bayeLcdDrawLine(startX, startY, endX, endY, 1);
    };

    baye.drawRect = function(left, top, right, bottom) {
        _bayeLcdDrawRect(left, top, right, bottom, 1);
    };

    baye.drawDot = function(x, y, color) {
        _bayeLcdDot(x, y, color);
    };

    baye.clearScreen = function() {
        baye.clearRect(0, 0, baye.data.g_screenWidth, baye.data.g_screenHeight);
    };

    baye.resizeScreen = function(width, height) {
        bayeResizeScreen(width, height);
    };

    baye.patchNames = function() {
        var l = baye.data.g_Persons.length;
        for (var i = 0; i < l; i++) {
            baye.data.g_Persons[i].name = baye.getPersonName(i);
        }

        l = baye.data.g_Tools.length;
        for (var i = 0; i < l; i++) {
            baye.data.g_Tools[i].name = baye.getToolName(i);
        }

        l = baye.data.g_Skills.length;
        for (var i = 0; i < l; i++) {
            baye.data.g_Skills[i].name = baye.getSkillName(i);
        }
    };

    baye.saveScreen = _bayeSaveScreen;

    baye.restoreScreen = _bayeRestoreScreen;

    //计算将领在屏幕的像素位置
    baye.getFighterXY = function (index) {
        var ox = baye.data.g_GenPos[index].x - baye.data.g_MapSX;
        var oy = baye.data.g_GenPos[index].y - baye.data.g_MapSY;
        return {
            x: ox * 16,
            y: oy * 16
        };
    };

    baye.None = 255;
});

$(function(){
    baye.debug = {};

    baye.debug.pa = function () {
        for (var i = 0; i < 20; i++) {
            var id = baye.data.g_FgtParam.GenArray[i];
            if (id) {
                console.log('' + i + ':' + baye.getPersonName(id-1));
            }
        }
    };

    baye.debug.reset = function () {
        baye.data.g_LookMovie = 0;
        for (var i = 0; i < 10; i++) {
            var id = baye.data.g_FgtParam.GenArray[i];
            if (id) {
                baye.data.g_GenPos[i].active = 0;
                baye.data.g_GenPos[i].hp = 100;
                baye.data.g_GenPos[i].mp = 100;
                baye.data.g_Persons[id-1].Arms = 10000;
            }
        }
    };

    // 调试, 移动指定任务到跟前来
    baye.debug.mv = function (i) {
        var pd = baye.data.g_GenPos[i];
        pd.x = baye.data.g_FoucsX;
        pd.y = baye.data.g_FoucsY;
    };

});
