const clearFilter = (state, action) => {
    const {filterType} = action;

    const activeFilters = {
        ...state.activeFilters              
    }
    activeFilters[filterType] = [];

    return {
        ...state,
        activeFilters
    }
}

export default clearFilter;