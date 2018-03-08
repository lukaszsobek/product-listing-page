import {
    FILTER_PRODUCTS,
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
        name: "Product five",
        category: "circles",
        colors: ["blue", "green", "red", "pink"],
        price: 20
    },{
        name: "Product six",
        category: "triangles",
        colors: ["white", "green", "orange","black"],
        price: 35
    },{
        name: "Product seven",
        category: "squares",
        colors: ["blue", "orange", "black","yellow"],
        price: 15
    },{
        name: "Product eight",
        category: "triangles",
        colors: ["red", "teal", "maroon","ochre"],
        price: 80
    }],
    filteredProducts: []
};

const rootReducer = (state = initialState, action) => {
    console.log(
        state.activeFilters.categories,
        state.activeFilters.colors
    );

    switch(action.type) {
        case TOGGLE_FILTER:
            const {filterType, filterValue} = action;
            const filterValues = state.activeFilters[filterType];

            const newfilterValues = filterValues.filter(item => item !== filterValue);

            if(newfilterValues.length === filterValues.length) {
                newfilterValues.push(filterValue);
            }

            const activeFilters = {
                ...state.activeFilters              
            }
            activeFilters[filterType] = newfilterValues;

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

        case FILTER_PRODUCTS:

            const { categories, colors} = state.activeFilters;

            if (!categories.length && !colors.length ) {
                return {
                    ...state,
                    filteredProducts: ([...state.products])
                }
            }

            const { products } = state;

            const filteredProducts = products.filter(product => {
                let hasColor = false;
                let hasCategory = false;

                // if there are color filters
                if(colors.length) {
                    const colorString = product.colors.join(",,");
                    hasColor = colors.some(
                        color => colorString.indexOf(color) > -1
                    );
                } else {
                    hasColor = true;
                }

                // if there are category filters
                if(categories.length) {
                    hasCategory = categories.some(
                        category => product.category === category
                    );                   
                } else {
                    hasCategory = true;
                }

                if(hasColor && hasCategory) {
                    return true;
                }

                return false;
            });

            return {
                ...state,
                filteredProducts
            }

        default:
            return {
                ...state,
                filteredProducts: state.products
            }
    }
};

export default rootReducer;