const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// MongoDB URI
mongoose
  .connect((db), { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected...."))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items)

// Deployment over Heroku
const port = process.env.PORT || 5000;

var listener = app.listen(5000, () => console.log('Listening on port ' + listener.address().port));