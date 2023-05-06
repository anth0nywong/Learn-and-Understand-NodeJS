function greet(callback){
    console.log('Hello');
    callback();
}

greet(function(){
    console.log('The callback was invoke!');
});