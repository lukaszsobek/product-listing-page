import Dropdown from '../Dropdown'

describe('DropDown', () => {

  it('returns null if isOpen is false', () => {
    const props = {}
    expect(Dropdown(props)).toBe(null)
  })

  it('renders DropDown w/o active filters', () => {
    const props = {
      isOpen: true,
      dropdownClass: 'testClass',
      activeFilters: [],
      data: [1,2],
      toggleFilter: () => null,
      clearFilter: () => null
    }
    expect(Dropdown(props)).toMatchSnapshot()
  })

  it('renders DropDown with active filters', () => {
    const props = {
      isOpen: true,
      dropdownClass: 'testClass',
      activeFilters: [1,2],
      data: [1,2],
      toggleFilter: () => null,
      clearFilter: () => null
    }
    expect(Dropdown(props)).toMatchSnapshot()
  })
})
