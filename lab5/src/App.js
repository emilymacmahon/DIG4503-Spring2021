import React, { useState } from 'react';
import "./App.css";
import axios from 'axios';

const App = () => {
  const [pokemon, setPokemon]= useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("")

  const getPokemon = asynch () => {
    const toArray[];
    try{
      //fetching the url
      const url ='https://pokeapi.co/api/v2/pokemon/${pokemon}'
    } 
    //catches any errors and logs them in console
    catch (e) {
      console.log(e)
    }
  }


  return(
    <div className="App">
      <h1>Hello</h1>

    </div>
  );
};

export default App;
