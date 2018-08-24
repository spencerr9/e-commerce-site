const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const axios = require('axios');
require('dotenv').config();

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env


app.use(bodyParser.json())
app.use(express.static( `${__dirname}/../build`))


massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err))

app.listen(SERVER_PORT, () => {
    console.log(`Don't touch my stuff. Port: ${SERVER_PORT}`)
})