import React from 'react';
import './orderHistory.css';

const OrderCard = () => {
    return (
        <div className='order'>
            <div className='itemsList'>
                <p> item 1 </p>
                <p> item 2 </p>
            </div>
            Date of Order
            Price Paid
        </div>
    );
}

export default OrderCard;
