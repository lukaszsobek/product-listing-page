import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'
import filtersReducer from '../reducers/filtersReducer'

const store = createStore(
  combineReducers({
    root: rootReducer,
    activeFilters: filtersReducer
  }),
  applyMiddleware(thunk)
)

export default store
