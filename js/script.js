const P = new Pokedex.Pokedex();


function readValue(){
  var poke_dex = document.getElementById("Pokemon").value;
  P.getPokemonByName(poke_dex)
  .then(res => {
    //om det blir rätt körs denna kod:
    console.log(res);
    document.getElementById("pokemon_name").innerHTML = res.name;
    document.getElementById(
      "pokemon_sprite"
    ).innerHTML = `<img src="${res.sprites.front_default}"/>`;
  })

  
  .catch(err => {
    //om det blir fel körs denna kod:
    console.log(err);
    document.getElementById("pokemon_name").innerHTML =
      "No pokemon by that name";
  });
}

