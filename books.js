'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mongoose = require('mongoose');

require('./book');
const Book = mongoose.model('Book');

mongoose.connect('mongodb://localhost/books', () => {
  console.log('connected to mongodb');
});

app.get('/', (req, res) => {
  res.send('This is our main endpoint');
});

// create func
app.post('/book', (req, res) => {
  let newBook = {
    title: req.body.title,
    author: req.body.author,
    numberPages: req.body.numberPages,
    publisher: req.body.publisher,
  };

  // Create a new Book
  let book = new Book(newBook);

  // Save objects in collection
  book
    .save()
    .then(() => {
      console.log('New book create!');
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });

  console.log(req.body);
  res.send('A new book created with success');
});



app.listen(4545, () => {
  console.log('Book Server is running on port 4545');
});
