import React from 'react';
import ProductList from './productList/productList.js';
import SortBy from './sortBy/sortBy.js';

const ProductPage = () => {
    return (
        <div>
            <SortBy />
            <ProductList /> 
        </div>
    );
}

export default ProductPage;
