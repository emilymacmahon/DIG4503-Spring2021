
/* Create a GET route called people/:person where person is a route parameter.
Should return a JSON object with the property, {name: "name"}, 
for exact matches of a name found in the array names.
If the name is not found, the route should respond with a JSON object, 
{name: "not found"}.

Create a GET route called search/:name where name is a route parameter.
Should return a JSON object, {search: [names]}, based on if the route 
parameter can be found in the string of the name. 
For example, using "search/y" would find ["Cortney"], but "search/e" would 
find multiple entries, all of which should be returned as part of an array. 
If search cannot be found, the route should respond with a JSON object, 
{search: ["not found"]}.

*/ 

import Express from 'express';

const App = Express();
const port = 45030;

//array of names for a get route to search through
const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

// A GET route
// Request parameter of people
App.get("/people/:person", (req, res) => {

    // Set a default (search failed) result
    let result = "Not found!";

    // Use the forEach() method of array
    names.forEach((value) => {
        
        if(req.params.person == value) {
            // If the search worked, save the result
            result = value;
        }
    });

   
    res.json(result);
});

App.get("/search/:names", (req, res) => {

    // Set a default (search failed) result
    let result = "Not found!";

    // Use the forEach() method of array
    names.forEach((value) => {
       
        if(req.params.names == value) {
            // If the search worked, save the result
            result = value;
        }
    });

   
    res.json(result);
});

// Listen on a port.
App.listen(port, () => {
    console.log("Server running!");
});