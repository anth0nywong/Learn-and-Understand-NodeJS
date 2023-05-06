let Emitter = require('./emitter');

let emtr = new Emitter();

emtr.on('greet', function(){
    console.log('Hello');
})