import React from 'react';
import {useNavigate} from 'react-router-dom';
import './productCard.css';

const ProductCard = () => {
    const navigate = useNavigate();
    return (
        <div className='cardHolder' onClick={()=>navigate("/products/1")}>
            <img src='https://cdn.sweatband.com/head_revolt_junior_tennis_shoes_head_revolt_junior_tennis_shoes-side_2000x2000.jpg' alt=''></img>
            <div className='prodInfo'>
                <p>Shoes</p>
                <p> £15.00</p>
                <button> Add 2 Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;
