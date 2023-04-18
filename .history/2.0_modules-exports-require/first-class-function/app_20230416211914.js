//function statement
function greet() {
    console.log('hi');
}

// function are first-class
function logGreeting(fn){
    fn();
}

// function expression
var greetMe = function() {
    console.log('Hi Tony');
}

// it's first-class
logGreeting(greetMe);