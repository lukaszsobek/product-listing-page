import React from "react";

import ProductList from "./ProductList";

const AppBody = props => {
    const { loadedState, productList } = props;

    const errorMessage = "Error loading products from remote server.";
    const loadingMessage = "Loading products...";
    
    if(loadedState === "error") {
        return <div className="products--error">{errorMessage}</div>
    };

    if(loadedState === "loading") {
        return <div className="products--loading">{loadingMessage}</div>
    };
    
    return (
        <main>
            <ProductList productList={productList}/>
        </main>
    );
}

export default AppBody;