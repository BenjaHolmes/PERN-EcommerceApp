import React from 'react';
import ProductCard from '../productCard/productCard';
import './recommendations.css';

const Recommendations = () => {
    return (
        <div className='recommendationsContainer'>
            <h2> Customers Who Purchased This Also Bought </h2>  
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
