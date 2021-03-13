import Express from 'express';

const App = Express();
const port = 45030;

App.listen(port, function(){
        console.log("Server running!");
});