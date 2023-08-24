var person1 = {
  id: 1,
  firstName: "Mair",
  lastName: "Iglesia",
  height: 1.32,
  numberOfBooks: 2,
};
var person2 = {
  id: 2,
  firstName: "Ruy",
  lastName: "Batalini",
  height: 1.14,
  numberOfBooks: 6,
};
var person3 = {
  id: 3,
  firstName: "Nicholle",
  lastName: "Caseri",
  height: 1.48,
  numberOfBooks: 24,
};
var person4 = {
  id: 4,
  firstName: "Ruben",
  lastName: "Cazin",
  height: 1.32,
  numberOfBooks: 34,
};
var person5 = {
  id: 5,
  firstName: "Dieter",
  lastName: "Origin",
  height: 1.27,
  numberOfBooks: 12,
};
var person6 = {
  id: 6,
  firstName: "Briana",
  lastName: "Burroughes",
  height: 1.52,
  numberOfBooks: 5,
};
var person7 = {
  id: 7,
  firstName: "Bobby",
  lastName: "Cargo",
  height: 1.6,
  numberOfBooks: 3,
};
var person8 = {
  id: 8,
  firstName: "Nancy",
  lastName: "Kingswold",
  height: 1.84,
  numberOfBooks: 9,
};
var person9 = {
  id: 9,
  firstName: "Ryley",
  lastName: "Chaston",
  height: 1.13,
  numberOfBooks: 7,
};
var person10 = {
  id: 10,
  firstName: "Monica",
  lastName: "Brisley",
  height: 1.8,
  numberOfBooks: 6,
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

var heightToCMS = (person) => ({
  ...person,
  height: person.height * 100,
});

var peopleCMS = people.map(heightToCMS);

var acum = 0;

for (var i = 0; i < people.length; i++) {
  acum = acum + people[i].numberOfBooks;
}

console.log(`En total todos tienen ${acum} libros.`);


const reducer = (acum, { numberOfBooks }) =>  acum + numberOfBooks

var acum_initial = 0

var totalBooks = people.reduce(reducer, acum_initial)
console.log(`En total todos tienen ${totalBooks} libros.`);