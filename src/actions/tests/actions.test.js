import {
  clearFilter,
  setLoadedState,
  setProducts,
  toggleFilter,
  toggleModal,
} from '../'

describe('Correclty creates action for', () => {

  it('clearFilter', () => {
    const props = 'testValue'
    expect(clearFilter(props)).toEqual({
      'filterType': props,
      'type': 'CLEAR_FILTER'
    })
  })

  it('setLoadedState', () => {
    const props = "test"
    expect(setLoadedState(props)).toEqual({
      "loadedState": props,
      "type": "SET_LOADED_STATE"
    })
  })

  it('setProducts', () => {
    const props = [1,2]
    expect(setProducts(props)).toEqual({
      "products": props,
      "type": "SET_PRODUCTS"
    })
  })

  it('toggleFilter', () => {
    const props1 = "sampleType"
    const props2 = "sampleValue"
    expect(toggleFilter(props1, props2)).toEqual({
      "filterType": props1,
      "filterValue": props2,
      "type": "TOGGLE_FILTER"
    })
  })

  it('toggleModal', () => {
    const props = "sample"
    expect(toggleModal(props)).toEqual({
      "modal": props,
      "type": "TOGGLE_MODAL"
    })
  })
})
