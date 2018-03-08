import AppHeader from "../";

describe("AppHeader", () => {
    it("renders",() => {
        expect(AppHeader()).toMatchSnapshot();
    });
});