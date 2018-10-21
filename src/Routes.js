import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ShopPage from './Components/ShopPage';
import Cart from './Components/Cart';

export default (
    <Switch>
        <Route exact path='/' component={ShopPage} />
        <Route path='/cart' component={Cart} />
    </Switch>
)