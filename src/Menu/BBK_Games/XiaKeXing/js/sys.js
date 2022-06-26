
;(function(global) {
    var gbkDecoder = new TextDecoder('GBK');
    var gbkEncoder = new TextEncoder('GBK', { NONSTANDARD_allowLegacyEncoding: true });

    var KEY_UP = 1
    var KEY_DOWN = 2
    var KEY_LEFT = 3
    var KEY_RIGHT = 4
    var KEY_PAGEUP = 5
    var KEY_PAGEDOWN = 6
    var KEY_ENTER = 7
    var KEY_CANCEL = 8

    function transCode(k) {
        switch (k) {
            case 13:
                return KEY_ENTER;
            case 32:
                return KEY_CANCEL;
            case 27:
                return KEY_CANCEL;
            case 38:
                return KEY_UP;
            case 40:
                return KEY_DOWN;
            case 37:
                return KEY_LEFT;
            case 39:
                return KEY_RIGHT;
            case 219:
                return KEY_PAGEUP;
            case 221:
                return KEY_PAGEDOWN;
            default:
                return 255;
        }
    };

    function getLCD() {
        var canvas = document.getElementById('lcd');
        var ctx = canvas.getContext('2d');
        return ctx;
    }

    function imagePixel(img, i, color)
    {
        img.data[i] = color.r;
        img.data[i+1] = color.g;
        img.data[i+2] = color.b;
        img.data[i+3] = color.a;
    }

    function imageDot(img, x, y, lineSize, color)
    {
        var ind = lineSize*y + x;
        imagePixel(img, ind*4, color);
    }

    function getStorage(path) {
        if (path.startsWith("sav/")) {
            return window.localStorage
        } else {
            return fmj.rom;
        }
    }

    global.sysStorageGet = function(path) {
        return getStorage(path)[path];
    };

    global.sysStorageSet = function(path, value) {
        return getStorage(path)[path] = value;
    };

    global.sysStorageHas = function(path) {
        return getStorage(path)[path] != null;
    };

    global.sysGbkEncode = function(str) {
        return gbkEncoder.encode(str);
    };

    global.sysGbkDecode = function(data) {
        return gbkDecoder.decode(new Int8Array(data));
    };

    global.sysRandom = Math.random;

    function call(f, a) {
        try {
            f(a);
        } catch (e) {
            throw new Error(e + "\n" + e.stack);
        }
    }

    global.sysAddKeyDownListener = function(callback) {
        $('body').keydown(function(e){
            call(callback, transCode(e.keyCode));
        });
    };

    global.sysAddKeyUpListener = function(callback) {
        $('body').keyup(function(e){
            call(callback, transCode(e.keyCode));
        });
    };

    global.sysSetInterval = function(interval, callback) {
        fmj.updateInterval = setInterval(function(){
            call(callback);
        }, interval);
        return fmj.updateInterval;
    };

    global.sysDrawScreen = function(buffer, wid, hgt) {
        var lcd = getLCD();
        var w = wid;
        var h = hgt;

        var img = lcd.createImageData(wid, hgt);

        for (var y = 0; y < h; y += 1) {
            for (var x = 0; x < w; x += 1) {
                var ind = w*y + x;
                var pixel = buffer[ind];
                imageDot(img, x, y, w, pixel);
            }
        }
        lcd.imageSmoothingEnabled = false;
        lcd.putImageData(img, 0, 0);
    };

    global.sysExit = function() {
        console.log("Exit");
    };

    global.fmj = {rom: {}};
})(this);


window.onerror = function(msg, url, line, col, error) {
    clearInterval(fmj.updateInterval);
    alert(msg + " at " + line);
    return false;
};

function enableDebug() {
    var core = window['fmj.core'].fmj
    function foreachPlayer(f) {
        var players = core.game.playerList.toArray();
        for (var i = 0; i < players.length; i++) {
            f(players[i]);
        }
    }
    $('body').keydown(function(e){
        switch(e.key) {
            case "f": {
                core.combat.Combat.Companion.ForceWin();
                console.log("Forced win");
                break;
            }
            case "d": {
                core.combat.Combat.Companion.globalDisableFighting_0 = true;
                console.log("disabled random fight");
                break;
            }
            case "e": {
                core.combat.Combat.Companion.globalDisableFighting_0 = false;
                console.log("enabled random fight");
                break;
            }
            case "1": {
                foreachPlayer(function(p) {
                    p.hp = 999;
                });
                break;
            }
            case "2": {
                foreachPlayer(function(p) {
                    p.mp = 999;
                });
                break;
            }
            case "3": {
                foreachPlayer(function(p) {
                    p.debuff.reset();
                });
                break;
            }
        }
    });

    window.events = core.script.ScriptResources.globalEvents;
    window.core = core;
    window.printGoods = function() {
        var e = core.lib.DatLib.ResType;
        for (var type = 1; type <= 14; type++) {
            for (var index = 1; index < 200; index++) {
                var goods = core.lib.DatLib.Companion.getRes_2et8c9$(e.GRS, type, index, true);
                if (goods == null) {
                    break;
                }
                console.log("type=" + type + " index=" + index + " " + goods.name_dx74sj$_0 + " " + goods.description_yw9j1y$_0);
            }
        }
    };
}

