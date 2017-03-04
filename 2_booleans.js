var a;

if (a) {
  console.log('something is there');
}
// the above converts to false and returns nothing
var a = 1;

if (a) {
  // this code says "If a is SOMETHING?" ** run the code block
  console.log('something is there');
}
// this time a is a value and returns true and fires
// the console line of code.

Boolean(undefined)
// returns 'false'

Boolean(null)
// returns 'false'

Boolean("")
// returns 'false'

/*
if (a);
basically says:
if something is there, then a is true and will returns
if nothing or if a returns false then do nothing.
*/
