import Express from 'express';
import Database from './Database.js';

const App = Express();
const port = 45030;

const d = new Database();


//create
App.put("/people/:person", (req, res) => {
    //save req parameter
    let person = req.params.person;

    d.createOne(person);

    //return created name
    res.json({person:person});
});

//read
App.get("people/:person", (req, res) => {
    //save req para,
    let person = req.params.person;

    let result = d.readOne(person);

    //return default or searched result
    res.json(result);
});

//delete
App.delete("/people/:person", (req, res) => {
    //save req param
    let person = req.params.person;

    d.deleteMany(person);

    //return name deleted
    res.json({person: person});
});

App.listen(port, () => {
    console.log("Server is running")
});