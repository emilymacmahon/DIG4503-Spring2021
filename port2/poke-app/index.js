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
db.connect("portfolio2", "EmilyMacmahon");

App.use(CORS());

// Create
// PUT -> d.createOne() -> collection.insertOne()
App.put("/path/:parameter", (req, res) => {});

// Read
// GET -> d.readOne() -> collection.findOne()
App.get("/path/:parameter", (req, res) => {});

// Update
// POST -> One or more database methods
App.post("/path/controller", (req, res) => {});

// PATCH -> d.updateOne() -> collection.updateOne()
App.patch("/", (req, res) => {});

// DELETE -> d.deleteOne() -> collection.deleteOne()
App.delete("/", (req, res) => {});

// Listen on the port for HTTP communication
App.listen(port);


export default App;
