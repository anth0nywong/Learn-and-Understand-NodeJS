var util = require('util');

var name = 'Anthony';
var greeting = util.format('Hello', '%s', name);
util.log(greeting);