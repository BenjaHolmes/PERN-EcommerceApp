import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const getMembersOrders = createAsyncThunk({

// })

const initialState = {
    products: [],
    filteredProducts: [],
    chosenProduct: {
        id: 0,
        name: '',
        description: '',
        price: 0,
        pic_path: ''
    },
    productRecs: [],
    chosenProductReviews: [],
    pageNo: 1,
    searchParam: 'All Products'
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        
    }
});

// export const {  } = accountPageSlice.actions;

// export const themeSelector = state => state.header.lightThemeOn;


export default productsSlice.reducer;