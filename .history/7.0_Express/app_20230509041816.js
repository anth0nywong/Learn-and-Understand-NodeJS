let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.send('<html><head><link href=assets/style.css rel="stylesheet" type="text/css"/></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/api', function(req, res){
    res.json({
        firstname:'John', lastname:'Doe'
    });
})

app.get('/person/:id', function(req, res){
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
})

app.listen(port);