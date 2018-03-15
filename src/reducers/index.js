import {
    CLEAR_FILTER,
    TOGGLE_FILTER,
    TOGGLE_MODAL,
    UPDATE_PAGE
} from "../constants";

import clearFilter from "./clear_filter";
import toggleFilter from "./toggle_filter";
import toggleModal from "./toggle_modal";
import updatePage from "./update_page";

import initialState from "./tmp/initialState";

const rootReducer = (state = initialState, action) => {
    switch(action.type) {

        case CLEAR_FILTER:
            return clearFilter(state,action);

        case TOGGLE_FILTER:
            return toggleFilter(state,action);

        case TOGGLE_MODAL:
            return toggleModal(state,action);

        case UPDATE_PAGE:
            return updatePage(state);

        default:
            return {
                ...state,
                filteredProducts: state.products
            }
    }
};

export default rootReducer;