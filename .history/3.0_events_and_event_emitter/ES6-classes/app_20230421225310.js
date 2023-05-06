'use strict';

class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function(){
    console.log('Hello, ' + this.firstname + " " + this.lastname);
}

let john = new Person('John', 'Doe');
john.greet();

let jane = new Person('Jane', 'Doe');
jane.greet();