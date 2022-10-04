import React from 'react';
import './shoppingCart.css';
import CartItem from './cartItem';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const ShoppingCart = () => {
    const navigate = useNavigate();
    
    return (
            <motion.div  
                animate={{ x: 0}} 
                transition={{ type: "tween", duration: 0.3 }}
                initial={{ x: 350 }}
                className='shoppingCart'
                > 
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
            </motion.div>
    );
}

export default ShoppingCart;
