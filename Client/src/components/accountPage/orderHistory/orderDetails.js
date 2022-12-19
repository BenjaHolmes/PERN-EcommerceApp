import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderItems, setChosenOrder, orderItemSelector } from '../../../slices/accountPageSlice';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const OrderDetails = (props) => {
    const dispatch = useDispatch();
    const orderItems = useSelector(orderItemSelector);

    useEffect(() => {
        dispatch(getOrderItems(props.order_id));
    }, [dispatch, props.order_id]);

    return (
            <motion.div className='orderPopup' animate={{y:0, opacity:1}} initial={{y: -5, opacity:0}}
                transition={{type: 'tween', transition: 1}} exit={{y: -5, opacity: 0}}>
                <div className='buttonDiv'>
                    <button className='closePop' onClick={()=> dispatch(setChosenOrder(null))}> X </button>
                </div>
                <div className='titles'>
                    <p> </p>
                    <p> Item Name </p>
                    <p> Size Ordered </p>
                    <p> Price </p>
                    <p> Amount Ordered </p> 
                </div>
                <div className='itemsDiv'>
                    { orderItems != null ? orderItems.map((item, index) => {
                        return <div className='item'>
                            <img src={`/productImages/${item.picPath}.jpg`} alt=''/> 
                            <p> {item.itemName} </p>
                            <p> {item.itemSize} </p>
                            <p> £{item.itemPrice} </p>
                            <p> {item.itemQuantity} </p>
                        </div>
                    }) : '' }
                </div>
            </motion.div>  
    );
}

export default OrderDetails;
