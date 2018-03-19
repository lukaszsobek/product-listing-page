import {
  SET_LOADED_STATE
} from '../constants'

import setLoadedState from './set_loaded_state'

const initialState = {
  dropdownData: {
    categories: ['circles', 'squares', 'triangles'],
    colors: ['blue', 'green', 'black']
  },
  dataLoadedState: 'loading'
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADED_STATE:
      return setLoadedState(state, action)

    default:
      return state
  }
}

export default rootReducer
