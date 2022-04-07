const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.send('This is our main endpoint')
})

app.listen(4545, () => {
    console.log('Book Server is running on port 4545')
})
