const express = require('express')
const bodyParser = require('body-parser')

const PORT = 5000
const app = express()


app.get('/', (req, res) => {
    res.send('Success');
})


app.listen(PORT, () => {
    console.log(`Server is listening on: ${PORT}`);
})
