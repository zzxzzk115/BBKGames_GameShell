const keyCodes = {"L": 3, "R": 4, "U": 1, "D": 2, "B": 8, "A": 7, "Y": 5, "X": 6};

function sysAddKeyDownListener(callback) {
  window.fmjSendKeyDown = callback;
}

function sysAddKeyUpListener(callback) {
  window.fmjSendKeyUp = callback;
}

let _keyDownTimer = null;
function keyDown(id) {
  const invoke = () => {
    fmjSendKeyDown(keyCodes[id]);
  }

  resetKeys();
  invoke();
  _keyDownTimer = setInterval(invoke, 200);
}

function keyUp(id) {
  resetKeys();
  fmjSendKeyUp(keyCodes[id]);
}

function resetKeys() {
  if (_keyDownTimer) {
    clearInterval(_keyDownTimer);
  }
}