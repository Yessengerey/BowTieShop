'use strict'
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// Defined Routes
const routes = require('./routes/index.jsx');


const app = express();

var PORT = process.env.PORT || 3000;
app.set('port', PORT);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Necessary to serve the index.html page
app.use(express.static(__dirname + '/../public/'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/', routes.main);

app.listen(app.get('port'), (err) => {
  if (err) {
    throw err;
  }

  console.log(`Listening to ${app.get('port')}!`);
})
