let obj = {
  greet: "Hello",
};

console.log(obj.greet);
console.log(obj["greet"]);

let prop = 'greet';
console.log(obj[prop]);

// functions and arrays
let arr = [];

arr.push(function(){
    console.log('Hello World 1');
})