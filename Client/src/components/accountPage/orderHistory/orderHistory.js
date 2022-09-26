import React from 'react';
import './orderHistory.css';
import OrderCard from './orderCard';

const OrderHistory = () => {
    return (
        <div className='accountContainer'>
            <h1> Welcome to Your Account, Name</h1>
            <div className="accButtons">
            <h5> Log Out </h5>
            <h5> Proceed to Checkout </h5>
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
