import filterProducts from "../filter_products";

describe("filterProducts reducer returns",() => {

    const products = [
        { colors: ["blue"], category: "one" },
        { colors: ["green"], category: "two" },
        { colors: ["blue"], category: "two" }
    ];

    const state = {
        activeFilters: { categories: [], colors: [] },
        products
    }

    it("all products if no filter set",() => {
        expect(filterProducts(state).filteredProducts).toMatchSnapshot();
    });

    it("only color products with color filter",() => {
        state.activeFilters.colors = ["blue"];
        expect(filterProducts(state).filteredProducts).toMatchSnapshot();
    });

    it("only categories with categories filter",() => {
        state.activeFilters.categories = ["one"];
        expect(filterProducts(state).filteredProducts).toMatchSnapshot();
    });

    it("only items with both filters set",() => {
        state.activeFilters.categories = ["two"];
        state.activeFilters.colors = ["green"];
        expect(filterProducts(state).filteredProducts).toMatchSnapshot();
    });
});
