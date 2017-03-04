function b(){
  console.log(myVar);
}

function a(){
  var myVar = 2;
  b();
}

var myVar = 1;
a();

/*
the output of this will be '1'
first call is a
which sets var at 2
but then calls b which looks globally for myVar
globally myvar is 1
thus it logs '1'
*/

// however if we move b to INSIDE a, then we have changed
// the lexical environment of b.



function a(){
  function b(){
    console.log(myVar);
  }
  //if we commented out this var, then the function
  //reach outside the function for the global var value = 1
  var myVar = 2;
  b();
}

var myVar = 1;
a();

// with this setup, we can't actually call b() at the globally
// level because it is not scoped globally.

console.log(a());
