const API_URL = `https://swapi.dev/api/`;
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(url, opts, function (person) {
    console.log(`Hola, yo soy ${person.name}`);

    if(callback){
      callback()
    }
  });
}

// CALLBACK HELL
/*
 se refiere a la estructura del código que aparece cuando tienes llamadas asíncronas, 
 implementadas mediante callbacks, que dependen unas de otras
 */

obtenerPersonaje(1, function () {
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3, function () {
      obtenerPersonaje(4, function () {
        obtenerPersonaje(5, function () {
          obtenerPersonaje(6, function () {
            obtenerPersonaje(7);
          });
        });
      });
    });
  });
});

