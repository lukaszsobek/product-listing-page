
const initialState = {
    products: [{
        name: "Product one",
        category: "circles",
        colors: ["blue", "green", "red"],
        price: 20
    },{
        name: "Product two",
        category: "blocks",
        colors: ["white", "green", "orange"],
        price: 35
    },{
        name: "Product three",
        category: "squares",
        colors: ["blue", "orange", "black"],
        price: 15
    },{
        name: "Product four",
        category: "blocks",
        colors: ["red", "teal", "maroon"],
        price: 80
    },{
        name: "Product one",
        category: "circles",
        colors: ["blue", "green", "red"],
        price: 20
    },{
        name: "Product two",
        category: "blocks",
        colors: ["white", "green", "orange"],
        price: 35
    },{
        name: "Product three",
        category: "squares",
        colors: ["blue", "orange", "black"],
        price: 15
    },{
        name: "Product four",
        category: "blocks",
        colors: ["red", "teal", "maroon"],
        price: 80
    }]
};

const rootReducer = (state = initialState, action) => {

    switch(action.type) {

        default:
            return {
                ...state
            }
    }
};

export default rootReducer;