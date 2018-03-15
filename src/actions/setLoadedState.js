import { SET_LOADED_STATE } from "../constants";

const setLoadedState = loadedState => ({
    type: SET_LOADED_STATE,
    loadedState
});

export default setLoadedState;