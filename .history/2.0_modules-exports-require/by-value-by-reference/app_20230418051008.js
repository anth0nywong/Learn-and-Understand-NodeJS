//by value

function change(b){
    b = 2
}

var a = 1;
change(a);
// a value doesn't change
console.log(a);

//by reference
function changeObj(d){
    d.prop1 = function (){};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
// changed properties of c
console.log(c);