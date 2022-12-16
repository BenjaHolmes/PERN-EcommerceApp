import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createOrder = createAsyncThunk(
    'accountPage/createOrder',
    async (userId) => {
        const response = await axios.post(`http://localhost:4000/api/order`, {}, {withCredentials: true});
        return response.data;
    }
)

const initialState = {
    membersOrders: [],
    menu: 'Log In',
    loading: false,
    error: null
}

const accountPageSlice = createSlice({
    name: 'accountPage',
    initialState,
    reducers: {
        changeMenu(state, action) {
            state.menu = action.payload;
        }
    }, extraReducers: {
        [createOrder.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [createOrder.fulfilled]: (state) => {
            state.loading = false;
            
        },
        [createOrder.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
    }
});

export const { changeMenu } = accountPageSlice.actions;

export const menuSelector = state => state.accountPage.menu;


export default accountPageSlice.reducer;