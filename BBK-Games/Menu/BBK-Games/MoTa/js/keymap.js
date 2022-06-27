//GameShell适配的按键
$(document).keydown(function(event) {
    switch (event.keyCode) {
    //ESC(GameShell's Menu)->Exit Emulator
    case 27:
        nw.App.closeAllWindows();
        break;

    //left
    case 37:
        keyDown("L");
        break;

    //up
    case 38:
        keyDown("U");
        break;

    //right
    case 39:
        keyDown("R");
        break;

    //down
    case 40:
        keyDown("D");
        break;

    //Space(GameShell's Select)->B
    case 32:
        keyDown("F1");
        break;

    //ENTER(GameShell's Start)->A
    case 13:
        keyDown("F2");
        break;

    //K(GameShell's A)->A
    case 75:
        keyDown("A");
        break;

    //J(GameShell's B)->B
    case 74:
        keyDown("B");
        break;

    //I(GameShell's X)->X
    case 73:
        keyDown("X");
        break;

    //U(GameShell's Y)->Y
    case 85:
        keyDown("Y");
        break;

    default:
        keyDown(event.keyCode);
        break;
    }
});

$(document).keyup(function(event) {
    switch (event.keyCode) {
    //ESC ASCII 27
    case 27:
        nw.App.closeAllWindows();
        break;

    //left
    case 37:
        keyUp("L");
        break;

    //up
    case 38:
        keyUp("U");
        break;

    //right
    case 39:
        keyUp("R");
        break;

    //down
    case 40:
        keyUp("D");
        break;

    //Space(GameShell's Select)->B
    case 32:
        keyUp("F1");
        break;

    //ENTER(GameShell's Start)->A
    case 13:
        keyUp("F2");
        break;

    //K(GameShell's A)->A
    case 75:
        keyUp("A");
        break;

    //J(GameShell's B)->B
    case 74:
        keyUp("B");
        break;

    //I(GameShell's X)->X
    case 73:
        keyUp("X");
        break;

    //U(GameShell's Y)->Y
    case 85:
        keyUp("Y");
        break;

    default:
        keyUp(event.keyCode);
        break;
    }
});