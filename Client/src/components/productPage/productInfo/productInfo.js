import React from 'react';
import './productInfo.css';

const ProductInfo = (props) => {
    return (
        <div>
        <div className='infoContainer'>
            <h1> {props.name} </h1>
            <h2> {props.price} </h2>
        </div>
        <div className="cartButtons">
            <p> - </p>
            <p> + </p>
            <p> Add to Cart </p>
        </div>
        <div className="prodDescription">
            <ul> 
                <li> {props.description} </li> 
            </ul>
        </div>
        </div>
    );
}

export default ProductInfo;
