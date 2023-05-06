let fs = require('fs');

let readable = fs.createReadStream(__dirname + '/greet.txt');

readable.on('data', function(chunk){
    console.log(chunk);
})