//function statement
function greet() {
    console.log('hi');
}
greet();
// function are first-class
function logGreeting(fn){
    fn();
}
logGreeting(greet);
// function expression
var greetMe = function() {
    console.log('Hi Tony');
}
greetMe();

// it's first-class
logGreeting(function(){
    console.log('Hello Tony');
});