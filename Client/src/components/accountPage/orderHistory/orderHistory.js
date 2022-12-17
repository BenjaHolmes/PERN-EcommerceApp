import React from 'react';
import './orderHistory.css';
import OrderCard from './orderCard';
import { userSelector, logOutUser } from '../../../slices/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../../slices/cartSlice';

const OrderHistory = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(userSelector);

    const handleLogOut = () => {
        dispatch(logOutUser());
        dispatch(clearCart());
    }

    return (
        <div className='accountContainer'>
            <div className="accButtons">
                <h5 onClick={handleLogOut}> &#x2190; Log Out  </h5>
                <h1> Welcome to Your Account { user.first_name ? <span> {user.first_name} </span> : '' } </h1>
                <h5 onClick={() => navigate('/checkout')}> Checkout &#x2192; </h5>
            </div>
            <h3> View Your Previous Orders</h3>
            <div className="orderHistory">
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </div>
        </div>
    );
}

export default OrderHistory;
