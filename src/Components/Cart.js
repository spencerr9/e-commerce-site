import React, {Component} from 'react';
import axios from 'axios';

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

    render(){
        let mappedCart = this.state.cartItems.map( (element) => {
            return (
                <div className='productsContainer' key={`div ${element.id}`}>
                    <p key={`product ${element.id}`} >{element.product}</p>
                    <p key={`qty ${element.id}`} >Qty: {(element.quantity)}</p>
                    <hr></hr>
                </div>
            )
        })
        return (
            <div>
                <h1>Cart Component</h1>
                {mappedCart}
            </div>
        )
    }
}