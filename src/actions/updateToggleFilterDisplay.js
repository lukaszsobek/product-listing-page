import { toggleFilter } from './'

const updateToggleFilterDisplay = (filterType, filterValue) => {
  return dispatch => {
    dispatch(toggleFilter(filterType, filterValue))
  }
}

export default updateToggleFilterDisplay
