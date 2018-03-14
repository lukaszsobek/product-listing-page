import { updatePage, toggleFilter } from "./";

const filterProducts = (filterType, filterValue) => {
    return dispatch => {
        dispatch(toggleFilter(filterType, filterValue));
        dispatch(updatePage());
    }
}

export default filterProducts;
