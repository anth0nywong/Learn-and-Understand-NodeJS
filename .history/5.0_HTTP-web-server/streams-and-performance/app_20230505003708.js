let http = require('http');
let fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});

    let html = fs.createReadStream(__dirname + '/index.htm', 'utf8').pipe(res);
    var message = "Customized Message.";

    html = html.replace('{Message}', message);
    res.end(html);
}).listen(1337, '127.0.0.1');

// 127.0.0.1 is address of local host