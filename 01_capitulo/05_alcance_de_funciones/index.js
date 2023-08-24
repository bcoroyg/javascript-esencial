var firstName = "Luis", lastName = "Perez", age = 28;

function printFirstNameUpperCase() {
  firstName = firstName.toUpperCase();
  console.log(firstName)
}

// printFirstNameUpperCase() 
console.log(firstName) // LUIS


// Evitar modificar la varible global
function printFirstNameUpperCaseTwo(firstName) {
  firstName = firstName.toUpperCase();
  console.log(firstName)
}

printFirstNameUpperCaseTwo(firstName) 
console.log(firstName)


/**
 * firstName es global ya que se puede acceder con
 * window.firstName
 * 
 * SIDE_EFFECTS ⇒ son un término amplio, pero básicamente significa 
 * modificar cosas fuera del alcance de esa función inmediata.
 */