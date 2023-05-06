let fs = require('fs');

let readable = s.createReadStream(__dirname + '/greet.txt');

readable.on('data', function(chunk){
    console.log(chunk);
})