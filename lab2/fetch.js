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

    }
  
  }
  
  