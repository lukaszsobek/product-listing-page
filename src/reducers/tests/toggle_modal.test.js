import toggleModal from '../toggle_modal'

describe('toggleModal reducer', () => {
  const state = {
    modalState: {
      colorModalVisible: false,
      categoryModalVisible: false
    }
  }

  it('opens a modal if closed', () => {
    const action = {
      modal: 'ColorModal'
    }
    expect(toggleModal(state, action)).toMatchSnapshot()
  })

  it('closes a modal if already open', () => {
    state.modalState.colorModalVisible = true
    const action = {
      modal: 'ColorModal'
    }
    expect(toggleModal(state, action)).toMatchSnapshot()
  })

  it('closes other modal when this opened', () => {
    state.modalState.colorModalVisible = true
    const action = {
      modal: 'CategoryModal'
    }
    expect(toggleModal(state, action)).toMatchSnapshot()
  })
})
