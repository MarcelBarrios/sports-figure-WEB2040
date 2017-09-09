// fetch('http://134.43.43./api/sportsfigures', {
// //methods, headers, body
// })
// .then(res => res.json())
// .then(sportsFigures=>{
// 	console.log(sportsFigures);
// })
//
// $ajax


const express = require('express') //

const app = express();

const bodyparser = require('body-parser')

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const mongodb = mongoose.createConnection('mongodb://localhost/sports-figures-db');

const cors = require('cors');

const SportsFigure = require('./SportsFigure.js')(mongodb);

app.use(cors());
app.use(bodyparser.json());

app.get('/api/SportsFigure', function(req, res) {
  SportsFigure.find()
  .then(function(dbFigures){
    console.log(dbFigures);
    res.json(dbFigures);
  })
.catch(function(err){
  console.log(err);
  res.status(500).end('Error with DB query')
  })
})

  app.post('/api/SportsFigure',  function(req, res){
    console.log(req.body);
    let newSportsFigure = new SportsFigure(req.body);
    newSportsFigure.save()
    .then(dbResult=>{
      console.log(dbResult);
      res.status(201).json(dbResult);
    })
    .catch(err=>{
      console.log(err);
      res.setStatus(500).send('error');
    })
  });


app.listen(1338, ()=> console.log('App listning'));
