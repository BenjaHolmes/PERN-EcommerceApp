import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//Thunk which checks if Cart exists, and if not, creates one.
export const checkCart = createAsyncThunk(
    'cart/createCart',
    async(userId) => {
        const response = await axios.get(`http://localhost/api/cart/${userId}`);
        return response.data;
    }
)


export const getCartItems = createAsyncThunk(
    'cart/getCartItems',
    async(userId) => {
        const response = await axios.get(`http://localhost:4000/api/cart/items/${userId}`);
        return response.data;
    }
)

export const addItemToCart = createAsyncThunk(
    'cart/addItemToCart',
    async(data) => {
        const response = await axios.post(`http://localhost:4000/api/cart`, {
            user_id: data.user_id,
            product_id: data.product_id,
            quantity: data.quantity,
            item_size: data.item_size
        });
        return response.data;
    }
)

const initialState = {
    cartItems: [],
    tempCartItems: [],
    priceTotal: 0,
    cartOpen: false,
    cartId: 0,
    cartMsg: ''
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart (state) {
            state.cartOpen = !state.cartOpen;
        },
        addToTempCart (state, action) {
            state.tempCartItems.push(action.payload);
        },
        clearCartMsg (state) {
            state.cartMsg = '';
        }

    }, extraReducers: {
        [checkCart.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [checkCart.fulfilled]: (state, action) => {
            state.cartId = action.payload;
            state.loading = false;
        },
        [checkCart.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
        [getCartItems.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.cartItems = action.payload.map(cartItem => {
                return({
                    product_id: cartItem.product_id,
                    cart_id: cartItem.cart_id,
                    quantity: cartItem.quantity,
                    item_size: cartItem.item_size,
                    user_id: cartItem.user_id,
                    name: cartItem.name,
                    description: cartItem.description,
                    price: cartItem.price,
                    pic_path: cartItem.picture_path
                })
            })
            state.loading = false;
        },
        [getCartItems.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
        [addItemToCart.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [addItemToCart.fulfilled]: (state, action) => {
            state.cartMsg = action.payload;
            state.loading = false;
        },
        [addItemToCart.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }
    }
});

export const { toggleCart, clearCartMsg, addToTempCart } = cartSlice.actions;

export const cartMenuSelector = state => state.cart.cartOpen;
export const cartItemSelector = state => state.cart.cartItems;
export const tempCartSelector = state => state.cart.tempCartItems;
export const cartMsgSelector = state => state.cart.cartMsg;

export default cartSlice.reducer;