// Mutate the object instead of pointing it to a value
exports.greet = function(){
    console.log('Hello');
}
console.log(exports);
console.log(module.exports);