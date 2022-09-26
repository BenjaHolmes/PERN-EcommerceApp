import React from 'react';
import './productInfo.css';

const ProductInfo = () => {
    return (
        <div>
        <div className='infoContainer'>
            <h1> Blue Asics Running Shoes </h1>
            <h2> £150.00 </h2>
        </div>
        <div className="cartButtons">
            <p> - </p>

            <p> + </p>
            <p> Add to Cart </p>
        </div>
        <div className="prodDescription">
            <ul> 
                <li> Shoe tip: Round </li> 
                <li> Fastening: Laces </li>
                <li> Shoe fastener: Laces  </li>
                <li> Pattern: Plain </li> 
                <li> Details: Cut-outs </li>
                <li> Article number: NI114D0HT-A11   </li>
            </ul>
        </div>
        </div>
    );
}

export default ProductInfo;
