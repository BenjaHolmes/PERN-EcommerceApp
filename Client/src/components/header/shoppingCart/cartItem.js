import React from 'react';
import './shoppingCart.css';


const CartItem = (props) => {
    const imgPath = `/productImages/${props.pic_path}.jpg`;

    return (
        <div className='cartItem'>
            <p> &#x2716; </p>
            <img src={imgPath} alt=''></img>
            <h4> {props.name} </h4>
            <div className="prodInfo">
            <h5> Price: {props.price} </h5>
            <h5> Size : {props.item_size} </h5>
            <h5> Quantity: {props.quantity} </h5>
            </div>
        </div>
    );
}

export default CartItem;
