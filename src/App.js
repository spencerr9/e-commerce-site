import React, { Component } from 'react';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';

import NavBar from './Components/NavBar';
import ShopPage from './Components/ShopPage';
import Cart from './Components/Cart';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <div className='header'>
          <HashRouter><Link to='/'><button>Shop</button></Link></HashRouter>
          <h1>Action Figures Shop</h1>
          <HashRouter><Link to='/cart'><button>Cart</button></Link></HashRouter>
        </div>
        <div>
          <HashRouter>
            <Switch>
              <Route exact path='/' component={ShopPage} />
              <Route path='/cart' component={Cart} />
            </Switch>
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default App;
