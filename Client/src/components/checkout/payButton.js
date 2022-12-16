import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector } from '../../slices/authSlice';
import { cartItemSelector, checkoutCart } from '../../slices/cartSlice';

const PayButton = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(cartItemSelector);
    const user = useSelector(userSelector);

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
