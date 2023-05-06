let fs = require('fs');

let readable = fs.createReadStream(__dirname + '/greet.txt', {encoding:'utf0'});

readable.on('data', function(chunk){
    console.log(chunk);
})