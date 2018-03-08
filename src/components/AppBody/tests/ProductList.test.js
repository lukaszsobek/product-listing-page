import { ColorList, ProductListItem, ProductList } from "../ProductList";


describe("ProductList", () => {

    it("renders ProductList",() => {
        const props = {
            productList: [1,2]
        }
        expect(ProductList(props)).toMatchSnapshot();
    });

    it("renders ProductListItem",() => {

        const props = {
            data: {
                name: "name",
                category: "category",
                colors: "colors",
                price: "price" }
        }
        expect(ProductListItem(props)).toMatchSnapshot();
    });

    it("renders ColorList",() => {

        const props = {
            data: [1,2]
        }
        expect(ColorList(props)).toMatchSnapshot();
    });
});