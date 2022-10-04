import React from 'react';
import './productList.css';
import ProductCard from '../productCard/productCard.js';
import { useState, useEffect } from 'react';
import axios from 'axios';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchProducts() {
        const response = await fetch('http://localhost:4000/api/product');
        const data = await response.json();
        console.log(data);
        setProducts(data);
    }   
    fetchProducts();
    }
    , []);
    return (
        <div className='productList'>
            {products != null ? products.map((body, index) => 
                <ProductCard key={index} name={body.name}
                 description={body.description} price={body.price}
                 path={body.picture_path} id={body.id}/>) : ''} 
        </div>
    );
}

export default ProductList;
