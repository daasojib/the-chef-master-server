const express = require('express');
const app =express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const chef = require('./data/chef.json')

app.use(cors())

app.get('/',(req, res)=>{
          res.send('Chef is cooking')
})

app.get('/categories',(req,res) =>{
          res.send(categories);
})

app.get('/chef',(req,res)=>{
          res.send(chef);
})

app.get('/chef/:id',(req,res)=>{
          const id = req.params.id;
          console.log(id)
          const selectedChef = chef.find(c =>c.id === id)
          res.send(selectedChef);
})

app.get('/categories/:id',(req,res) =>{
          const id = req.params.id;
          console.log(id)
          
})

app.listen(port, ()=>{
          console.log(`Chef is cooking on port: ${port}`)
})