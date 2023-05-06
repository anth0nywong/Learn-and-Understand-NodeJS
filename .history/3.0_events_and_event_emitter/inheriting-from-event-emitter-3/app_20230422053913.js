'use strict'

let EventEmitter = require("events");
let util = require("util");

class Geetr extends EventEmitter{
  constructor() {
    super();
    this.greeting = "Hello World!";
  }
  greet(data){
    console.log(this.greeting + ": " + data);
  this.emit('greet', data);
  }
}

// function Greetr() {
//   // Use Event Emitter constructor inside Greetr constructor, so that the new object created also has properties and methods of on Event Emitter Object
//   // So called super constructor
//   EventEmitter.call(this);
//   this.greeting = "Hello World!";
// }

// Inherit Greetr from Event Emitter, make emit and on available
// Inherit only connect prototype of EventEmitter to Greetr.
// util.inherits(Greetr, EventEmitter);

// Has an empty prototype object between Greetr and EventEmitter
// Greetr.prototype.greet = function (data) {
//   console.log(this.greeting + ": " + data);
//   this.emit('greet', data);
// };

let greeter1 = new Greetr();

greeter1.on('greet', function(data){
    console.log('Someone Greet: ' + data);
})

greeter1.greet('Tony');
