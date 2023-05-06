'use strict'

let EventEmitter = require("events");
let util = require("util");

module.exports = class Greetr extends EventEmitter{
  constructor() {
    super();
    this.greeting = "Hello World!";
  }
  greet(data){
    console.log(this.greeting + ": " + data);
  this.emit('greet', data);
  }
}
