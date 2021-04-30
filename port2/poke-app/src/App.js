import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [pokemonName, setPokemonName] =useState("");
  const [pokemonChosen, setPokemonChosen] =useState(false);
  const [pokemon, setPokemon] = useState({
    name: pokemonName,
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  function refreshPage() {
    window.location.reload(false);
  }

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        //state that contains items I want users to be able to see when they search for a pokemon
        setPokemon ({
          name: pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          //poke stats in an array, i only want to show a few of them, so I am selecting the ones from the array in the api to show
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          //types also kept in an array
          type: response.data.types[0].type.name,
        });
        //used boolean so that before a poke is chosen it will render a message saying one needs to be selected
        setPokemonChosen(true);
      }
    );
  }
  return (
    <div className="App">
      <div className="TitleSection">
        <h2>Poke Finder</h2>
        <input type="text"
          onChange={(e) => {
            setPokemonName(e.target.value);
          }} />
        <button onClick={searchPokemon}> Find a Poke</button>
      </div>
      <div className="Display"> 
      {!pokemonChosen ? ( //if poke not chosen, ask user to select one, other wise display the info
        <h1> Please Choose a Poke</h1>
      ) : (
        <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.img}/>
          <h3> Species: {pokemon.species} </h3>
          <h3> Type: {pokemon.type} </h3>
          <h4>Hp: {pokemon.hp}</h4>
          <h4>Attack: {pokemon.attack}</h4>
          <h4>Defense: {pokemon.defense}</h4>
        </>
      )}
      
      <div>
      <button className="Reload" onClick={refreshPage}>Click to reload!</button>
      </div>
      

      </div>
    </div>
  );
}

export default App;
