import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';

import './ShopPage.css'

class Cart extends Component {
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

    render(){
        let mappedCart = this.state.cartItems.map( (element) => {
            return (
                <div className='productsContainer' key={`div ${element.id}`}>
                    <img src={element.image_src} alt='product' key={`picture ${element.id}`} height='200' ></img>
                    <p key={`product ${element.id}`} >{element.product}</p>
                    
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
                <p>Route: {this.props.match.path}</p>
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

export default withRouter(Cart)