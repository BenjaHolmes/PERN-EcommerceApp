import React from 'react';
import ProductList from './productList/productList.js';
import SortBy from './sortBy/sortBy.js';
import PageSelector from './pageSelector/pageSelector.js';

const ProductPage = () => {
    return (
        <div>
            <SortBy />
            <ProductList /> 
            <PageSelector />
        </div>
    );
}

export default ProductPage;
