function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function () {};

  fn.prototype = prototipoPadre.prototype;
  prototipoHijo.prototype = new fn();
  prototipoHijo.prototype.contructor = prototipoHijo;
}

function Person(firstName, lastName, height) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.height = height;
}

// Saludar - Greet
Person.prototype.greet = function () {
  console.log(`Hola, me llamo ${this.firstName} ${this.lastName}`);
};

// Alto - Tall
Person.prototype.tall = function () {
  // Al utilizar Funcion Anonima 'this' tiene los valores del objeto
  console.log(this);
  if (this.height > 1.8) {
    console.log(`${this.firstName}, Es alto(a)`);
  }
};

function Developer(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

heredaDe(Developer, Person);

Developer.prototype.greet = function () {
  console.log(
    `Hola, me llamo ${this.firstName} ${this.lastName} y soy desarrollador`
  );
};

var peter = new Developer("Peter", "Iglesia", 1.7);
var maria = new Person("Mary", "Luna", 1.9);

peter.greet();
maria.greet();
maria.tall();
peter.tall();

console.log(Person.prototype)
console.log(Developer.prototype)