import {
    FILTER_PRODUCTS,
    TOGGLE_FILTER,
    TOGGLE_MODAL
} from "../constants";

import filterProducts from "./filter_products";
import toggleFilter from "./toggle_filter";
import toggleModal from "./toggle_modal";

import initialState from "./tmp/initialState";

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FILTER:
            return toggleFilter(state,action);

        case TOGGLE_MODAL:
            return toggleModal(state,action);

        case FILTER_PRODUCTS:
            return filterProducts(state);

        default:
            return {
                ...state,
                filteredProducts: state.products
            }
    }
};

export default rootReducer;