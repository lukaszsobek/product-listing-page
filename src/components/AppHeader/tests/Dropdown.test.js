import Dropdown from "../Dropdown";

describe("DropDown", () => {

    it("returns null if isOpen is false",() => {
        const props = {}
        expect(Dropdown(props)).toBe(null);
    });

    it("renders DropDown",() => {
        const props = {
            isOpen: true,
            data: [1,2],
            dropdownClass: "testClass"

        }
        expect(Dropdown(props)).toMatchSnapshot();
    });

});