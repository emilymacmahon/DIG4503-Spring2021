

/*   


Create an index.js file

This should import the Fetch.js file and use the Fetch class.

It should create a new object and pass a valid Pokemon/ID and color.

It should call the fetch() method of the first object.

It should create a second object with an invalid Pokemon/ID.

It should call the fetch() method of the second object.


*/





import axios from 'axios';

// Fetch this URL
axios('https://pokeapi.co/api/v2/pokemon/99')
    // And then...
    .then(function (response) {
        // Use the 'data'
        const pokemon = response.data;

        // In this example, the above URL will return an object
        //  with data on the Pokemon requested
        console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);
    })
    .catch(function (error) {
        // handle error
        console.log("Error: " + error);
    });

    console.log("...");
    console.log("the code ran");