import { filterProducts, toggleFilter } from "./";

const updatePage = (filterType, filterValue) => {
    return dispatch => {
        dispatch(toggleFilter(filterType, filterValue));
        dispatch(filterProducts());
    }
}

export default updatePage;