import { combineReducers, createStore } from 'redux'

import {
  filtersReducer,
  modalsReducer,
  productsReducer,
  loadedStateReducer
} from "../reducers"

const store = createStore(
  combineReducers({
    activeFilters: filtersReducer,
    modalState: modalsReducer,
    products: productsReducer,
    dataLoadedState: loadedStateReducer
  })
)

export default store
