import { SET_PRODUCTS } from '../constants'

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return [...action.products]

    default:
      return state
  }
}

export default productsReducer
