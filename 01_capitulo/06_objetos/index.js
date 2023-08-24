var personOne = {
  // [clave]:[valor]
  // [key]:[value]
  firstName: 'John',
  lastName: 'Smith',
  age: 21,
}

var personTwo = {
  firstName: 'Peter',
  lastName: 'Susnisky',
  age: 25,
}

function printFirstNameUpperCaseOne(firstName) {
  var firstName = firstName.toUpperCase();
  console.log(firstName)
}

function printFirstNameUpperCaseTwo(person) {
  // var firstName = person.firstName.toUpperCase();
  console.log(person.firstName.toUpperCase())
}

function printFirstNameUpperCaseThree({ firstName }) {
  // var firstName = person.firstName.toUpperCase();
  console.log(firstName.toUpperCase())
}

printFirstNameUpperCaseOne(personOne.firstName) 
printFirstNameUpperCaseOne(personTwo.firstName) 

printFirstNameUpperCaseTwo(personTwo) 

printFirstNameUpperCaseThree(personOne) 

printFirstNameUpperCaseThree({firstName: 'Peter'}) 

// ERRORES

// Cannot destructure property 'firstName' of 'undefined' as it is undefined.
// printFirstNameUpperCaseThree()

// Cannot read properties of undefined (reading 'toUpperCase')
// printFirstNameUpperCaseThree({})

// Cannot read properties of undefined (reading 'toUpperCase')
// printFirstNameUpperCaseThree({ lastName: 'Smith' })

