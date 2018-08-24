import React, {Component} from 'react';
import axios from 'axios';

import './ShopPage.css'

export default class ShopPage extends Component {
    constructor() {
        super()

        this.state = {
            products: []
        }
        this.updateProductArray = this.updateProductArray.bind(this);
    }

    componentDidMount() {
        // axios.get('/api/products')
        //     .then(res => {
        //         console.log(res)
        //         this.setState({products: res.data})
        //     })
        //     .catch(err => {console.log(err)})
        this.updateProductArray()
    }

    updateProductArray () {
        axios.get('/api/products/')
            .then(res => this.setState({products: res.data}) )
            .catch(err => console.log(err))
    }

    render(){
        let mappedProducts = this.state.products.map( (element) => {
            return (
                <div className='productsContainer' key={`div ${element.id}`}>
                    <img src={element.image_src} alt='product' key={`picture ${element.id}`} height='120' ></img>
                    <p key={`product ${element.id}`} >{element.product}</p>
                    <p key={`category ${element.id}`} >{element.category}</p>
                    <p key={`price ${element.id}`} >${element.price}</p>
                </div>
            )
        })
        console.log(this.state)
        return (
            <div>
                <h1>ShopPage Component</h1>
                {mappedProducts}
                {/* {this.state.products} */}
                {/* {JSON.stringify(mappedProducts)} */}
            </div>
        )
    }
}