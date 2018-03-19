import { ColorModal } from '../ColorModal'

describe('ColorModal', () => {
  it('renders ColorModal', () => {
    const props = {
      data: [1, 2],
      isOpen: false,
      activeFilters: [1,2],
      updatePage: () => null,
      toggleModal: () => null,
      toggleFilter: () => null,
      clearFilter: () => null
    }
    expect(ColorModal(props)).toMatchSnapshot()
  })
})
