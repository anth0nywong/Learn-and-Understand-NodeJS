let fs = require('fs');

let readable = fs.createReadStream(__dirname + '/greet.txt', {encoding:'utf8'});

readable.on('data', function(chunk){
    console.log('Read 1 line');
})