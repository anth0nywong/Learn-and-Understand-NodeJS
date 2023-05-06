var greet = require('./greet1');
greet();
var greet2 = require('./greet2').greet;
greet2();
var greet3 = require('./greet3');
var greet3b = require('./greet3');
greet3b.greeting = 'Changed Hello World';
greet3.greet();
greet3b.greet();

var greet4 = require('./greet4');
var greet4b = require('./greet4');

greet4.greet();
greet4b.greet();