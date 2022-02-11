window.onload = (e) => getPokemon(e, 3);
let form = $(".form");

const getPokemon = (e, defaultValue) => {
  e.preventDefault();
  let input = $(".input").value;
  if (defaultValue) {
    input = defaultValue;
  }
  let url = `https://pokeapi.co/api/v2/pokemon/${input}`;
  const card = $(".card");
  card.style.display = "block";
  function getPokemonDetails() {
    fetch(
      url,
      function (response) {
        toggleLoaderDisplay();
        let img = createImg(
          response.sprites.other.home.front_default,
          "Movie Photo",
          ""
        );
        card.appendChild(img);
        const name = createElement("p", "", `name: ${response.forms[0].name}`);
        card.appendChild(name);
        let height = createElement("p", "", `height: ${response.height}`);
        card.appendChild(height);
        let weight = createElement("p", "", `weight: ${response.weight}`);
        card.appendChild(weight);
        let ability = createElement(
          "p",
          "",
          `ability: ${response.abilities[0].ability.name}`
        );
        card.appendChild(ability);
        let Move = createElement(
          "p",
          "",
          `Move: ${response.moves[0].move.name}`
        );
        card.appendChild(Move);
        let statsName = " ";
        for (let i = 0; i < response.stats.length; i++) {
          statsName += response.stats[i].stat.name + " ,";
        }
        stats = createElement("p", "", `stats: ${statsName}`);
        card.appendChild(stats);
        let type = createElement(
          "p",
          "",
          `type: ${response.types[0].type.name}`
        );
        card.appendChild(type);
      },
      ".card",
      input
    );
  }
  card.innerHTML = "";
  getPokemonDetails();
};

form.addEventListener("submit", getPokemon);
