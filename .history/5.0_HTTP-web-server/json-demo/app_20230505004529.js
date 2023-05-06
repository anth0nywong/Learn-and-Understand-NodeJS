let http = require('http');
let fs = require('fs');

http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type':'text/html'});
    
    let obj = {
        firstname: 'John',
        lastname: 'Doe'
    };
    res.end(obj.toString());
}).listen(1337, '127.0.0.1');

// 127.0.0.1 is address of local host