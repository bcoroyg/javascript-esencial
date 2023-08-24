var person = {
  firstName: "John",
  lastName: "Smith",
  age: 11,
  engineer: true,
  cook: false,
  singer: false,
  dj: false,
  guitarist: false,
  drone: true,
};

function printProfessions(person) {
  // `${value}` ⇒ Template String
  console.log(`${person.firstName} es: `);

  // Primera forma de comparación true
  /* if (person.enginner === true) {
        console.log('Ingeniero')
    } */

  // Segunda forma de comparación true
  if (person.engineer) {
    console.log("Ingeniero");
  } else {
    console.log("No es Ingeniero");
  }

  if (person.singer) {
    console.log("Cantante");
  } else {
    console.log("No es Cantante");
  }

  if (person.cook) {
    console.log("Cocinero");
  } else {
    console.log("No es Cocinero");
  }

  if (person.dj) {
    console.log("DJ");
  } else {
    console.log("No es DJ");
  }

  if (person.guitarist) {
    console.log("Guitarrista");
  } else {
    console.log("No es guitarrista");
  }

  if (person.drone) {
    console.log("Piloto de drone");
  } else {
    console.log("No es piloto de drone");
  }
}

/**
 * MAGIC NUMBER es un conjunto de bytes que indica 
 * inequívocamente el tipo de archivo que estamos analizando.
 */

const AGE_OLDER = 18

function olderAge(person) {
  return person.age >= AGE_OLDER
}

function printOlderAge(person) {
  if (olderAge(person)) {
    console.log(`${person.firstName} es mayor de edad.`);
  } else {
    console.log(`${person.firstName} es menor de edad.`);
  }
}

printOlderAge(person);