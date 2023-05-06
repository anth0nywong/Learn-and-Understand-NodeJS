let fs = require('fs');

// highWaterMark define the size of buffer
let readable = fs.createReadStream(__dirname + '/greet.txt');

let writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk){
    console.log(chunk.length);
    writable.write(chunk);
})
