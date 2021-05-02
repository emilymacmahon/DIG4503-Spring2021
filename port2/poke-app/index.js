// Import Express
import Express from 'express';

// Create an instance of Express
const App = Express();
// Store a port number
const port = 45030;

// Setup a route
App.get('/', function(request, response) {
    response.send("Hi!");
});

// Listen (and start server)
App.listen(port, function(){
    console.log("Server running!");
});

export default App;