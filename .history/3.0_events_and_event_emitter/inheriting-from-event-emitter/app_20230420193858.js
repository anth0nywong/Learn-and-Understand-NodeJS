let EventEmitter = require("events");
let util = require("util");

function Greetr() {
  this.greeting = "Hello World!";
}

util.inherits(Greetr, EventEmitter);

// Has an empty prototype object between Greetr and EventEmitter
Greetr.prototype.greet = function () {
  console.log(this.greeting);
};
