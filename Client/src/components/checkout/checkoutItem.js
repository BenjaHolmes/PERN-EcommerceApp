import React from 'react';

const CheckoutItem = (props) => {
    
const imgPath = `/productImages/${props.pic_path}.jpg`;

return (
    <div className='checkoutItem'>
        <img src={imgPath} alt=''></img>
        <h4> {props.name} </h4>
        <div className="productInfo">
        <h5> Price: {props.price} </h5>
        <h5> Size : {props.item_size} </h5>
        </div>
        <div className='qtyContainer'>
        <p> - </p>
        <h5> Quantity: {props.quantity} </h5>
        <p> + </p>
        </div>
        <p> &#x2716; </p>
    </div>
);
        
}

export default CheckoutItem;
