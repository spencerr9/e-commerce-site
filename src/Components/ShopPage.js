import React, {Component} from 'react';
import axios from 'axios';
// import {HashRouter, Link} from 'react-router-dom';

import './ShopPage.css'

export default class ShopPage extends Component {
    constructor() {
        super()

        this.state = {
            products: [],
            cart: []
        }
    }

    componentDidMount() {
        axios.get('/api/products')
            .then(res => {
                console.log(res)
                this.setState({products: res.data})
            })
            .catch(err => {console.log(err)})
    }

    // handleAddToCart() {
    //     let prodName_prodTable = axios.get('/api/products').then(res => res.data)
    //     let prodName_cartTable = axios.get('/api/cart').then(res => res.data)
    //     console.log(prodName_prodTable, prodName_cartTable)

    // }

    handleAddToCart(){
        axios.post('/api/cartAdd/:id')
            .then(() => { 
                console.log('success')
             })
    }

    render(){
        let mappedProducts = this.state.products.map( (element) => {
            return (
                <div className='productsContainer' key={`div ${element.id}`}>
                    <img src={element.image_src} alt='product' key={`picture ${element.id}`} height='200' ></img>
                    <p key={`product ${element.id}`} >{element.product}</p>
                    {/* <p key={`category ${element.id}`} >Category: {element.category}</p> */}
                    <p key={`price ${element.id}`} >${(element.price)}</p>
                    
                    {/* <HashRouter><Link to='/cart'> */}
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
        console.log(this.state)
        return (
            <div>
                {/* <h1>ShopPage Component</h1> */}
                <br></br>
                <br></br>
                {mappedProducts}
            </div>
        )
    }
}