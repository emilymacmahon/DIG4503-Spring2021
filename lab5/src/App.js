import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  //so I can see if the api is working as i go
  const [pokemon, setPokemon] = useState("pikachu");
  //empty array
  const [pokemonData, setPokemonData] = useState([]);
  //empty string
  const [pokemonType, setPokemonType] = useState("");

  //to lower case used for validation so the search won't be case sensitive
  //prevent default so the page doesn't reload
  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  const getPokemon = async () => {
    const toArray = [];
    try {
      //fetching url
      //${pokemon} gtahers the individual poke that is entered
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      //setting the actual pokemon data
      setPokemonData(toArray);
    } catch (e) { //catches the errors an logs then to the console
      console.log(e);
    }
  };
  console.log(pokemonData);

  return (
    //text area rather than a button to accept information, submits upon user hitting enter
    <div className="App">
      <h1>Type Pokemon and hit enter key</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="enter pokemon name"
          />
        </label>
      </form>
      {/* <ul>{pokemonData}</ul> */}
      {/* <p>{[pokemonData]}</p> */}
      {pokemonData.map((data) => {
        return ( //math.round will be used bc poke api used a weird unit of measure, so there is a conversion used
          <div className="container">
            <img src={data.sprites["front_default"]} />
            <div className="divTable">
              <div className="divTableBody">
                <div className="divTableRow">
                  <div className="divTableCell">Type</div>
                  <div className="divTableCell">{pokemonType}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Height</div>
                  <div className="divTableCell">
                    {" "}
                    {Math.round(data.height * 3.9)}"
                  </div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Weight</div>
                  <div className="divTableCell">
                    {" "}
                    {Math.round(data.weight / 4.3)} lbs
                  </div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Number of Battles</div>
                  <div className="divTableCell">{data.game_indices.length}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ); 
};

export default App;
