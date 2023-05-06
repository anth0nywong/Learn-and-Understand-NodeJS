function Greetr() {
    this.greeting = 'Hello World!';
    this.greet = function(){
        console.log(this.greeting + " - 3");
    }
}

module.exports = Greetr;