let http = require('http');
let fs = require('fs');



http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    let html = fs.readFileSync(__dirname + '/index.html');
    res.end(html);
}).listen(1337, '127.0.0.1');

// 127.0.0.1 is address of local host