// by value
var a = 3;
var b;

b = a;

console.log(b);

// returns: 3

// // swap this order
// var a = 3;
// var b;
//
// a = b;
//
// // however due to order of execution, this returns: undefined
// console.log(b);

// NOW set:

a = 2;

console.log(a);
console.log(b);
// now a = 2 and b still = 3

// by reference ex.

var c = { greeting: 'hi'};
var d;

d = c;

c.greeting = 'hello'; // this mutates the object

console.log(c);
console.log(d);

// by reference (even as params)
function changeGreeting(obj) {
  obj.greeting = 'Hola';  // mutating the object
}

changeGreeting(d);
console.log(c);
console.log(d);

// the equals operator sets up new memory space (new address)

c = {greeting: 'howdy'};
// c has now been set to a NEW location in memory space
// therefore c & d are no longer pointing to the same object
console.log(c);
console.log(d);
// thus this returns c as the new string and d as the same.
