
(//Make an Expression
    
function(){
    var firstname = 'John';
    console.log(firstname);
    //scope of John ends here
}() //Invoke function
);

var firstname = 'Jane';
console.log(firstname);