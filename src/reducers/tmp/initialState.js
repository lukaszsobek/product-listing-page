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

export default initialState;