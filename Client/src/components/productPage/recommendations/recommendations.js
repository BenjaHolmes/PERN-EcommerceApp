import React from 'react';
import ProductCard from '../productCard/productCard';
import './recommendations.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Recommendations = () => {
    const [recs, setRecs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/api/products").then(function(response) {
            setRecs(response.data);
        })   
        
    }
    , []);

   
    return (
        <div className='recommendationsContainer'>
            <h2> Discover New Items </h2>  
            <div className="productList">
                <ProductCard />      
                <ProductCard /> 
                <ProductCard /> 
                <ProductCard />  
            </div>   
        </div>
    );
}

export default Recommendations;
