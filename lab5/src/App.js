import React, { useState } from 'react';
import "./App.css";
import axios from 'axios';

const App = () => {
  //so I can see in the console the api is working
  const [pokemon, setPokemon] = useState("pikachu");
  //empty array
  const [pokemonData, setPokemonData] = useState([]);
  //empty string
  const [pokemonType, setPokemonType] = useState("");

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };

  const handleSubmit= (e) => {
    e.preventDefault();
    getPokemon();
  };

  const getPokemon = async () => {
    const toArray = [];
    try {
      //fetching the url
      //${pokemon} gathers an individual pokemon that is searched for
      const url =`https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      //setting the actual pokemon data
      setPokemonData(toArray); //catches any errors and logs them in console
        }  catch (e) {
      console.log(e)
    }
  };
  console.log(pokemonData);

 //prevent default so it doesn't reload the page
 //to lower case so if user inputs with a capitol letter like Pikachu, using for validation purposes
const handleChange = (e) =>{
  setPokemon(e.target.value.toLoweCase());
};

const handleSubmit = (e) => {
  e.preventDefault();
  getPokemon();
};


  return(
    //text area rather than a button to enter information
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          
          <input type="text" 
          onChange={handleChange} 
          placeholder="Enter Pokemon"/> 
        </label>
      </form>
      {pokemonData.map((data) => {
        return(

        )
      })}

    </div>
  );
};

export default App;
