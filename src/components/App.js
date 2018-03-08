import React, { Component } from 'react';
import { connect } from "react-redux";

import '../styles/App.css';

import AppHeader from "./AppHeader";
import AppBody from "./AppBody";

class App extends Component {

  render() {
    const { productList } = this.props;
    return (
      <div className="plp-app">
        <AppHeader />
        <AppBody productList={ productList } />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productList: state.filteredProducts
});

export default connect(mapStateToProps)(App);
