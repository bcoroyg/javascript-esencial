var x = 4,
  y = "4";

console.log(x);

// Igual
console.log(x == y);

// Estrictamente igual ⇒ Compara tambien el tipo de dato.
console.log(x === y);

var personOne = {
  firstName: 'John',
  lastName: 'Smith',
  age: 21,
}

var personTwo = {
  firstName: 'john',
  lastName: 'smith',
  age: '21',
}



console.log(personOne == personTwo)
console.log(personOne === personTwo)

// other person apunta al mismo lugar de memoria
var otherPerson = personOne
console.log(personOne === otherPerson)

console.log(personOne)
console.log(otherPerson)

personOne.firstName = 'Peter'
console.log(personOne)
console.log(otherPerson)

otherPerson.firstName = 'John'
console.log(personOne)
console.log(otherPerson)


// Objeto literal
var otherPersonTwo = {
  ...personOne,
}
// otherPersonTwo ⇒ Ocupa otro espacion de memoria
console.log(personOne === otherPersonTwo)

otherPersonTwo.firstName = 'Peter'
console.log(personOne)
console.log(otherPersonTwo)