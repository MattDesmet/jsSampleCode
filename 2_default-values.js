function greet(name) {
  console.log('Hello '+ name);
}

greet('Matt');

//returns Hello Matt


function greet(name) {
  console.log('Hello '+ name);
}

greet();


function greet(name) {
  console.log('Hello ', name);
}

greet();

// returns Hello underfined as well

function greet(name) {
  name = name || '< Your name here >';
  console.log('Hello ', name);
}

greet();

// the OR operator will return the first TRUE value from L to R
// "" || "hello"
// returns: Hello
// because hello is true and empty string "" is false.
