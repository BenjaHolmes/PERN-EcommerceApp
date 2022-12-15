import React from 'react';
import './shoppingCart.css';


const CartItem = (props) => {
    const imgPath = `/productImages/${props.pic_path}.jpg`;

    return (
        <div className='cartItem'>
            <p className='deleteItem'> &#x2716; </p>
            <h4> {props.name} </h4>
            <div className="prodInfo">
            <p> Price: {props.price} </p>
            <p> Size : {props.item_size} </p>
            <p> Quantity: {props.quantity} </p>
            </div>
            <img src={imgPath} alt=''></img>
        </div>
    );
}

export default CartItem;
