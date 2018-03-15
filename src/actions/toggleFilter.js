import { TOGGLE_FILTER } from '../constants'

const toggleFilter = (filterType, filterValue) => ({
  type: TOGGLE_FILTER,
  filterType,
  filterValue
})

export default toggleFilter
