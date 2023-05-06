let obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();