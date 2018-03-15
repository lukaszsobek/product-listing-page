import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import { setLoadedState, setProducts } from '../actions'

import '../styles/App.css'

import AppHeader from './AppHeader'
import AppBody from './AppBody'

class App extends Component {
  componentDidMount () {
    const { setLoadedState, setProducts } = this.props

    axios.get('http://www.mocky.io/v2/5aaa72f13300005d202da95c?mocky-delay=5s')
      .then(res => {
        setProducts(res.data)
        setLoadedState('loaded')
      })
      .catch(() => {
        setLoadedState('error')
      })
  }

  render () {
    const { loadedState, productList } = this.props
    return (
      <div className='plp-app'>
        <AppHeader />
        <AppBody
          loadedState={loadedState}
          productList={productList} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  productList: state.filteredProducts,
  loadedState: state.dataLoadedState
})

const mapDispatchToProps = dispatch => ({
  setLoadedState: (stateName) => dispatch(setLoadedState(stateName)),
  setProducts: (products) => dispatch(setProducts(products))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
