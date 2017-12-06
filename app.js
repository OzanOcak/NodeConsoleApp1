console.log('Hello world');

var x = 25;
var y = 35;
console.log(x + y);

var msgs = require("./msgs.js");
console.log(msgs.firstMsg);

var msgFunc = require("./msgFunc.js");
console.log(msgFunc());

var msg = new msgFunc();
console.log(msg.another);

//npm install --save underscore
var underscore = require("underscore")

//npm install express --save
