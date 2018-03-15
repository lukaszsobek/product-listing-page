import clearFilter from '../clear_filter'

describe('toggleFilter reducer', () => {
  const state = {
    activeFilters: {
      aType: ['aFilter'],
      bType: ['bFilter1', 'bFilter2']
    }
  }

  it('removes a filter', () => {
    const action = { filterType: 'aType' }
    expect(clearFilter(state, action)).toEqual({
      'activeFilters': {
        'aType': [],
        'bType': ['bFilter1', 'bFilter2']
      }
    })
  })

  it('removes two filters', () => {
    const action = { filterType: 'bType' }
    expect(clearFilter(state, action)).toEqual({
      'activeFilters': {
        'aType': ['aFilter'],
        'bType': []
      }
    })
  })
})
