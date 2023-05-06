function Greetr() {
    this.greeting = 'Hello World!';
    this.greet = function(){
        console.log(this.greeting + " - 4");
    }
}

module.exports = Greetr;