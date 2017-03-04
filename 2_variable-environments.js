function b() {
  var myVar;
  console.log(myVar);
}

function a() {
  var myVar = 2;
  console.log(myVar);
  b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);


// THIS IS THE OUTPUT OF THE ABOVE CODE
// @md:~/Desktop/javascript/weird_parts_course$ node 2_variable-environments.js
// 1
// 2
// undefined
// 1
