// Import Express
import Express from 'express';
import Database from './Database.js';

//trying to get the files to talk to each other? when I run the start script it still tries to open on port 3000, the default one
import './App.js'
import CORS from 'cors';


// Create an instance of Express
const App = Express();
// Store a port number
const port = 45030;

const db = new Database();

async function databaseFunctionality() {
await db.connect("portfolio2", "EmilyMacmahon");
//await
await db.create({updatedField: "value"});
await db.readOne({updatedField: "value"});
    //console.log(document);
await db.update({updatedField: "aother value"}, {updatedField: "new"});
await db.delete({updatedField: "another value delted"});
db.close();

}

databaseFunctionality();

