import { SET_PRODUCTS } from "../../constants"
import { productsReducer } from "../"

describe("Sets products correctly",() => {
    it("with SET_PRODUCTS",() => {
        const products = [1,2]
        const state = { products: [] }
        const action = { type: SET_PRODUCTS, products }
        expect(productsReducer(state,action)).toEqual(products)
    })
})
