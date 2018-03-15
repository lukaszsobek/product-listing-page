import toggleFilter from '../toggle_filter'

describe('toggleFilter reducer', () => {
  const state = {
    activeFilters: {
      aType: ['aFilter']
    }
  }

  it('adds a new filter', () => {
    const action = {
      filterType: 'aType',
      filterValue: 'anotherFilter'
    }

    expect(toggleFilter(state, action)).toMatchSnapshot()
  })

  it('removes existing filter', () => {
    const action = {
      filterType: 'aType',
      filterValue: 'aFilter'
    }

    expect(toggleFilter(state, action)).toMatchSnapshot()
  })
})
