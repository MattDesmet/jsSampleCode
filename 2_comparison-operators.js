console.log(1 < 2 < 3); // returns true

console.log(3 < 2 < 1); // also returns true!?
// the above turn the first argument of 3<2 = false
//thus next is (false < 1) = FALSE

console.log (Number('1'));
console.log (Number(false));
console.log (Number(true));
//returns 1, 0, 1
// "1" is coerced to int 1
// false is coerced to 0
// true is coerced to integer 1

// thus the above comparison is 0 < 1 which is true

/*
Number(undefined);
does not coerce.  It returns NaN = not a number

Number(null):
returns: 0
*/

var a = 0;
var b = false;

if (a===b){
  console.log('those values are equal')
}
else {
  console.log('those values are not equal');
}
