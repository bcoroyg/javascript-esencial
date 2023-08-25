class Person {
  constructor(firstName, lastName, height) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.height = height;
  }

  // Saludar - Greet
  greet() {
    console.log(`Hola, me llamo ${this.firstName} ${this.lastName}`);
  };

  // Alto - Tall
  tall() {
    // Al utilizar Funcion Anonima 'this' tiene los valores del objeto
    console.log(this);
    if (this.height > 1.8) {
      console.log(`${this.firstName}, Es alto(a)`);
    }
  };
}

class Developer extends Person {
  // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
  constructor(firstName, lastName, height) {
    super(firstName, lastName, height);
  }

  greet() {
    console.log(
      `Hola, me llamo ${this.firstName} ${this.lastName} y soy desarrollador`
    );
  };
}

var peter = new Developer("Peter", "Iglesia", 1.7);
var maria = new Person("Mary", "Luna", 1.9);

peter.greet();
maria.greet();
maria.tall();
peter.tall();