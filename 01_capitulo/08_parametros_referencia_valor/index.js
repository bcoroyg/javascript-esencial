var personOne = {
  firstName: 'John',
  lastName: 'Smith',
  age: 21,
}

var personTwo = {
  firstName: 'Peter',
  lastName: 'Susnisky',
  age: 25,
}

function printFirstNameUpperCaseDestructuring(person) {
  // var nombre = person.firstName
  var { firstName } = person;
  console.log(firstName.toUpperCase())
}

printFirstNameUpperCaseDestructuring(personOne) 

// Modifica los valores del objecto
/* function birthday(person) {
  person.age += 1
} */

/* function birthday(age) {
  age += 1
} */


function birthday(person) {
  return {
    ...person,
    age: person.age + 1
  }
}

console.log(birthday(personOne))
console.log(personOne)