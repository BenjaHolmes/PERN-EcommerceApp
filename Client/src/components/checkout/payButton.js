import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector } from '../../slices/authSlice';
import { cartItemSelector, checkoutCart } from '../../slices/cartSlice';

const PayButton = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(cartItemSelector);
    const user = useSelector(userSelector);

    const handleCheckout = () => {
        console.log(cartItems);
        axios.post('http://localhost:4000/api/payment/create-checkout-session', {
            cartItems,
            userId: user.id
        }).then((res) => {
            if(res.data.url) {
                window.location.href = res.data.url;
            } 
        }).catch((err) => console.log(err.message));
    }

    return (
            <div>
                <button onClick={() => dispatch(checkoutCart({
                    cartItems,
                    userId: user.id
                }))}> Check Out </button>
            </div>           
    );
}

export default PayButton;
