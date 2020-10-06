const keyCodes = {"L": VK_LEFT, "R": VK_RIGHT, "U": VK_UP, "D": VK_DOWN, "B": VK_EXIT, "A": VK_ENTER, "Y": VK_PGUP, "X": VK_PGDN, "F1": VK_SEARCH, "F2": VK_HELP};

let _keyDownTimer = null;
function keyDown(id) {
  const invoke = () => {
    sendKey(keyCodes[id]);
  }

  resetKeys();
  invoke();
  _keyDownTimer = setInterval(invoke, 200);
}

function keyUp(id) {
  resetKeys();
}

function resetKeys() {
  if (_keyDownTimer) {
    clearInterval(_keyDownTimer);
  }
}