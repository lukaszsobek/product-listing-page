import React, { Component } from 'react';
import { connect } from "react-redux";

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

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
