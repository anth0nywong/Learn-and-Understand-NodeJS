var firstname = 'Jane';

(//Make an Expression
    
function(lastname){
    var firstname = 'John';
    console.log(firstname);
    //scope of John ends here
}() //Invoke function
);

console.log(firstname);