import AppBody from '../'

describe('AppBody', () => {

  // error
  it('renders with error', () => {
    const props = {
      loadedState: "error"
    }
    expect(AppBody(props)).toMatchSnapshot()
  })

  // loading
  it('renders when loading', () => {
    const props = {
      loadedState: "loading"
    }
    expect(AppBody(props)).toMatchSnapshot()
  })

  it('renders with props', () => {
    const props = {
      productList: [1, 2]
    }
    expect(AppBody(props)).toMatchSnapshot()
  })
})
