import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import axios from 'axios';

export const getProducts = createAsyncThunk(
    'product/getProducts',
    async () => {
        const response = await axios.get('http://localhost:4000/api/product');
        return response.data;
    }
);

export const getReviews = createAsyncThunk(
    'products/getReviews',
    async (id) => {
        const response = await axios.get(`http://localhost:4000/api/reviews/${id}`);
        return response.data;
    }
);

export const getRecommendations = createAsyncThunk(
    'products/getRecommendations',
    async () => {
        const response = await axios.get('http://localhost:4000/api/product/discover');
        return response.data;
    }
);

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
        
    }, extraReducers: {
        [getProducts.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.products = action.payload;
            state.loading = false;
        },
        [getProducts.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
        [getRecommendations.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getRecommendations.fulfilled]: (state, action) => {
            state.productRecs = action.payload;
            state.loading = false;
        },
        [getRecommendations.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
        [getReviews.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getReviews.fulfilled]: (state, action) => {
            state.chosenProductReviews = action.payload;
            state.loading = false;
        },
        [getReviews.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }
    }
});

// export const {  } = accountPageSlice.actions;

export const productsSelector = state => state.products.products;
export const recSelector = state => state.products.productRecs;
export const reviewSelector = state => state.products.chosenProductReviews;


export default productsSlice.reducer;