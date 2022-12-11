import React from 'react';
import './shoppingCart.css';
import CartItem from './cartItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../../../slices/authSlice';


const ShoppingCart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch])
    
    return (
            <div className='cartContainer'>
                <div className="cartTop">
                     <h1> Your Cart </h1>
                     <div className="checkout">
                         <p> Price Total : £ 0 </p>
                         <p onClick={() => navigate('/account/checkout')}> Checkout </p>
                    </div>
                </div>
                 <div className="itemlist">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                </div>
    );
}

export default ShoppingCart;
