import React, {Component} from 'react';

export default class Cart extends Component {
    constructor() {
        super()

        this.state = {
            cartItems: []
        }
    }
    render(){
        return (
            <div>
                <h1>Cart Component</h1>
            </div>
        )
    }
}