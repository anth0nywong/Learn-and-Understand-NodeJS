var greet = require('./greet1');
greet();
var greet2 = require('./greet2').greet;
greet2();
var greet3 = require('./greet3');
var greet3b = require('./greet3');
greet3b.greeting = 'Changed Hello World';
greet3.greet();
greet3b.greet();

var Greet4 = require('./greet4');
var greet4 = new Greet4();
var greet4b = new Greet4();

greet4.greet();
greet4b.greeting = 'Changed Hello World';
greet4b.greet();

var greet5 = require('./greet5').greet;
greet5();