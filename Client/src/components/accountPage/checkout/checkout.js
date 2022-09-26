import React from 'react';
import CartItem from '../../header/shoppingCart/cartItem';
import './checkout.css';

const Checkout = () => {
    return (
        <div className='checkoutContainer'>
            <h1> Your Shopping Cart </h1>
            <div className='infoContainer'>
            <div className="itemlist2">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className="paymentContainer">
                Proceed to Payment
                <button> Checkout </button>
            </div>
            </div>
        </div>
    );
}

export default Checkout;
