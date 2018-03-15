const setLoadedState = (state, action) => {
  const { loadedState } = action
  return {
    ...state,
    dataLoadedState: loadedState
  }
}

export default setLoadedState
