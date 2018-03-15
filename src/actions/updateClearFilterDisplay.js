import { updatePage, clearFilter } from './'

const updateClearFilterDisplay = filterType => {
  return dispatch => {
    dispatch(clearFilter(filterType))
    dispatch(updatePage())
  }
}

export default updateClearFilterDisplay
