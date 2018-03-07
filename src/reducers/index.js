import {
    TOGGLE_FILTER,
    TOGGLE_MODAL
} from "../constants";

const initialState = {

    modalState: {
        colorModalVisible: false,
        categoryModalVisible: false,
    },
    dropdownData: {
        categories: [
            "circles",
            "squares",
            "triangles"
        ],
        colors: [
            "blue",
            "green",
            "black"
        ]
    },
    activeFilters: {
        categories: [],
        colors: []
    },
    products: [{
        name: "Product one",
        category: "circles",
        colors: ["blue", "green", "red", "pink"],
        price: 20
    },{
        name: "Product two",
        category: "triangles",
        colors: ["white", "green", "orange","black"],
        price: 35
    },{
        name: "Product three",
        category: "squares",
        colors: ["blue", "orange", "black","yellow"],
        price: 15
    },{
        name: "Product four",
        category: "triangles",
        colors: ["red", "teal", "maroon","ochre"],
        price: 80
    },{
        name: "Product one",
        category: "circles",
        colors: ["blue", "green", "red", "pink"],
        price: 20
    },{
        name: "Product two",
        category: "triangles",
        colors: ["white", "green", "orange","black"],
        price: 35
    },{
        name: "Product three",
        category: "squares",
        colors: ["blue", "orange", "black","yellow"],
        price: 15
    },{
        name: "Product four",
        category: "triangles",
        colors: ["red", "teal", "maroon","ochre"],
        price: 80
    }]
};

const rootReducer = (state = initialState, action) => {

    switch(action.type) {
        case TOGGLE_FILTER:
            const {filterType, filterValue} = action;
            const filterValues = state.activeFilters[filterType];

            const newfilterValues = filterValues.filter((item) => item !== filterValue);

            if(newfilterValues.length === filterValues.length) {
                newfilterValues.push(filterValue);
            }

            const activeFilters = {
                ...state.activeFilter
            }
            activeFilters[filterType] = newfilterValues;

            console.log(activeFilters)

            return {
                ...state,
                activeFilters
            }

        case TOGGLE_MODAL:
            const {
                colorModalVisible,
                categoryModalVisible
            } = state.modalState;

            const modalState = {
                colorModalVisible: (
                    action.modal === "ColorModal"
                        ? !colorModalVisible
                        : false
                ),
                categoryModalVisible: (
                    action.modal === "CategoryModal"
                        ? !categoryModalVisible
                        : false
                )
            }

            return {
                ...state,
                modalState
            }

        default:
            return {
                ...state
            }
    }
};

export default rootReducer;