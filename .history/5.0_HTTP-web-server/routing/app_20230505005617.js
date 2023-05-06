let http = require('http');
let fs = require('fs');

http.createServer(function(req, res){
    // Custom routing function using if
    if(req.url == '/api'){
        res.writeHead(200, {'Content-Type':'text/html'});
    
    let obj = {
        firstname: 'John',
        lastname: 'Doe'
    };
    res.end(JSON.stringify(obj));
    }
    if(req.url==='/'){
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    }
    
}).listen(1337, '127.0.0.1');

// 127.0.0.1 is address of local host