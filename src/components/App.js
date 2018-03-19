import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import { setLoadedState, setProducts } from '../actions'
import { getFilteredProducts } from '../selectors'

import '../styles/App.css'

import AppHeader from './AppHeader'
import AppBody from './AppBody'

class App extends Component {
  componentDidMount () {
    const { setLoadedState, setProducts } = this.props
    axios.get('https://www.mocky.io/v2/5aafe5852d00004d006f0083?mocky-delay=5s')
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

const mapStateToProps = (state) => {
  return {
    productList: getFilteredProducts(state.products, state.activeFilters),
    loadedState: state.root.dataLoadedState
  }
}

const mapDispatchToProps = dispatch => ({
  setLoadedState: (stateName) => dispatch(setLoadedState(stateName)),
  setProducts: (products) => dispatch(setProducts(products))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
