import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { useState } from 'react';

function App() {

  const[additionalName, setAdditionalName] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchresults, setSearchResults] = useState([]);

  const putName = (name) => {
    Axios.put("http://localhost:45030/names/" + name)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log("Error " + error)
    });
  };

  const getNames = (name) => {
    Axios.get("http://localhost:45030/search/" + name)
    .then(response => {
      console.log(response.data);
      setSearchResults(response.data.name)
    })
    .catch(error => {
      console.log("Error " + error)
    });
  };

  const deleteName = (name) => {
    Axios.delete("http://localhost:45030/names/" + name)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log("Error " + error)
    });
  };

  return (
    <div className="App">
      <input type="text" onChange={(event) => setAdditionalName(event.target.value)} />
      <button onClick={() => putName(additionalName)}> Click to test put</button>
      <input type="text" onChange={(event) => setSearchName(event.target.value)} />
      <button onClick={() => getNames(searchName)}> Click to test get</button>
      {
        searchResults.map((value, index) => {
          return <p keu={index}>{value}</p>
        })
      }
      <button onClick={() => deleteName()}> Click to test delete</button>
    </div>
  );

}

export default App;
