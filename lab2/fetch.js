/* 

Create a class named Fetch in a file named Fetch.js.

Give its constructor() method two parameters, pokemon and color. 
Inside the constructor(), save these values as properties of the class.

Create a method named fetch() inside the Fetch class.

This should use axios to request data from the PokeAPI 
(Links to an external site.) API.

If a valid Pokemon (or ID number) is passed, it should use 
the color property using chalk.hex() to display the name and 
id of the Pokemon requested.

If an invalid Pokemon/ID is used, the code should report 
an error using chalk.red().

*/


class Fetch {

    constructor(pokemon, color) {
      this.pokemon = pokemon;
      this.color = color;
    }
  
    fetch (){

        axios('https://pokeapi.co/api/v2/pokemon/99')

        // And then...
    .then(function (response) {
        // Use the 'data'
        const pokemon = response.data;

        // In this example, the above URL will return an object
        //  with data on the Pokemon requested
        console.log(chalk.hex(('#800080') + "This is a " + pokemon.name + " and its ID is " + pokemon.id));
    })
    .catch(function (error) {
        // handle error
        console.log(chalk.red("Error: " + error));
    });

    }
  
  }


/*

keeping for reference in case I mess something up
class Fetch {

    constructor(pokemon, color) {
      this.pokemon = pokemon;
      this.color = color;
    }
  
    fetch axios(){

    }
  
  }
  
  */