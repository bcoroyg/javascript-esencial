class Person {
  constructor(firstName, lastName, height) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.height = height;
  }

  // Saludar - Greet
  greet(fn) {
    const { firstName, lastName } = this
    console.log(`Hola, me llamo ${firstName} ${lastName}`);
    if (fn) {
      fn(firstName, lastName)
    }
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

  greet(fn) {
    const { firstName, lastName } = this;
    console.log(
      `Hola, me llamo ${firstName} ${lastName} y soy desarrollador`
    );
    if (fn) {
      fn(firstName, lastName, true)
    }
  };
}

function responderSaludo(firstName, lastName, isDev) {
  console.log(`Buen día ${firstName} ${lastName}`)
  if(isDev){
    console.log(`Ah mirá, ho sabía que eras desarrollador/a`)
  }
}


var peter = new Developer("Peter", "Iglesia", 1.7, true);
var maria = new Person("Mary", "Luna", 1.9, true);

peter.greet(responderSaludo);
maria.greet();