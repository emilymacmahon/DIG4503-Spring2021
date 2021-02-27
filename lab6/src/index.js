
import Express from 'express';

const App= Express();

const port = 45030;

const person ={
  color:"Red",
  name:"Emily"
};



App.get('/', function(req, res){
  res.json(person);
});

App.listen(port, function(){
  console.log("Hello World!");
});