import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const store = createStore(
  combineReducers({
    root: rootReducer
  }),
  applyMiddleware(thunk)
)

export default store
