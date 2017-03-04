// **this is NOT preferred way to create an object.

var person = new Object();

person['firstname'] = 'Bob';
person['lastname'] = 'Smith';

var firstNameProperty = 'firstname';

console.log(person);
// these both return the same result: 'Bob'
console.log(person[firstNameProperty]);
console.log(person.firstname);

person.address = new Object();
person.address.street = "100 Main St.";
person.address.city = "Ferndale";
person.address.state = "WA";

console.log(person.address);
console.log(person.address.city);
console.log(person['address']['city']);

// Object 'literal' is a create object method that uses just {}
// This does the same thing as above and creates a new object.



var person = {};
console.log(person);
//returns the empty object '{}'

var personNew = {firstname: 'Bob', lastname: 'smith'};
console.log(personNew);
// { firstname: 'Bob', lastname: 'smith' }


// the format below will output the same thing
var personB = {};
personB.firstname = 'fred';
personB.lastname = 'smith';

console.log(personB);

// And the cleanest 'whitespace friendly version with embedded object'

var whitespacePerson = {
  firstname: 'Bob',
  lastname: 'Smith',
  // the address object is embedded in the main object
  address: {
    city: 'Ferndale',
    state: 'WA',
  }
}

console.log(whitespacePerson);

var the_Bob_Object = {
  firstname: 'Bob',
  lastname: 'Smith',
  // the address object is embedded in the main object
  address: {
    city: 'Ferndale',
    state: 'WA',
  }
};

function greet(person){
  console.log('Hi ' + person.firstname);
}

greet(the_Bob_Object);

// the ORANGE variable passed is not name specific.
function greet_object(thisCanBeAnyName){
  console.log('Hi ' + thisCanBeAnyName.firstname);
}

greet_object(the_Bob_Object);

// you can also build an object on the fly inside the call of the function
// call the greet function and pass it an object inside the params
greet_object({ firstname: 'Ted', lastname: 'Smith',})

// this also works with whitespace
greet_object({
  firstname: 'Ted',
  lastname: 'Smith',
})
