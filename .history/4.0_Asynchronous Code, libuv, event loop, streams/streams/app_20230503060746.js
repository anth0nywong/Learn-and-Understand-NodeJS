let fs = require('fs');

// highWaterMark define the size of buffer
let readable = fs.createReadStream(__dirname + '/greet.txt', {encoding:'utf8', highWaterMark: 32 * 1024});

readable.on('data', function(chunk){
    console.log(chunk.length());
})