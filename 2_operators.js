var a = 3 + 4;
console.log(a);

// the above is same result as below

function add(a,b){

  console.log(a+b);
}

add(5,5)


// returns boolean statement
var b = 4>3;
console.log(b);

// order example

var c = 4 + 3 * 5;
console.log(c);

// associativity example
// "assignment" operator is R to L reading
// thus all values will be set to (4)
var a = 2, b=3, c=4;

a = b = c;

console.log(a);
console.log(b);
console.log(c);
