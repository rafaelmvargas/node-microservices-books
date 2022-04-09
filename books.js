const express = require("express")
const app = express()

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/books', () => {
    console.log('connected to mongodb')
})


app.get('/', (req, res) => {
    res.send('This is our main endpoint')
})


// create func
app.post('/books', (req, res) => {
    console.log(req.body)
    res.send('This is our create endpoint')
})

app.listen(4545, () => {
    console.log('Book Server is running on port 4545')
})
