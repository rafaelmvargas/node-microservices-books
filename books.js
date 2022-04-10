'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/books', () => {
  console.log('connected to mongodb');
});

app.get('/', (req, res) => {
  res.send('This is our main endpoint');
});

// create func
app.post('/book', (req, res) => {
  console.log(req.body);
  res.send('00:D');
});

app.listen(4545, () => {
  console.log('Book Server is running on port 4545');
});
