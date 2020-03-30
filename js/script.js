const P = new Pokedex.Pokedex();


function readValue(){
  var poke_dex = document.getElementById("Pokemon").value.toLowerCase(); 
  P.getPokemonByName(poke_dex)
  .then(res => {
    //om det blir rätt körs denna kod:
    console.log(res);
    document.getElementById("pokemon_name").innerHTML = res.name;
    document.getElementById(
      "pokemon_sprite").innerHTML = `<img src="${res.sprites.front_default}"/>`;
    document.getElementById("moves").innerHTML = "<b> Moves </b> <br>";
    for(var i = 0; i < res.moves.length; i++){
      document.getElementById("moves").innerHTML += res.moves[i].move.name + "<br>";
    }
    document.getElementById("stats").innerHTML = "<b> Stats </b> <br>";
    for(var i = 0; i < res.stats.length; i++){
      document.getElementById("stats").innerHTML += res.stats[i].stat.name + ": " + res.stats[i].base_stat + "<br>";
    }
    document.getElementById("types").innerHTML = "<b> Types </b> <br>";
    for(var i = 0; i < res.types.length; i++){
      document.getElementById("types").innerHTML += res.types[i].type.name + "<br>";
    }
  })

  
  .catch(err => {
    //om det blir fel körs denna kod:
    console.log(err);
    document.getElementById("pokemon_name").innerHTML =
      "No pokemon by that name";
  });
}


