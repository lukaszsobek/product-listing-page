import { TOGGLE_MODAL } from "../../constants"
import { modalsReducer } from '../'

describe('toggleModal reducer', () => {
  const state = {
    colorModalVisible: false,
    categoryModalVisible: false
  }

  it('opens a modal if closed', () => {
    const action = { type: TOGGLE_MODAL, modal: 'ColorModal' }
    expect(modalsReducer(state, action)).toEqual({
        "categoryModalVisible": false,
        "colorModalVisible": true
    })
  })

  it('closes a modal if already open', () => {
    state.colorModalVisible = true
    const action = { type: TOGGLE_MODAL, modal: 'ColorModal' }
    expect(modalsReducer(state, action)).toEqual({
        "categoryModalVisible": false,
        "colorModalVisible": false
    })
  })

  it('closes other modal when opened', () => {
    state.colorModalVisible = true
    const action = { type: TOGGLE_MODAL, modal: 'CategoryModal' }
    expect(modalsReducer(state, action)).toEqual({
        "categoryModalVisible": true,
        "colorModalVisible": false
    })
  })
})
