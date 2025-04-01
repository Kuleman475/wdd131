const baseURL = "https://pokeapi.co/api/v2/";
let pokemonArray = [];
if(document.querySelector(".home")){
  randomSpotlight();
}
else {
  pokemon();
}

const regionRanges = {
  all: { start: 1, end: 1025 },
  kanto: { start: 1, end: 151 },
  johto: { start: 152, end: 251 },
  hoenn: { start: 252, end: 386 },
  sinnoh: { start: 387, end: 493 },
  unova: { start: 494, end: 649 },
  kalos: { start: 650, end: 721 },
  alola: { start: 722, end: 809 },
  galar: { start: 810, end: 908 },
  paldea: { start: 909, end: 1025 }
};

console.log(regionRanges);

const typeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#f6433d",
  poison: "#cd4ecb",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#8769ae",
  dragon: "#8252fb",
  dark: "#a07d65",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};


async function randomSpotlight() {
    const randomNum = Math.floor(Math.random() * 1025) + 1;
    let mon = await getPokemonByPokedexNumber(randomNum);
            let container = document.querySelector(".spotlight");
        let template = spotlightTemplate(mon);
       renderPokemonTemplateHome(template, container);
        }

async function pokemon(){

  for(let p = 1; p <= 1025; p++) {
    let pokemonNum = getPokemonByPokedexNumber(p);
    pokemonArray.push(pokemonNum);
  }

Promise.all(pokemonArray).then( results => {
  results.map((result) => {
      let container = document.querySelector(".list");
  let template = pokemonTemplate(result);
 renderPokemonTemplate(template, container);
  })
})
}


function convertToJson(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Bad Response");
    }
  }

 async function getPokemonByPokedexNumber(id) {
  const response = await fetch(baseURL + `pokemon/${id}`);
  const pokemon = await convertToJson(response);
   return pokemon;
}


function capitalizeFirstLetter(letter) {
    return letter.charAt(0).toUpperCase() + letter.slice(1);
  }

function types(type) {
    if (type.types.length == 2){
        return  "/ " + type.types[1].type.name;
    }
    else {
        return "";
    }
}

function ablilities(ability) {
    console.log(ability.abilities.length, "POP")
    if (ability.abilities.length >= 2){
        return  "/ " + ability.abilities[1].ability.name;
    }
    else {
        return "";
    }
}

function regionTemplate() {
  const reg = document.querySelector(".region");

  return `<h2>${reg}</h2>`
}

 function pokemonTemplate(pokemon) {

    const primaryType = pokemon.types[0].type.name; // Get the first type
    const backgroundColor = typeColors[primaryType] || "#D3D3D3"; // Default to gray if no match

   return `<section class="pokemon" style="background-color: ${backgroundColor}">
   <img id="pokemonImage" src="${getImage(pokemon)}" alt="${pokemon.name}" loading="lazy">
   <h3 id="pokemonName"><strong>Name: </strong><br>${capitalizeFirstLetter(pokemon.name)}</h3>
   <p id="pokemonNumber"><strong>Dex Number: </strong>${pokemon.id}</p>
   <p id="pokemonType"><strong>Type: </strong><br>${capitalizeFirstLetter(pokemon.types[0].type.name)} ${types(pokemon)}</p> 
   </section>`;
}

function getImage(pokemon){
  if(pokemon.sprites.other.home.front_default == null){
    return`${pokemon.sprites.front_default}`;
  }
 else { return `${pokemon.sprites.other.home.front_default}` }
}

function renderPokemonTemplate(template, container) {
  const card = document.createElement("div");
  card.innerHTML = template;
  container.appendChild(card);
}

function renderPokemonTemplateHome(template, container) {
  const card = document.createElement("div");
  card.innerHTML = template;
  container.appendChild(card);
}

function spotlightTemplate(pokemon) {
    console.log(pokemon)
   return `<div class="pokemonSpot">
    <img id="pokemonImage" src="${getImage(pokemon)}" alt="${pokemon.name}" loading="lazy">
    <h3 id="pokemonName"><strong>Name:</strong> ${capitalizeFirstLetter(pokemon.name)}</h3>
    <p id="pokemonNumber"><strong>Dex Number:</strong> ${pokemon.id}</p>
    <p id="pokemonType"><strong>Type:</strong> ${capitalizeFirstLetter(pokemon.types[0].type.name)} ${types(pokemon)}</p> 
    <p id="pokemonDex"><strong>Abilities:</strong> ${pokemon.abilities[0].ability.name} ${ablilities(pokemon)}</p>
    <p><strong><u>Base Stats</u></strong></p> 
    <p id="hp"><strong>HP:</strong> ${pokemon.stats[0].base_stat}</p>
    <p id="attack"><strong>Attack:</strong> ${pokemon.stats[1].base_stat}</p>
    <p id="defence"><strong>Defence:</strong> ${pokemon.stats[2].base_stat}</p>
    <p id="specialAttack"><strong>Special Attack:</strong> ${pokemon.stats[3].base_stat}</p>
    <p id="specialDefence"><strong>Special Defence:</strong> ${pokemon.stats[4].base_stat}</p>
    <p id="speed"><strong>Speed:</strong> ${pokemon.stats[5].base_stat}</p>   
    <p id="total"><strong>Total:</strong> ${bst(pokemon)}</p>
    </div>`;
}

function bst(pkmn){
const stats = [pkmn.stats[0].base_stat, pkmn.stats[1].base_stat, pkmn.stats[2].base_stat, pkmn.stats[3].base_stat, pkmn.stats[4].base_stat, pkmn.stats[5].base_stat]

const total = stats.reduce((stat, num) => stat + num, 0);

return total;
}

const button = document.querySelector(".button");

if(button){
button.addEventListener("click", () => {
  document.querySelector(".spotlight").innerHTML = "";
  randomSpotlight();
});
}

const selectRegion = document.querySelector("#region-select")

if (selectRegion) {
  selectRegion.addEventListener("change", function () {
  const selectedRegion = this.value;
  document.querySelector(".region").innerHTML = `<h2>${capitalizeFirstLetter(selectRegion.value)} Pokémon</h2>`;
 
  Promise.all(pokemonArray).then(resolvedPokemon => {

    const filteredPokemon = resolvedPokemon.filter(pkmn => 
      pkmn.id >= regionRanges[selectedRegion].start && 
      pkmn.id <= regionRanges[selectedRegion].end
    );

    const container = document.querySelector(".list");
    container.innerHTML = "";
    
    filteredPokemon.forEach(pkmn => {
      let template = pokemonTemplate(pkmn);
      renderPokemonTemplate(template, container);
    }); 
});  
  });
}
