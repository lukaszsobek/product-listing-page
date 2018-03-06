import React, { Component } from 'react';

import '../styles/App.css';

import AppHeader from "./AppHeader";
import AppBody from "./AppBody";

class App extends Component {
  render() {
    return (
      <div className="plp-app">
        <AppHeader/>
        <AppBody/>
      </div>
    );
  }
}

export default App;
