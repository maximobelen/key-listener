var KeyListener = require('./index.js');

var keyListener = new KeyListener();

console.log("Backspace key code: " + (keyListener.getKey('backspace')));

console.log("____________________________________");

console.log("Key Code 8: " + (keyListener.getKey(8)));

console.log("____________________________________");
console.log("Key Code 35: " + (keyListener.getKey(35)));