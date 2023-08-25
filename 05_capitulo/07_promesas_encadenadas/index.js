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

obtenerPersonaje(1)
  .then((personaje1) => {
    console.log(`El personaje es 1 ${personaje1.name}`);
    return obtenerPersonaje(2)
  }).then((personaje2) => {
    console.log(`El personaje es 2 ${personaje2.name}`);
    return obtenerPersonaje(3)
  }).then((personaje3) => {
    console.log(`El personaje es 3 ${personaje3.name}`);
    return obtenerPersonaje(4)
  }).then((personaje4) => {
    console.log(`El personaje es 4 ${personaje4.name}`);
    return obtenerPersonaje(5)
  }).then((personaje5) => {
    console.log(`El personaje es 5 ${personaje5.name}`);
    return obtenerPersonaje(6)
  }).then((personaje6) => {
    console.log(`El personaje es 6 ${personaje6.name}`);
    return obtenerPersonaje(7);
  }).then((personaje7) => {
    console.log(`El personaje es 7 ${personaje7.name}`);
  })
  .catch(onError);
