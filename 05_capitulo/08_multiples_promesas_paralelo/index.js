const API_URL = `https://swapi.dev/api/`;
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

    $.get(url, opts, function (data) {
      resolve(data);
    }).fail(() => {
      reject(id);
    });
  });
}

function onError(id) {
  console.log(
    `Sucendio un error. No se puedo obtener el personaje con id ${id}`
  );
}

var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* var promesas = ids.map(function(id) {
  return obtenerPersonaje(id)
}) */

var promesas = ids.map((id) => obtenerPersonaje(id));

Promise.all(promesas)
  .then((personaje) => {
    console.log(personaje);
  })
  .catch(onError);