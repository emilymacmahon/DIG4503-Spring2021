// Import Express
import Express from 'express';

// Create an instance of Express
const App = Express();
// Store a port number
const port = 45030;

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