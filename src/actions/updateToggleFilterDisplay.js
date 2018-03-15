import { updatePage, toggleFilter } from './'

const updateToggleFilterDisplay = (filterType, filterValue) => {
  return dispatch => {
    dispatch(toggleFilter(filterType, filterValue))
    dispatch(updatePage())
  }
}

export default updateToggleFilterDisplay
