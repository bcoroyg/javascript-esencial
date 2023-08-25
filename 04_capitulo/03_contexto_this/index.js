function Person(firstName, lastName, height) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.height = height
}

// Cannot read properties of undefined (reading 'greet')
// Solucion: Los prototipos deben ser llamados despues de ser definidas
// peter.greet();


// Saludar - Greet
Person.prototype.greet = function(){
  console.log(`Hola, me llamo ${this.firstName} ${this.lastName}`)
}

// Alto - Tall
Person.prototype.tall = function(){
  // Al utilizar Funcion Anonima 'this' tiene los valores del objeto
  console.log(this)
  if (this.height > 1.8){
    console.log(`${this.firstName}, Es alto(a)`)
  }
}

/* Person.prototype.tall = () => {
  // Al utilizar arrow function 'this' tiene el valor de window
  console.log(this)
  return this.height > 1.8
} */


var peter = new Person("Peter", "Iglesia", 1.7);
var maria = new Person("Mary", "Luna", 1.9);

peter.greet();
maria.greet();
console.log(maria.tall())
console.log(peter.tall())