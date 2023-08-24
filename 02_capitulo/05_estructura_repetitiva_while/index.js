var person = {
  firstName: "John",
  lastName: "Smith",
  age: 11,
  weight: 75,
  engineer: true,
  cook: false,
  singer: false,
  dj: false,
  guitarist: false,
  drone: true,
};

console.log(`Al inicio del anio ${person.firstName} pesa ${person.weight}kg.`)

const INCREASE_WEIGHT = 0.2
const REDUCE_WEIGHT = 0.2
const DAYS_YEAR = 365
const META = person.weight - 3

// Incrementar Peso
const gainWeight = (person) => person.weight += INCREASE_WEIGHT;

// Disminuir peso
const decreaseWeight = (person) => person.weight -= REDUCE_WEIGHT;

// Come mucho
const eatsALot = () => Math.random() < 0.1

// Realiza deporte
const performsSports = () => Math.random() < 0.2

var days = 0

while (person.weight > META) {
  if (eatsALot()){
    // Aumenta de peso.
    gainWeight(person)
  } else if (performsSports()){
    // Adelgazar.
    decreaseWeight(person)
  }
  days += 1
}

console.log(`Pasaron ${days} días hasta que ${person.firstName} adelgazó 3kg.`)


