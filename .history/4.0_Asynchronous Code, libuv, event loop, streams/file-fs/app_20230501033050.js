let fs = require('fs');

// Read file into buffer synchronously 
let greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);


// Read file into buffer asynchronously 
let greet2 = fs.readFile(__dirname + '/greet.txt', function(err, data){

});
console.log(greet);