var firstName = "Luis",
  lastName = "Perez",
  age = 28;

console.log(age)

// Incrementar en uno
age = age + 1
console.log(age)

age += 1
console.log(age)

// Post incremento
age++
console.log(age)

// Peso
var weight = 73

// ------------------------
weight = weight - 2
console.log(weight)

weight -= 2
console.log(weight)
// ------------------------

// ------------------------
var sandwich = 1
weight = weight + sandwich
console.log(weight)

console.log(weight += sandwich)
// ------------------------

// ------------------------
var playSoccer = 3
weight = weight - playSoccer
console.log(weight)

console.log(weight -= playSoccer)
// ------------------------

// Precio de vino
var priceOfWine = 200.3
var total = priceOfWine * 3
console.log(total)

total = priceOfWine * 100 * 3 / 100
console.log(total)

total = Math.round(priceOfWine * 100 * 3) / 100
console.log(total)

var totalStr = total.toFixed(3)
console.log(totalStr)

var total2 = parseFloat(total)
console.log(total2)



var pizza = 8
var person = 2

// Cantidad de porciones por persona
var numberOfServingsPerPerson = pizza / person
console.log(numberOfServingsPerPerson)