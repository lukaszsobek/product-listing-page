import { CLEAR_FILTER } from '../constants'

const clearFilter = filterType => ({
  type: CLEAR_FILTER,
  filterType
})

export default clearFilter
