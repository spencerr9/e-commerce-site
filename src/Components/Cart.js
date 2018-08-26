import React, {Component} from 'react';
import axios from 'axios';

import './ShopPage.css'

export default class Cart extends Component {
    constructor() {
        super()

        this.state = {
            cartItems: []
        }
    }

    componentDidMount() {
        axios.get('/api/cart')
        .then(res => {
            console.log(res)
            this.setState({cartItems: res.data})
        })
        .catch(err => {console.log(err)})
    }
    handleCheckOut() {
        axios.delete('/api/checkout')
        .then(res => {
            this.setState({cartItems: [] })
        })
    }

    render(){
        let mappedCart = this.state.cartItems.map( (element) => {
            return (
                <div className='productsContainer' key={`div ${element.id}`}>
                    <img src={element.image_src} alt='product' key={`picture ${element.id}`} height='200' ></img>
                    <p key={`product ${element.id}`} >{element.product}</p>
                    
                    <p key={`qty ${element.id}`} >Qty: {(element.quantity)} 
                        <button
                            onClick={() => {
                                axios.put('api/cartDec/'+element.id)
                                .then(console.log('decremented'))
                                .then(axios.get('api/cart')
                                    .then(this.componentDidMount()))
                                .catch(() => alert('Quantity cannot be less than 1.'))
                            }}
                            >-</button> 
                        <button
                            onClick={() => {
                                axios.put('api/cartInc/'+element.id)
                                .then(console.log('incremented'))
                                .then(axios.get('api/cart')
                                    .then(this.componentDidMount()))
                            }}
                            >+</button> 
                        </p> 

                    <p key={`product ${element.price}`} >${element.price}</p>                    

                    <button
                    onClick={() => {
                        axios.delete('api/cart/'+element.id)
                        .then(console.log('deleted'))
                        .then(axios.get('api/cart/')
                            .then(this.componentDidMount()))
                        .then(axios.get('api/cart/')
                            .then(this.componentDidMount()))
                    }}
                        >delete
                    </button>
                    <hr></hr>
                </div>
            )
        })
        return (
            <div>
                <h3>Shopping Cart</h3>
                <button 
                    className='checkoutButton'
                    onClick={() => {
                        this.handleCheckOut()
                        alert('Checkout complete. Your cart will be cleared.')
                    }}
                    >Check Out
                    </button>
                <br></br>
                <br></br>
                <br></br>
                {mappedCart}
            </div>
        )
    }
}