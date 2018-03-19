const getFilteredProducts = (products, {categories, colors}) => {

    // no filters, just return all
    if (!categories.length && !colors.length) {
      return [...products]
    }

    const filteredProducts = products.filter(product => {
      let hasColor = true
      let hasCategory = true
  
      // if there are color filters
      if (colors.length) {
        const colorString = product.colors.join(',,,')
        hasColor = colors.some(
          color => colorString.indexOf(color) > -1
        )
      }

      // if there are category filters
      if (categories.length) {
        hasCategory = categories.some(
          category => product.category === category
        )
      }
  
      if (hasColor && hasCategory) {
        return true
      }
  
      return false
    }) 
    
    return filteredProducts
}
  
export default getFilteredProducts
  