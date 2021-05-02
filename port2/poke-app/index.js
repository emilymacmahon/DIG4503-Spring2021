// Import Express
import Express from 'express';
import Database from './Database.js';

//trying to get the files to talk to each other?
import './App.js'
import CORS from 'cors';


// Create an instance of Express
const App = Express();
// Store a port number
const port = 45030;

const db = new Database();
// db.connect("lab11", "EmilyMacmahon");

App.use(CORS());

// Create
App.put();

// Read
App.get();

// Update
App.patch();

// Delete
App.delete();

// Listen (and start server)
App.listen(port, () => {
    console.log("Server running!");
});


export default App;