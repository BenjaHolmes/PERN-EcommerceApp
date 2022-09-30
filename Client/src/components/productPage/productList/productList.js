import React from 'react';
import './productList.css';
import ProductCard from '../productCard/productCard.js';
import { useState, useEffect } from 'react';
import axios from 'axios';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/api/products").then(function(response) {
            setProducts(response.data);
        })   
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
