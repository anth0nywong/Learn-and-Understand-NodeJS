var person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function() {
        console.log('Hello, I am ' + this.firstname + ' ' + this.lastname)
    }
};

person.greet();

console.log(person['greet']);