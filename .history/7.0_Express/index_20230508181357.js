let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

app.listen(port);

app.get('/', function(req, res){
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>')
});