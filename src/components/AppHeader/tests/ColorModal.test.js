import { ColorModal, DropDown } from "../ColorModal";

describe("ColorModal", () => {

    it("renders ColorModal",() => {
        const props = {
            data: [1,2], 
            isOpen: false, 
            updatePage: () => null, 
            toggleModal: () => null
        }
        expect(new ColorModal(props).render()).toMatchSnapshot();
    });

    it("returns null if no DropDown",() => {
        const props = {}
        expect(DropDown(props)).toBe(null);
    });

    it("renders DropDown",() => {
        const props = {
            isOpen: true,
            data: [1,2]
        }
        expect(DropDown(props)).toMatchSnapshot();
    });
});