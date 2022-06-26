var lcdWidth = 16*10;
var lcdHeight = 16*6;
var lcdDotSize = 1;

function getLCD() {
    var canvas = document.getElementById('lcd');
    if (canvas.getContext === undefined) {
        alert("你的浏览器不支持HTML5");
    }
    var ctx = canvas.getContext('2d');
    return ctx;
}

function lcdInit()
{
    if(navigator.userAgent.match(/(Android|ARM)/i)){
        lcdDotSize = 2;
    }
    var width = 16*10;
    var height = 16*6;

    //分辨率
    switch (window.localStorage["baye/resolution"]) {
    case '0':
        width = 16*10;
        height = 16*6;
        break;
    case '1':
        width = 16*13;
        height = 16*8;
        break;
    }

    // 锐化
    switch (window.localStorage["baye/clearmode"]) {
    case '0':
        lcdDotSize = 1;
        break;
    case '1':
        lcdDotSize = 2;
        break;
    }

    bayeResizeScreen(width, height);

    if (window.localStorage["baye/debug"] == '1') {
        _bayeSetDebug(1);
    }
}

function bayeResizeScreen(width, height) {
    lcdWidth = width;
    lcdHeight = height;
    var canvas = document.getElementById('lcd');
    canvas.width = width * lcdDotSize;
    canvas.height = height * lcdDotSize;
    _bayeSetLcdSize(lcdWidth, lcdHeight);
}

function imagePixel(img, i)
{
    img.data[i] = 0;
    img.data[i+1] = 0;
    img.data[i+2] = 0;
    img.data[i+3] = 255;
}

function imageDot(img, x, y, lineSize)
{
    x *= lcdDotSize;
    y *= lcdDotSize;
    lineSize *= lcdDotSize;

    for (var x0 = x; x0 < x+lcdDotSize; x0++)
        for (var y0 = y; y0 < y+lcdDotSize; y0++) {
            var ind = lineSize*y0 + x0;
            imagePixel(img, ind*4);
        }
}

function lcdFlushBuffer(buffer) {
    var scale = 2;
    var lcd = getLCD();
    var w = lcdWidth;
    var h = lcdHeight;
    var lineSize = lcdWidth;

    var img = lcd.createImageData(lcdWidth*lcdDotSize, lcdHeight*lcdDotSize);

    for (var y = 0; y < h; y += 1) {
        for (var x = 0; x < w; x += 1) {
            var ind = lineSize*y + x;
            var pixel = getValue(buffer + ind, "i8");
            if (pixel != 0) {
                imageDot(img, x, y, lineSize);
            }
        }
    }
    lcd.imageSmoothingEnabled = false;
    lcd.putImageData(img, 0, 0);
}

function sendKey(key) {
    _bayeSendKey(key);
}

var 		VK_PGUP =			0x20;
var 		VK_PGDN	=			0x21;
var 		VK_UP	=			0x22;
var 		VK_DOWN	=			0x23;
var 		VK_LEFT	=			0x24;
var 		VK_RIGHT=			0x25;
var 		VK_HELP	=			0x26;
var 		VK_ENTER=			0x27;
var 		VK_EXIT	=			0x28;

var 		VK_INSERT	=		0x30;
var 		VK_DEL		=		0x31;
var 		VK_MODIFY	=		0x32;
var 		VK_SEARCH	=		0x33;

function onKeyDown(e) {
    var event = e?e:window.event;
    switch (event.keyCode) {
        case 13:
            sendKey(VK_ENTER);
            break;
        case 72:
            sendKey(VK_HELP);
            break;
        case 70:
            sendKey(VK_SEARCH);
            break;
        case 83:
            sendKey(VK_SEARCH);
            break;
        case 32:
            sendKey(VK_EXIT);
            break;
        case 27:
            sendKey(VK_EXIT);
            break;
        case 38:
            sendKey(VK_UP);
            break;
        case 40:
            sendKey(VK_DOWN);
            break;
        case 37:
            sendKey(VK_LEFT);
            break;
        case 39:
            sendKey(VK_RIGHT);
            break;
    }
}

function bin2hex (s) {

  var i, l, o = "", n;

  s += "";

  for (i = 0, l = s.length; i < l; i++) {
    n = s.charCodeAt(i).toString(16)
    o += n.length < 2 ? "0" + n : n;
  }

  return o;
}

function binarray2hex (arr) {

  var i, l, o = "", n;

  for (i = 0, l = arr.length; i < l; i++) {
    n = arr[i].toString(16)
    o += n.length < 2 ? "0" + n : n;
  }

  return o;
}

function loadHexLib(hexLib) {
    window.localStorage['baye//data/dat.lib'] = hexLib;
    redirect();
}


function loadLibBin(bin) {
    console.log('bin length:' + bin.length);
    if (bin.length == 622874) {
        bin = bin.slice(425984);
    }
    var data = bin2hex(bin);
    loadHexLib(data);
}

function loadLibBinAndName(bin, name) {
    window.localStorage['baye/libname'] = name;
    var hex = binarray2hex(bin);
    loadHexLib(hex);
}

function loadLib(files) {
    window.localStorage['baye/libname'] = "自定义lib";
    loadLibFromFile(files[0]);
}

function loadLibFromFile(file) {
    var reader = new FileReader();
    if (!reader) {
        alert("浏览器不支持载入文件");
    }
    reader.onload = function() {
        loadLibBin(reader.result);
    }
    reader.readAsBinaryString(file);
}

function clearLib() {
    window.localStorage.removeItem('baye//data/dat.lib');
    window.localStorage.removeItem('baye/libname');
    redirect();
}

function getLibName() {
    return window.localStorage['baye/libname'] || "步步高原版";
}

if (typeof(Storage) === "undefined") {
    alert("你的浏览器不支持存档");
}


var layoutType = 0;
var keypadWidth = 250;


function layoutKeyboard() {
    var w = window.innerWidth
    var h = window.innerHeight

    if (h / w > lcdHeight/lcdWidth) {
        var availableHeight = h - w * lcdHeight/lcdWidth;
        var isCompatLayout = (layoutType == 1 || layoutType == 2);

        var kbWidth = isCompatLayout ? keypadWidth : w;

        var ratio = availableHeight / 3 / kbWidth * 100;
        if (ratio > 30) {
            ratio = 30;
        }

        $(".dummy30").css("margin-top", ratio + "%");
        $(".keypad").removeAttr("style");

        if (isCompatLayout) {
            $(".keypad").css("width", keypadWidth);
            if (layoutType == 1) {
                $(".keypad").css("float", 'right');
            } else {
                $(".keypad").css("float", 'left');
            }
        }

        if (layoutType == 3) {
            $("#keypad1").hide();
            $("#keypad2").show();
        } else {
            $("#keypad2").hide();
            $("#keypad1").show();
        }
    }
}

function saveKeyboardLayout() {
    window.localStorage['baye.kb.layout'] = String(layoutType);
}

function loadKeyboardLayout() {
    layoutType = parseInt(window.localStorage['baye.kb.layout']);
    if (!layoutType) {
        layoutType = 0;
    }
    layoutKeyboard();
}

function switchLayout() {
    layoutType += 1;
    layoutType %= 4;
    saveKeyboardLayout();
    layoutKeyboard();
}

loadKeyboardLayout();

String.prototype.format = function(args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if(args[key]!=undefined){
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg = new RegExp("({[" + i + "]})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}

function ajaxGet(path, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.responseType = 'blob';

    xhr.onload = function(e) {
      if (this.status == 200) {
        var blob = this.response;
        callback(blob);
      }
    };

    xhr.send();
}

function chooseLib(title, path, self_) {
    var self = $(self_);
    self.html("请稍候...");
    self.attr("disabled", "disabled");

    if (path && path.length > 0) {
        ajaxGet(path, function(blob) {
            window.localStorage['baye/libname'] = title;
            loadLibFromFile(blob);
        });
    } else {
        clearLib();
    }
}

function loadDetail(id, path) {
    var e = $(id);
    if (e.is(":hidden")) {
        if (e.html().length > 0) {
            e.show();
        } else {
            $.get(path, {}, function(text) {
                e.html(text.replace(/(?:\r\n|\r|\n)/g, '<br />'));
                e.show();
            });
        }
    } else {
        e.hide();
    }
}

function loadLibLists(container) {
    var match = window.location.search.match(/nocache=1/i);
    var pathQuery = match ? '?t=' + new Date().getTime() : '';

    $.ajax({
         type:"GET",
         url:"libs.json" + pathQuery,
         dataType:"json",
     }).success(function(json) {
        var tpl = $("#item_temp").html();

        html = "";
        for (i in json) {
            var title = json[i]["title"];
            var maintitle = title;
            if (json[i]["hot"]) {
                maintitle = '<img src="lvjing2.gif" class="qmlw" />' + title + '<img src="gftj.png" class="gftj" />';
            }
            html += tpl.format(
            {
             title: title,
             maintitle: maintitle,
             libpath: json[i]["path"] + pathQuery,
             descid: i,
             descpath: json[i]["path"]+'.txt' + pathQuery,
            }
            );
        }
        $(container).html(html);
    });
}

function redirect(page) {
    var isMobile = false;
    if(navigator.userAgent.match(/(iPhone|iPod|Android|ios|Mobile|ARM)/i)){
        var defaultMPage = "m.html";
        switch (window.localStorage['baye/mpage']) {
        case '0':
            defaultMPage = "m.html"
            break;
        case '1':
            defaultMPage = "m-old.html"
            break;
        case '2':
            defaultMPage = "m-ges.html"
            break;
        case '3':
            defaultMPage = "m-ktouch.html"
            break;
        }
        console.log('page:' + page);
        console.log('defpage:' + defaultMPage);
        page = page || defaultMPage;
        isMobile = true;
    } else {
        page = "pc.html";
        isMobile = false;
    }
    var now = new Date().getTime() / 1000;
    var name = getLibName();
    var hash = isMobile ? "#" + now : "";
    window.location.href = page + "?name=" + name + hash;
}

function goHome() {
    window.location.href = "index.html";
}

function disablePageScroll() {
    document.body.addEventListener('touchmove', function(event) {
        event.preventDefault();
    }, {
        passive: false,
        capture: false
    });
    window.onscroll = function() {  window.scrollTo(0, 0); }
}

function touchPadInit(elementID) {
    var activeTouch = null;
    var originX = 0;
    var originY = 0;
    var lastX = 0;
    var lastY = 0;
    var touchMoved = false;
    var xMoved = 0;
    var yMoved = 0;
    var previousMovingTime = 0;
    var previousX = 0;
    var previousY = 0;
//    var normalBackgroundColor = "#fff";
    function convertTouch(touch) {
        switch (lcdRotateMode) {
        case 0:
            break;
        case 1:
            return {
                x: touch.screenY,
                y: window.screen.width-touch.screenX,
            };
        case 2:
            return {
                x: window.screen.height-touch.screenY,
                y: touch.screenX,
            };
        }
        return {
            x: touch.screenX,
            y: touch.screenY,
        };
    }

    function raiseKey(key) {
        sendKey(key);
    }

    function resetTouch() {
        activeTouch = null;
        touchMoved = false;
        xMoved = 0;
        yMoved = 0;
        previousX = 0;
        previousY = 0;
        // todo: reset color
    }

    function touchBegan(event) {
        if (activeTouch || event.targetTouches.length < 1) {
            return;
        }
        activeTouch = event.targetTouches[0];
        previousMovingTime = event.timeStamp;
        var touch = convertTouch(activeTouch);
        previousX = lastX = originX = touch.x;
        previousY = lastY = originY = touch.y;
        touchMoved = false;
        // todo: color
    }

    function find(touches, touch) {
         for (var i in touches) {
            if (touch.identifier == touches[i].identifier) {
                return touches[i];
            }
         }
         return null;
    }

    function touchEnded(event) {
        if (activeTouch && find(event.changedTouches, activeTouch)) {
            resetTouch();
        }
    }

    function processPointMove(point,
                        previousPoint,
                        previousStayPoint,
                        dT,
                        stepMax,
                        stepMin,
                        speedMax,
                        speedThreshold,
                        vkUp,
                        vkDown)
    {
        var speed = (point - previousPoint) / dT;
        var dP = point - previousStayPoint;


        speed = Math.abs(speed);
        if (speed > speedThreshold) {
            speed -= speedThreshold;
        }
        else {
            speed = 0;
        }

        speed = Math.pow(speed, 3);
        speedMax = Math.pow(speedMax, 3);
        speed = Math.min(speed, speedMax);

        var step = stepMax - speed / speedMax * (stepMax - stepMin);
        var count = Math.floor(Math.abs(dP) / step);
        if (count > 0) {
            for (var i = 0; i < count; i++) {
                raiseKey( dP < 0 ? vkUp : vkDown);
            }
            return point;
        }
        return previousStayPoint;
    }

    function touchMove(event) {
        if (activeTouch) {
            var newTouch = find(event.changedTouches, activeTouch);
            if (!newTouch) {
                return;
            }

            var touch = convertTouch(newTouch);
            var x = touch.x;
            var y = touch.y;

            var dt = event.timeStamp - previousMovingTime;
            previousMovingTime = event.timeStamp;

            var dX = x - previousX;
            var dY = y - previousY;
            var speedX = dX / dt;
            var speedY = dX / dt;
            var ratio = Math.abs(speedX / speedY);

            lastY = processPointMove(y, previousY, lastY, dt, 30, 0.3, 2000, 800, VK_UP, VK_DOWN);
            lastX = processPointMove(x, previousX, lastX, dt, 30, 8, 1000, 500, VK_LEFT, VK_RIGHT);

            previousX = x;
            previousY = y;

            touchMoved = true;
        }
    }

    var element = document.getElementById(elementID);

    element.addEventListener("touchstart", touchBegan);
    element.addEventListener("touchmove", touchMove);
    element.addEventListener("touchend", touchEnded);
    element.addEventListener("touchcancel", touchEnded);
    disablePageScroll();
}

var lcdRotateMode = 0;

function touchScreenInit(lcdID) {
    var lcd = document.getElementById(lcdID);

    var activeTouch = null;

    var VT_TOUCH_DOWN = 1
    var VT_TOUCH_UP = 2
    var VT_TOUCH_MOVE = 3
    var VT_TOUCH_CANCEL = 4

    function raiseTouchEvent(key, touch) {
        var rect = lcd.getBoundingClientRect();

        var webX = touch.clientX - rect.left;
        var webY = touch.clientY - rect.top;

        var gameX = webX / rect.width * lcdWidth;
        var gameY = webY / rect.height * lcdHeight;

        switch (lcdRotateMode) {
        case 0:
            break;
        case 1:
            gameX = webY / rect.height * lcdWidth;
            gameY = (rect.width - webX) / rect.width * lcdHeight;
            break;
        case 2:
            gameX = (rect.height - webY) / rect.height * lcdWidth;
            gameY = webX / rect.width * lcdHeight;
            break;
        }
        bayeDebugLog(sprintf('key:%d (%.1f, %.1f)', key, gameX, gameY));
        _bayeSendTouchEvent(key, gameX, gameY);
    }

    function resetTouch() {
        activeTouch = null;
    }

    function touchBegan(event) {
        if (activeTouch || event.targetTouches.length < 1) {
            return;
        }
        activeTouch = event.targetTouches[0];
        raiseTouchEvent(VT_TOUCH_DOWN, activeTouch);
    }

    function find(touches, touch) {
         for (var i in touches) {
            if (touch.identifier == touches[i].identifier) {
                return touches[i];
            }
         }
         return null;
    }

    function touchEnded(event) {
        if (activeTouch) {
            var touch = find(event.changedTouches, activeTouch);
            if (!touch) {
                return;
            }
            raiseTouchEvent(VT_TOUCH_UP, touch);
            resetTouch();
        }
    }

    function touchMove(event) {
        if (activeTouch) {
            var touch = find(event.changedTouches, activeTouch);
            if (!touch) {
                return;
            }
            raiseTouchEvent(VT_TOUCH_MOVE, touch);
        }
    }

    function touchCanceled(event) {
        if (activeTouch) {
            var touch = find(event.changedTouches, activeTouch);
            if (!touch) {
                return;
            }
            raiseTouchEvent(VT_TOUCH_CANCEL, touch);
            resetTouch();
        }
    }
    lcd.addEventListener("touchstart", touchBegan);
    lcd.addEventListener("touchmove", touchMove);
    lcd.addEventListener("touchend", touchEnded);
    lcd.addEventListener("touchcancel", touchCanceled);
    disablePageScroll();
}

// --------- Engine callbacks ---------

function bayeFlushLcdBuffer(buffer) {
    lcdFlushBuffer(buffer);
}

function bayeStart() {
    _bayeSetLcdSize(lcdWidth, lcdHeight);
}

function bayeExit() {
    goHome();
}

function bayeLoadFileContent(filename) {
    console.log("Loading " + filename);
    return window.localStorage[filename];
}

function bayeSaveFileContent(filename, content) {
    console.log("Saving " + filename);
    window.localStorage[filename] = content;
}

Module = {};
Module.memoryInitializerPrefixURL = "../baye-engine/";

var logarr = [];
function bayeDebugLog(msg) {
    if (window.bayeDebugMode) {
        var s = '';
        logarr.push(msg? msg : baye.data.g_asyncActionStringParam);
        if (logarr.length > 10) {
            logarr = logarr.slice(logarr.length-10);
        }

        for (var i = 0; i < logarr.length; i++) {
            s += sprintf('%s<br>', logarr[i]);
        }
        $("#info").html(s);
    }
}
