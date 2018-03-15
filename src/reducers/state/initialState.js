const initialState =  {
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
    dataLoadedState: "loading",
    products: [],
    filteredProducts: []
};

export default initialState;