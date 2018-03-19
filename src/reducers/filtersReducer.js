import { CLEAR_FILTER, TOGGLE_FILTER } from '../constants'

const initialFilters = {
  categories: [],
  colors: []
}

const filtersReducer = (state = initialFilters, action) => {
  switch (action.type) {
    case CLEAR_FILTER:
      const clearedFilters = {...state}
      clearedFilters[action.filterType] = []
      return clearedFilters

    case TOGGLE_FILTER:
      const {filterValue} = action
      const filterValues = state[action.filterType]

      const newfilterValues = filterValues.filter(
        item => item !== filterValue
      )

      if (newfilterValues.length === filterValues.length) {
        newfilterValues.push(filterValue)
      }

      const newActiveFilters = {...state}
      newActiveFilters[action.filterType] = newfilterValues

      return newActiveFilters

    default:
      return state
  }
}

export default filtersReducer
