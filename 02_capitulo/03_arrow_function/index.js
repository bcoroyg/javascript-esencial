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

/**
 * MAGIC NUMBER es un conjunto de bytes que indica 
 * inequívocamente el tipo de archivo que estamos analizando.
 */

const AGE_OLDER = 18

/**
 * FUNCION ANONIMA: Es cuando la funcion no tiene definida un nombre
 * Ejemplo:
 * - var olderAge = function (person)
 */

/* var olderAge = function (person) {
  return person.age >= AGE_OLDER
} */

/**
 * ARROW FUNCTION:
 * - Ejemplo:
 *  * const olderAge = (person) => {
 */

/* const olderAge = (person) => {
  return person.age >= AGE_OLDER
} */

// const olderAge = person => person.age >= AGE_OLDER;

const olderAge = ({ age }) => age >= AGE_OLDER;

function printOlderAge(person) {
  if (olderAge(person)) {
    console.log(`${person.firstName} es mayor de edad.`);
  } else {
    console.log(`${person.firstName} es menor de edad.`);
  }
}

const printOlderAgeArrow = person => olderAge(person) ? console.log(`${person.firstName} es mayor de edad.`): console.log(`${person.firstName} es menor de edad.`);

// Permitir acceso
function provideAccess(person) {
  if (!olderAge(person)) {
    console.log('ACCESO DENEGADO.')
  }
}

printOlderAge(person);
provideAccess(person);
printOlderAgeArrow(person)