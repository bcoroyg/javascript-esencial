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

// Incrementar Peso
const gainWeight = (person) => person.weight += INCREASE_WEIGHT;

// Disminuir peso
const decreaseWeight = (person) => person.weight -= REDUCE_WEIGHT;


for (var i = 1; i <= DAYS_YEAR; i++) {
  var random = Math.random()

  if (random < 0.25){
    // Aumenta de peso.
    gainWeight(person)
  } else if (random < 0.5){
    // Adelgazar.
    decreaseWeight(person)
  }
}

console.log(`Al final del anio ${person.firstName} pesa ${person.weight.toFixed(1)}kg.`)

