// inserting a value INTO a function
// possible because functions are objects!

function greet(){
  console.log('hi');
}

greet.language = 'english';

greet()

console.log(greet.language);
console.log(greet);
