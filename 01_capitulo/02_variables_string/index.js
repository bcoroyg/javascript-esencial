var firstName = "Luis",
  lastName = "Perez",
  age = 28;

var firstNameUppercase = firstName.toUpperCase();
console.log(firstNameUppercase);

var lastNameLowercase = lastName.toLowerCase();
console.log(lastNameLowercase);

var firstLetterOfTheFirstName = firstName.charAt(0);
console.log(firstLetterOfTheFirstName);

var numberOfLettersOfTheFirstName = firstName.length;
console.log(numberOfLettersOfTheFirstName);

firstName = "Carlos";

numberOfLettersOfTheFirstName = firstName.length;
console.log(numberOfLettersOfTheFirstName);

var fullName = firstName + " " + lastName;
console.log(fullName);

// Interpolación de texto
fullName = `${firstName} ${lastName.toUpperCase()}`;
console.log(fullName);

var str = firstName.charAt(1) + firstName.charAt(2);
console.log(str);

//  SUBSTR ⇒ Deprecado
str = firstName.substr(1, 2);
console.log(str);

// Ultimo caracter substr
console.log(firstName.substr(-1));

//  SUBSTRING
str = firstName.substring(1, 3);
console.log(str);

// Ultimo caracter substring
console.log(firstName.substring(firstName.length-1));
