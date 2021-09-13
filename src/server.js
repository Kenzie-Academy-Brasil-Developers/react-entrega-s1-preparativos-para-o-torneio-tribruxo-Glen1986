const express = require('experss');
const app = express();
const data = requre('')

//verbos http
//GET
//POST 
//PUT
//DELETE

//http://localhost:3000/
//
app.get("/clients",function(req, res){
'https://hp-api.herokuapp.com/api/characters/students/'
})
app.get("/clients/:id",function(req, res){})
app.post("/clients",function(req, res){})
app.put("/clients/:id",function(req, res){})
app.delete("/clients/:id",function(req, res){})


app.listener(3000, function(){
  console.log("server running")
})
