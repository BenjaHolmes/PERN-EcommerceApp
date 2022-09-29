import React from 'react';
import ProductPic from './productPic/productPic.js';
import ProductInfo from './productInfo/productInfo.js';
import Recommendations from './recommendations/recommendations.js';
import Reviews from './reviews/reviews.js';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './product.css'

const Product = () => {
    const location = useLocation();
    const [product] = useState(location.state);

    return (
        <div>
        <div className='prodContainer'>
            <ProductPic path={product.path}/>
            <ProductInfo name={product.name} price={product.price} description={product.description} />
        </div>
            <Reviews />
            <Recommendations />
        </div>
    );
}
export default Product;
