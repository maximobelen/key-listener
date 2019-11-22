module.exports = KeyListener;

var keys = ['backspace', 'tab', 'enter', 'shift', 'ctrl', 'alt', 'pause/break', 'caps lock', 'escape', 'space', 'page up', 'page down', 'end', 'home', 'left arrow', 'up arrow', 'right arrow', 'down arrow', 'insert', 'delete', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'left window key', 'right window key', 'select key', 'numpad 0', 'numpad 1', 'numpad 2', 'numpad 3', 'numpad 4', 'numpad 5', 'numpad 6', 'numpad 7', 'numpad 8', 'numpad 9', 'multiply', 'add', 'subtract', 'decimal point', 'divide', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12', 'num lock', 'scroll lock', 'semi-colon', 'equal sign', 'comma', 'dash', 'period', 'forward slash', 'grave accent', 'open bracket', 'back slash', 'close braket', 'single quote'];
var codes = [8, 9, 13, 16, 17, 18, 19, 20, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 144, 145, 186, 187, 188, 189, 190, 191, 192, 219, 220, 221, 222];

function KeyListener() {
  if (!(this instanceof KeyListener)) {
    return new KeyListener();
  }
}

KeyListener.prototype.addListener = function (element, key, userFunction) {
  var comparator;
  if (typeof key === 'string') {
    comparator = codes[keys.indexOf(key)];
  } else {
    if (typeof key === 'number') {
      comparator = key;
    }
  }
  if (comparator) {
    element.addEventListener('keydown', function (e) {
      var keyCode = e.keyCode ? e.keyCode : e.which;
      if (keyCode === comparator) {
        userFunction();
      }
    }.bind(this));
  }
};

KeyListener.prototype.getKey = function (key) {
  if (typeof key === 'string') {
    return codes[keys.indexOf(key)];
  } else {
    if (typeof key === 'number') {
      return keys[codes.indexOf(key)];
    }
  }
};
