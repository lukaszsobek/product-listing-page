const toggleFilter = (state, action) => {
  const {filterType, filterValue} = action
  const filterValues = state.activeFilters[filterType]

  const newfilterValues = filterValues.filter(item => item !== filterValue)

  if (newfilterValues.length === filterValues.length) {
    newfilterValues.push(filterValue)
  }

  const activeFilters = {
    ...state.activeFilters
  }
  activeFilters[filterType] = newfilterValues

  return {
    ...state,
    activeFilters
  }
}

export default toggleFilter
