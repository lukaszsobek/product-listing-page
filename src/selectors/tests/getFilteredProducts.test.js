import { getFilteredProducts } from '../'

describe('getFilteredProducts reducer returns', () => {
  const products = [
    { colors: ['blue'], category: 'one' },
    { colors: ['green'], category: 'two' },
    { colors: ['blue'], category: 'two' }
  ]
  const filters = { categories: [], colors: [] }


  it('all products if no filter set', () => {
    expect(getFilteredProducts(products,filters)).toEqual(products)
  })

  it('only color products with color filter', () => {
    filters.colors = ['blue']
    expect(getFilteredProducts(products,filters)).toEqual([
      {'category': 'one', 'colors': ['blue']},
      {'category': 'two', 'colors': ['blue']}
    ])
  })

  it('only categories with categories filter', () => {
    filters.categories = ['one']
    expect(getFilteredProducts(products,filters)).toEqual([
      {'category': 'one', 'colors': ['blue']}
    ])
  })

  it('only items with both filters set', () => {
    filters.categories = ['two']
    filters.colors = ['green']
    expect(getFilteredProducts(products,filters)).toEqual([
      {'category': 'two', 'colors': ['green']}
    ])
  })
})