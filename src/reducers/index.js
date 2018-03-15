import {
  CLEAR_FILTER,
  SET_LOADED_STATE,
  SET_PRODUCTS,
  TOGGLE_FILTER,
  TOGGLE_MODAL,
  UPDATE_PAGE
} from '../constants'

import clearFilter from './clear_filter'
import toggleFilter from './toggle_filter'
import toggleModal from './toggle_modal'
import updatePage from './update_page'
import setProducts from './set_products'
import setLoadedState from './set_loaded_state'

import initialState from './state/initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADED_STATE:
      return setLoadedState(state, action)

    case SET_PRODUCTS:
      return setProducts(state, action)

    case CLEAR_FILTER:
      return clearFilter(state, action)

    case TOGGLE_FILTER:
      return toggleFilter(state, action)

    case TOGGLE_MODAL:
      return toggleModal(state, action)

    case UPDATE_PAGE:
      return updatePage(state)

    default:
      return {
        ...state,
        filteredProducts: state.products
      }
  }
}

export default rootReducer
