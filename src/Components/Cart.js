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
                    <img src={element.image_src} alt='product' key={`picture ${element.id}`} height='200' ></img>
                    <p key={`product ${element.id}`} >{element.product}</p>
                    
                    <p key={`qty ${element.id}`} >Qty: {(element.quantity)} 
                        <button
                            onClick={() => {
                                axios.put('api/cartDec/'+element.id)
                                .then(console.log('decremented'))
                                .then(this.componentDidMount())
                            }}
                            >-</button> 
                        <button
                            onClick={() => {
                                axios.put('api/cartInc/'+element.id)
                                .then(console.log('incremented'))
                                .then(this.componentDidMount())
                            }}
                            >+</button> 
                    </p> 

                    <button
                    onClick={() => {
                        axios.delete('api/cart/'+element.id)
                        .then(console.log('deleted'))
                        // .then(axios.get('api/cart/'))
                        .then(this.componentDidMount())
                    }}
                        >delete
                    </button>
                    <hr></hr>
                </div>
            )
        })
        return (
            <div>
                <h1>Shopping Cart</h1>
                {mappedCart}
            </div>
        )
    }
}