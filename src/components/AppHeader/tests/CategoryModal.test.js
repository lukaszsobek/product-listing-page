import { CategoryModal } from '../CategoryModal'

describe('CategoryModal', () => {
  it('renders CategoryModal', () => {
    const props = {
      data: [1, 2],
      isOpen: false,
      updatePage: () => null,
      toggleModal: () => null
    }
    expect(new CategoryModal(props).render()).toMatchSnapshot()
  })
})
