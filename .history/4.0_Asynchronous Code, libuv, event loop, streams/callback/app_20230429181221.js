function greet(callback){
    console.log('Hello');
    callback();
}

greet(function(){
    console.log('The callback was invoke!');
});

greet(function(){
    console.log('Second callback was invoke!');
});