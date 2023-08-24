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

function printFirstNameUpperCase(person) {
  // var nombre = person.firstName
  var { firstName } = person;
  console.log(firstName.toUpperCase())
}

printFirstNameUpperCase(personOne) 



function printFirstNameAndAge(person) {
  // var nombre = person.firstName
  var { firstName, age } = person;
  console.log(`Hola, me llamo ${firstName} y tengo ${age} años.`)
}

printFirstNameAndAge(personOne)
printFirstNameAndAge(personTwo)
