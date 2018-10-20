const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session')
require('dotenv').config();

// Top-Level Middleware
const checkForSession = function(req,res,next){
    const {session} = req;

    if(!session.user){
        session.user = {cart: []}
    }
    next();
}

const app = express()

const products_controller = require('./controllers/products_controller');
const cart_controller = require('./controllers/cart_controller');

const {SERVER_PORT, CONNECTION_STRING} = process.env


app.use(bodyParser.json())
app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(checkForSession)
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

// PRODUCTS ENDPOINTS - request level middleware
app.get( '/api/products', products_controller.getAll )

// CART ENDPOINTS - request level middleware
app.get( '/api/cart', cart_controller.getAll )
app.post( '/api/cart/:product', (req, res, next) => {console.log(res), next() }, cart_controller.create )
app.delete( '/api/cart/:id', cart_controller.delete )
app.put( '/api/cartDec/:id', cart_controller.subQty )
app.put( '/api/cartInc/:id', cart_controller.addQty )
app.delete( '/api/checkout', cart_controller.checkOut )

app.get( '/api/cart/:id', cart_controller.getOne )



app.listen(SERVER_PORT, () => {
    console.log(`Don't touch my stuff. Port: ${SERVER_PORT}`)
})