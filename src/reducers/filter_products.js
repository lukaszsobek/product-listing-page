const filterProducts = (state,action) => {
    const { categories, colors} = state.activeFilters;

    if (!categories.length && !colors.length ) {
        return {
            ...state,
            filteredProducts: ([...state.products])
        }
    }

    const { products } = state;

    const filteredProducts = products.filter(product => {
        let hasColor = false;
        let hasCategory = false;

        // if there are color filters
        if(colors.length) {
            const colorString = product.colors.join(",,");
            hasColor = colors.some(
                color => colorString.indexOf(color) > -1
            );
        } else {
            hasColor = true;
        }

        // if there are category filters
        if(categories.length) {
            hasCategory = categories.some(
                category => product.category === category
            );                   
        } else {
            hasCategory = true;
        }

        if(hasColor && hasCategory) {
            return true;
        }

        return false;
    });

    return {
        ...state,
        filteredProducts
    }
};

export default filterProducts;