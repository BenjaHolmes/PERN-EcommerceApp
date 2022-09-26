import React from 'react';
import './shoppingCart.css';
import CartItem from './cartItem';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
    const navigate = useNavigate();
    return (
        <div className='shoppingCart'>
            <div className="buttons">
                <p onClick = {() => navigate('/account')}> Visit Your Account </p>
            </div>
            <h1> Shopping Cart </h1>
            <div className="checkout">
                <p> Price Total : £ 0 </p>
                <p onClick={() => navigate('/account/checkout')}> Checkout </p>
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
