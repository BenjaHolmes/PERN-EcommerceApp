import React from 'react';
import './shoppingCart.css';
import CartItem from './cartItem';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const ShoppingCart = (props) => {
    const navigate = useNavigate();
    
    return (
            <motion.div  
                animate={{ x: 0}} 
                transition={{ type: "tween", duration: 0.3 }}
                initial={{ x: 350 }}
                className='shoppingCart'
                > 
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
            </motion.div>
    );
}

export default ShoppingCart;
