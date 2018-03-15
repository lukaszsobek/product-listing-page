import AppBody from '../'

describe('AppBody', () => {
  it('renders with props', () => {
    const props = {
      productList: [1, 2]
    }
    expect(AppBody(props)).toMatchSnapshot()
  })
})
