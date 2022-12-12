import React from 'react';
import './shoppingCart.css';
import CartItem from './cartItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../../../slices/authSlice';
import { toggleCart, cartItemSelector, getCartItems } from '../../../slices/cartSlice';
import { userSelector } from '../../../slices/authSlice';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const cartItems = useSelector(cartItemSelector);

    useEffect(() => {
        if(user){
            dispatch(getCartItems(user.id))}
    }, [dispatch, user])
    
    return (
            <div>
                <div className="cartTop">
                    <p className='closeMenu' onClick={() => dispatch(toggleCart())}> &#x2716; </p>
                    <p> Cart ID: </p>
                     <h1> Your Cart </h1>
                     <div className="checkout">
                         <p> Price Total : £ 0 </p>
                         <p onClick={() => navigate('/account/checkout')}> Checkout </p>
                    </div>
                    { user === '' ? <div> 
                        <p className='logReminder'> 
                            Remember to Log In to save the items in your Cart!
                        </p> </div> : '' }
                </div>
                 <div className="itemlist">
                    { cartItems !== null ? cartItems.map((item, index) => {
                        return <CartItem  key={index} product_id={item.product_id} cart_id={item.cart_id}
                        quantity={item.quantity} item_size={item.item_size} user_id={item.user_id}
                        name={item.name} description={item.description} price={item.price}
                        pic_path={item.pic_path} /> })
                    : '' }
                    
                </div>
                </div>
    );
}

export default ShoppingCart;
