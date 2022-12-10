import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const getMembersOrders = createAsyncThunk({

// })

const initialState = {
    cartItems: [{
        id: 0,
        name: '',
        quantity: 0
    }],
    priceTotal: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        
    }
});

// export const {  } = accountPageSlice.actions;

// export const themeSelector = state => state.header.lightThemeOn;


export default cartSlice.reducer;