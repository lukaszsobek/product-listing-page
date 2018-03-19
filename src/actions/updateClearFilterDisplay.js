import { clearFilter } from './'

const updateClearFilterDisplay = filterType => {
  return dispatch => {
    dispatch(clearFilter(filterType))
  }
}

export default updateClearFilterDisplay
