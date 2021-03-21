import Express from 'express';
import CORS from 'cors';

const App = Express();
const port = 45030;

App.use(CORS());

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

//create
App.put("/names/:name", (req, res) => {
    const name = req.params.name;
    names.push(name);
    res.json({name: "put"});
});

//read
App.get("/search/:name", (req, res) => {
    const name= req.params.name;
    const results= names.filter(value => value.includes(name));
    res.json({name: "get"});
});

//delete
App.delete("/names/:name", (req, res) => {
    const name= req.params.name;
    names= names.filter(value => value != name);
    res.json({name: "delete"});
});

App.listen(port, () => {
    console.log("the server is running");
});