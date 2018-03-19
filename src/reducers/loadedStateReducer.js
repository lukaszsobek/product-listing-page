import { SET_LOADED_STATE } from "../constants"

const initialState = "loading"

const loadedStateReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOADED_STATE:
            return action.loadedState
            
        default:
            return state
    }
}

export default loadedStateReducer