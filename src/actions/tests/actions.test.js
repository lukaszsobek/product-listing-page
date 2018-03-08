import {
    filterProducts,
    toggleFilter,
    toggleModal,
    updatePage
} from "../";

describe("Correclty creates action for",() => {

    it("filterProducts", () => {
        expect(filterProducts()).toMatchSnapshot();
    });

    it("toggleFilter", () => {
        expect(toggleFilter(1,2)).toMatchSnapshot();
    }); 
    
    it("toggleModal", () => {
        expect(toggleModal("sample")).toMatchSnapshot();
    }); 
    
    it("updatePage", () => {
        expect(updatePage(1,2).toString()).toMatchSnapshot();
    });     

});