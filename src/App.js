import React, { Component } from 'react';

import NavBar from './Components/NavBar';
import routes from './Routes';

import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      {routes}
      </div>
    );
  }
}

export default App;
