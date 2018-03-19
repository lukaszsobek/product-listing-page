import { CategoryModal } from '../CategoryModal'

describe('CategoryModal', () => {
  it('renders CategoryModal', () => {
    const props = {
      data: [1, 2],
      isOpen: false,
      activeFilters: [1,2],
      updatePage: () => null,
      toggleModal: () => null,
      toggleFilter: () => null,
      clearFilter: () => null
    }
    expect(CategoryModal(props)).toMatchSnapshot()
  })
})
