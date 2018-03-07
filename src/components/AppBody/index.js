import React from "react";

import ProductList from "./ProductList";

const AppBody = props => {
    const { productList } = props;
    
    return (
        <main>
            <ProductList productList={productList}/>
        </main>
    );
}

export default AppBody;