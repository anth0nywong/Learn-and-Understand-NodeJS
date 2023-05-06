let http = require('http');
let fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    let html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    var message = "Customized Message.";
    res.end(html);
}).listen(1337, '127.0.0.1');

// 127.0.0.1 is address of local host