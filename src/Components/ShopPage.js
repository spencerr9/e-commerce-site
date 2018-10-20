import React, {Component} from 'react';
import axios from 'axios';
// import {HashRouter, Link} from 'react-router-dom';
import {withRouter} from 'react-router';

import './ShopPage.css'

class ShopPage extends Component {
    constructor() {
        super()

        this.state = {
            products: [],
            cart: []  // try doing an axios call from the database to set the cart state with the cart database, adding only one item to the cart might be possible after that.
        }
    }

    componentDidMount() {
        this.handleProductsDB()
        // axios.get('/api/products')
        //     .then(res => {this.setState({products: res.data}) })
        //     .catch(err => {console.log(err)})
        this.handleCartDB()
        // axios.get('/api/cart')
        //     .then(res => {this.setState({cart: res.data}) })
        //     .catch(err => {console.log(err)})
    }

    handleProductsDB(){
        axios.get('/api/products')
            .then(res => {this.setState({products: res.data}) })
    }

    handleCartDB(){
        axios.get('/api/cart')
            .then(res => {this.setState({cart: res.data}) })
            .catch(err => {console.log(err)})
    }

    handleAddToCart(){
        axios.post('/api/cartAdd/:id')
            .then(() => { 
                console.log('success')
             })
    }

    render(){
        let mappedCart = this.state.cart.map(e => {
            return (
                <div>
                    {e.product}
                </div>
            )
        })
        console.log((mappedCart))



        let mappedProducts = this.state.products.map( (element) => {
            return (
                <div className='productsContainer' key={`div ${element.id}`}>
                    <img src={element.image_src} alt='product' key={`picture ${element.id}`} height='200' ></img>
                    <p key={`product ${element.id}`} >{element.product}</p>
                    {/* <p key={`category ${element.id}`} >Category: {element.category}</p> */}
                    <p key={`price ${element.id}`} >${(element.price)}</p>
                    
                    {/* <HashRouter><Link to='/cart'> */}
                    {/* <button
                    onClick={() => {
                        // let cartPost = this.handleAddToCart()
                        let cartArray = this.state.cart
                        for(let i = 0; i<cartArray.length; i++){
                            if(element.product === cartArray[i].product){
                                return alert('This product already exists in your shopping cart')
                            }
                            return this.handleAddToCart().then(this.componentDidMount())
                        }
                    }}
                    >Add To Cart</button> */}

                    <button
                    onClick={() => {axios.post(`/api/cart/`+element.product)
                        .then(() => { 
                        console.log('success')
                     })
                    }}
                    >Add To Cart</button>

                    {/* </Link></HashRouter> */}
                    <hr></hr>
                </div>
            )
        })
        console.log(this.props)
        return (
            <div>
                <p>Route: {this.props.match.path}</p>
                {/* <h1>ShopPage Component</h1> */}
                <br></br>
                <br></br>
                {mappedProducts}
            </div>
        )
    }
}

export default withRouter(ShopPage)