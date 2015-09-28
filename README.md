#key-listener

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

A handler for adding listeners to key events without taking care of keys codes.

```js
  var KeyListener = require('key-listener');

  var handler = new KeyListener();
  handler.addListener(document, 'a', function(){
    console.log("Hello World");
  });
  //This is going write Hello World when the letter 'a' is pressed.

  //If you really want to work with the codes and add your function as you like...

  handler.getKey('backspace'); // 8
  handler.getKey(16); // shift
```

## Usage

[![NPM](https://nodei.co/npm/key-listener.png)](https://www.npmjs.com/package/key-listener)
