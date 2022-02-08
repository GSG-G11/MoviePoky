let form = $(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  input = $(".input").value;
  console.log(input);
  let url = `https://pokeapi.co/api/v2/pokemon/${input}`;
  const card = $(".card");
  card.style.display = "block";
  function getPokemonDetails() {
    fetch(url, function (response) {
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
      let Move = createElement("p", "", `Move: ${response.moves[0].move.name}`);
      card.appendChild(Move);

      let stats = createElement(
        "p",
        "",
        `stats: ${response.stats[0].stat.name}`
      );
      card.appendChild(stats);
      let type = createElement("p", "", `type: ${response.types[0].type.name}`);
      card.appendChild(type);
    });
  }
  card.innerHTML = "";
  getPokemonDetails();
});
