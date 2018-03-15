import { updatePage, clearFilter } from "./";

const updateClearFilterDisplay = filterType => {
    return dispatch => {
        console.log("test");
        dispatch(clearFilter(filterType));
        dispatch(updatePage());
    }
}

export default updateClearFilterDisplay;