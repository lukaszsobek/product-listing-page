import {
    clearFilter,
    toggleFilter,
    toggleModal,
    updateClearFilterDisplay,
    updatePage,
    updateToggleFilterDisplay
} from "../";

describe("Correclty creates action for",() => {

    it("updateToggleFilterDisplay", () => {
        expect(updateToggleFilterDisplay().toString()).toMatchSnapshot();
    });

    it("updateClearFilterDisplay", () => {
        expect(updateClearFilterDisplay().toString()).toMatchSnapshot();
    });

    it("clearFilter", () => {
        const props = "testValue";
        expect(clearFilter(props)).toEqual({
            "filterType": props,
            "type": "CLEAR_FILTER"
        });
    });

    it("toggleFilter", () => {
        expect(toggleFilter(1,2)).toMatchSnapshot();
    }); 
    
    it("toggleModal", () => {
        expect(toggleModal("sample")).toMatchSnapshot();
    }); 
    
    it("updatePage", () => {
        expect(updatePage()).toEqual({"type": "UPDATE_PAGE"});
    });     

});