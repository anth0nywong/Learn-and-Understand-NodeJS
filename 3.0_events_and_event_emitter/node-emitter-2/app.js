let Emitter = require('events');
let EventConfig = require('./config').events;

let emtr = new Emitter();

emtr.on(EventConfig.GREET, function(){
    console.log('Somewhere, someone said hello.');
})

emtr.on(EventConfig.GREET, function(){
    console.log('A greeting occur.');
})

emtr.emit(EventConfig.GREET);