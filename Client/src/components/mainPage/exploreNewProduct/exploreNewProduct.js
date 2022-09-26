import React from 'react';
import img1 from '../../../imgs/newProductImgs/prodImg1.jpg';
import img2 from '../../../imgs/newProductImgs/prodImg2.jpg';
import img3 from '../../../imgs/newProductImgs/prodImg3.jpg';
import './exploreNewProduct.css';

const ExploreNewProduct = () => {
    return (
        <div className='newProductContainer'>
            <div className="categoryContainer">
                <img className='newProdImg' src={img1} alt='Link to Mens Fashion'/>
                <p> Explore Clothing </p>
           </div>
           <div className="categoryContainer">
                <img className='newProdImg' src={img2} alt='Link to Mens Footwear'/>
                <p> Explore Footwear </p>
           </div>
           <div className="categoryContainer">
                <img className='newProdImg' src={img3} alt='Link to Mens Accessories'/>
                <p> Explore Accessories </p>
           </div>
        </div>
    );
}

export default ExploreNewProduct;
