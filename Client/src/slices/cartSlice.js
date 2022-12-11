import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const getMembersOrders = createAsyncThunk(

// )

const initialState = {
    cartItems: [{
        id: 0,
        name: '',
        quantity: 0
    }],
    priceTotal: 0,
    cartOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart (state) {
            state.cartOpen = !state.cartOpen;
        }
    }
});

export const { toggleCart } = cartSlice.actions;

export const cartMenuSelector = state => state.cart.cartOpen;

export default cartSlice.reducer;