import React from 'react';
import ProductPic from './productPic/productPic.js';
import ProductInfo from './productInfo/productInfo.js';
import Recommendations from './recommendations/recommendations.js';
import Reviews from './reviews/reviews.js';
import './product.css'

const Product = () => {
    return (
        <div>
        <div className='prodContainer'>
            <ProductPic />
            <ProductInfo />
        </div>
            <Reviews />
            <Recommendations />
        </div>
    );
}
export default Product;
