import React from 'react';
import './productInfo.css';

const ProductInfo = (props) => {
    return (
        <div>
        <div className='infoContainer'>
            <h1> {props.name} </h1>
        </div>
        <div className="priceContainer">
            <h2 className='productPrice'> {props.price} </h2>
        </div>
        <div className="dropdownContainer">
                <select name="Size" id="size">
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Xtra Large">Xtra Large</option>
                </select>
                <button> Add to Cart </button>
        </div>
        <div className="prodDescription">
            <p>
                 {props.description}
            </p>
        </div>
        </div>
    );
}

export default ProductInfo;
