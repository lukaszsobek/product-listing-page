const setProducts = (state, action) => {
  const { products } = action

  return {
    ...state,
    products,
    filteredProducts: products
  }
}

export default setProducts
