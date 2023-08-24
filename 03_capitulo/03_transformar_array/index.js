var person1 = {
  id: 1,
  firstName: "Mair",
  lastName: "Iglesia",
  height: 1.32,
};
var person2 = {
  id: 2,
  firstName: "Ruy",
  lastName: "Batalini",
  height: 1.14,
};
var person3 = {
  id: 3,
  firstName: "Nicholle",
  lastName: "Caseri",
  height: 1.48,
};
var person4 = {
  id: 4,
  firstName: "Ruben",
  lastName: "Cazin",
  height: 1.32,
};
var person5 = {
  id: 5,
  firstName: "Dieter",
  lastName: "Origin",
  height: 1.27,
};
var person6 = {
  id: 6,
  firstName: "Briana",
  lastName: "Burroughes",
  height: 1.52,
};
var person7 = {
  id: 7,
  firstName: "Bobby",
  lastName: "Cargo",
  height: 1.6,
};
var person8 = {
  id: 8,
  firstName: "Nancy",
  lastName: "Kingswold",
  height: 1.84,
};
var person9 = {
  id: 9,
  firstName: "Ryley",
  lastName: "Chaston",
  height: 1.13,
};
var person10 = {
  id: 10,
  firstName: "Monica",
  lastName: "Brisley",
  height: 1.8,
};

var people = [
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  person7,
  person8,
  person9,
  person10,
];

// Modifica el array original
/* var heightToCMS = (person) => {
  person.height *= 100;
  person.height = person.height.toFixed(0)
  return person
} */

// Realiza una copia de los datos, si afectar el array original
// Primera forma
/* var heightToCMS = (person) => {
  return {
    ...person,
    height: (person.height * 100).toFixed(0)
  }
} */

// Segunda Forma
var heightToCMS = (person) => ({
    ...person,
    height: person.height * 100
})

var peopleCMS = people.map(heightToCMS);
console.log(peopleCMS);

console.log(people[0])
console.log(peopleCMS[0])