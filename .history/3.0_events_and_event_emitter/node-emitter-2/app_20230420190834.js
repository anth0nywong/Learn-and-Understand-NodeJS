let Emitter = require('events');
let EventConfig = require('./config').events;

let emtr = new Emitter();

emtr.on('greet', function(){
    console.log('Somewhere, someone said hello.');
})

emtr.on('greet', function(){
    console.log('A greeting occur.');
})

emtr.emit('greet');