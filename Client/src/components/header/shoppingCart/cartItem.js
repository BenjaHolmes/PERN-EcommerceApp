import React from 'react';
import './shoppingCart.css';
import { userSelector } from '../../../slices/authSlice';
import { useSelector, useDispatch } from 'react-redux';

const CartItem = (props) => {
    const imgPath = `/productImages/${props.pic_path}.jpg`;
    // const dispatch = useDispatch();
    const user = useSelector(userSelector);

    const handleDelete = () => {
        if (user) {
            // dispatch(removeCartItem({
                //userId: user.id,
                //prodId: props.product_id
            // }))
        } else {
            // dispatch(removeTempItem(props.product_id))
        }
    }

    return (
        <div className='cartItem'>
            <p className='deleteItem' onClick={handleDelete}> &#x2716; </p>
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
