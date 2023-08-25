function Person(firstName, lastName, height) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.height = height
}

// Saludar - Greet
Person.prototype.greet = function(){
  console.log(`Hola, me llamo ${this.firstName} ${this.lastName}`)
}

// Alto - Tall
Person.prototype.tall = function(){
  if (this.height > 1.8){
    console.log(`${this.firstName}, Es alto(a)`)
  }
}

var peter = new Person("Peter", "Iglesia", 1.7);
console.log(peter);


var maria = new Person("Mary", "Luna", 1.9);
peter.greet();
maria.greet();
maria.tall();
