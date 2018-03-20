import { SET_LOADED_STATE } from "../../constants"
import { loadedStateReducer } from "../"

describe("Sets loaded state correctly",() => {
    it("with SET_LOADED_STATE",() => {
        const loadedState = "loadingTest"
        const state = { loadedState: "unloaded" }
        const action = { type: SET_LOADED_STATE, loadedState }
        expect(loadedStateReducer(state,action)).toBe(loadedState)
    })
})