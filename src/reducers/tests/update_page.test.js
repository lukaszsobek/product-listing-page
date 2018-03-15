import updatePage from "../update_page";

describe("updatePage reducer returns",() => {

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
        expect(updatePage(state).filteredProducts).toEqual(products);
    });

    it("only color products with color filter",() => {
        state.activeFilters.colors = ["blue"];
        expect(updatePage(state).filteredProducts).toEqual([
            {"category": "one", "colors": ["blue"]},
            {"category": "two", "colors": ["blue"]}
        ]);
    });

    it("only categories with categories filter",() => {
        state.activeFilters.categories = ["one"];
        expect(updatePage(state).filteredProducts).toEqual([
            {"category": "one", "colors": ["blue"]}
        ]);
    });

    it("only items with both filters set",() => {
        state.activeFilters.categories = ["two"];
        state.activeFilters.colors = ["green"];
        expect(updatePage(state).filteredProducts).toEqual([
            {"category": "two", "colors": ["green"]}
        ]);
    });
});
