import rootReducer from "../";

describe("rootReducer returns",() => {

    const state = {
        activeFilters: { categories: ["test"], colors: ["test2"] },
        products: [
            { colors: ["blue"], category: "one" },
            { colors: ["green"], category: "two" },
        ]
    };

    const action = {}

    it("default state",() => {
        expect(rootReducer(state, action)).toMatchSnapshot();
    });


});