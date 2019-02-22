// Dependences
const express = require('express');
const consign  = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

// Settings 
app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.use(express.static('./public'));

// Middlewars
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

// Insertions

consign()
    .include('app/routes')
    .then('app/controllers')
    .into(app);


module.exports = app;