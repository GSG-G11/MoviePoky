const input = "ditto";
let url = `https://pokeapi.co/api/v2/pokemon/${input}`;
function request(url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        cb(JSON.parse(xhr.responseText));
      } else {
        cb("Error " + url + " " + xhr.responseText);
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
const getPokemonData = () => {
  request(url, function (response) {});
};
getPokemonData();

function getPokemonDetails() {
  const card = document.querySelector(".card");
  let img = document.createElement("img");
  let name = document.createElement("p");
  let height = document.createElement("p");
  let weight = document.createElement("p");
  let ability = document.createElement("p");
  let Move = document.createElement("p");
  let stats = document.createElement("p");
  let type = document.createElement("p");
  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(height);
  card.appendChild(weight);
  card.appendChild(ability);
  card.appendChild(Move);
  card.appendChild(stats);
  card.appendChild(type);

  request(url, function (response) {
    img.src = response.sprites.other.home.front_default;
    name.textContent = `name: ${response.forms[0].name}`;
    height.textContent = `height: ${response.height}`;
    weight.textContent = `weight: ${response.weight}`;
    ability.textContent = `ability: ${response.abilities[0].ability.name}`;
    Move.textContent = `Move: ${response.moves[0].move.name}`;
    stats.textContent = `stats: ${response.stats[0].stat.name}`;
    type.textContent = `type: ${response.types[0].type.name}`;
  });
}
getPokemonDetails();
