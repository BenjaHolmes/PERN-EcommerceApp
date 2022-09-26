import React from 'react';
import './shoppingCart.css';


const CartItem = () => {
    return (
        <div className='cartItem'>
            <img src='https://cdn.sweatband.com/head_revolt_junior_tennis_shoes_head_revolt_junior_tennis_shoes-side_2000x2000.jpg' alt=''></img>
            <h4> Asics Blue Running Shoe </h4>
            <div className="prodInfo">
            <h5> Price: £145 </h5>
            <h5> Size : 11 </h5>
            <h5> Quantity: 1</h5>
            </div>

        </div>
    );
}

export default CartItem;
