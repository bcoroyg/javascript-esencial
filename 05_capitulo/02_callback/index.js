const API_URL = `https://swapi.dev/api/`;
const PEOPLE_URL = "people/:id";

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;
const opts = { crossDomain: true };

const onPepleResponse = function (person) {
  // console.log(arguments)
  console.log(arguments);
  console.log(person);
  console.log(person.name);
};

$.get(lukeUrl, opts, onPepleResponse);
