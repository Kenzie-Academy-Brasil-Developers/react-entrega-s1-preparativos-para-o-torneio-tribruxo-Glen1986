const express = require('experss');
const data = require('./data.json')
const app = express();

app.use(express.json())

//verbos http
//GET
//POST 
//PUT
//DELETE

//http://localhost:3000/
//
app.get("/clients",function(req, res){
  res.json(data)
})

app.get("/clients/:id",function(req, res){
  const{ id } = req.params;
  const { client } = data.find(cli => cli.id === id);

  if(!client) return res.status(204).json();
  res.json(client);
})
app.post("/clients",function(req, res){

})
app.put("/clients/:id",function(req, res){

})
app.delete("/clients/:id",function(req, res){

})


app.listener(3000, function(){
  console.log("server running")
})
