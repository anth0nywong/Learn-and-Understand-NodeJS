var greet = require('./greet1');
greet();
var greet2 = require('./greet2').greet;
greet2();
var greet3 = require('./greet3');


var greet3b = require('./greet3');
greet3.greeting = 'Changed Hello World';
greet3.greet();
greet3b.greet();