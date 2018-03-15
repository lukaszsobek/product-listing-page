import { ColorModal } from '../ColorModal'

describe('ColorModal', () => {
  it('renders ColorModal', () => {
    const props = {
      data: [1, 2],
      isOpen: false,
      updatePage: () => null,
      toggleModal: () => null
    }
    expect(new ColorModal(props).render()).toMatchSnapshot()
  })
})
