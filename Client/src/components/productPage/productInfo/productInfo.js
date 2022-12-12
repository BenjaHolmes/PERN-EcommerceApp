import React from 'react';
import './productInfo.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateChosenSize, chosenProductSelector } from '../../../slices/productsSlice';
import { userSelector } from '../../../slices/authSlice';
import { useEffect } from 'react';
import { getCartItems, addItemToCart, cartMsgSelector, clearCartMsg} from '../../../slices/cartSlice';
import { getUser } from '../../../slices/authSlice';

const ProductInfo = (props) => {
    const dispatch = useDispatch();
    const chosenProduct = useSelector(chosenProductSelector);
    const cartMsg = useSelector(cartMsgSelector);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const clearMsg = () => {
        dispatch(clearCartMsg());
    }
    
    const user = useSelector(userSelector);
    
    const handleAddToCart = () => {
        if (user) {
            const prodData = {
                user_id: user.id,
                product_id: chosenProduct.id,
                quantity: chosenProduct.quantity,
                item_size: chosenProduct.size
            }
            dispatch(addItemToCart(prodData))
            .then(() => dispatch(getCartItems(user.id)))
            .then(setTimeout(clearMsg , 10000));
        } else {
            // add chosen product to state
        }
    }

    return (
        <div className='prodBox'>
        <div className='infoContainer'>
            <h1> {props.name} </h1>
        </div>
        <div className="priceContainer">
            <h2 className='productPrice'> {props.price} </h2>
        </div>
        <div className="dropdownContainer">
                <select name="Size" id="size" onChange={(e) => dispatch(updateChosenSize(e.target.value))}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Xtra Large">Xtra Large</option>
                </select>
                <button onClick={handleAddToCart}> Add to Cart </button>
        </div>
        { cartMsg !== '' ? <p> Item was Successfully Added to Your Cart</p> : ''}
        <div className="prodDescription">
            <p>
                 {props.description}
            </p>
        </div>
        </div>
    );
}

export default ProductInfo;
