const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express()

const products_controller = require('./controllers/products_controller');
const cart_controller = require('./controllers/cart_controller');

const {SERVER_PORT, CONNECTION_STRING} = process.env


app.use(bodyParser.json())
app.use(express.static( `${__dirname}/../build`))


massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)

    // ADDS PRODUCTS TO THE DATABASE
    // dbInstance.new_products()
    //     .then(item => console.log(item))
    //     .catch(err => console.log(err))
    
    // CONSOLE.LOGS PRODUCTS CURRENTLY IN THE DATABASE
    // dbInstance.get_products()
    //     .then(item => console.log(item))
    //     .catch(err => console.log(err))

}).catch(err => console.log(err))

// PRODUCTS ENDPOINTS
app.get( '/api/products', products_controller.getAll )

// CART ENDPOINTS
app.get( '/api/cart', cart_controller.getAll )
app.post( '/api/cart', cart_controller.create )



app.listen(SERVER_PORT, () => {
    console.log(`Don't touch my stuff. Port: ${SERVER_PORT}`)
})