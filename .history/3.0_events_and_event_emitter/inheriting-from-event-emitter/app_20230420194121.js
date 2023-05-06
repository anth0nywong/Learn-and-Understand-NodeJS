let EventEmitter = require("events");
let util = require("util");

function Greetr() {
  this.greeting = "Hello World!";
}

// Inherit Greetr from Event Emitter, make emit and on available
util.inherits(Greetr, EventEmitter);

// Has an empty prototype object between Greetr and EventEmitter
Greetr.prototype.greet = function () {
  console.log(this.greeting);
  this.emit('greet');
};

let greeter1 = new Greetr();

greeter1.on('greet', function(){
    console.log('Someone Greet!');
})

greeter1.greet();
