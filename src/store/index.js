import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'
import filtersReducer from '../reducers/filtersReducer'
import modalsReducer from '../reducers/modalsReducer'
import productsReducer from "../reducers/productsReducer"

const store = createStore(
  combineReducers({
    root: rootReducer,
    activeFilters: filtersReducer,
    modalState: modalsReducer,
    products: productsReducer
  }),
  applyMiddleware(thunk)
)

// store.subscribe(() => {
//   console.log(store.getState())
// })

export default store
