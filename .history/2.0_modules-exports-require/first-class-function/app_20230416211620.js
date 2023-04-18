//function statement
function greet() {
    console.log('hi');
}

// function are first-class
function logGreeting(fn){
    fn();
}

logGreeting(greet);