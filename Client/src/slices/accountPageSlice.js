import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const getMembersOrders = createAsyncThunk({

// })

const initialState = {
    membersOrders: [],
    menu: 'Log In'
}

const accountPageSlice = createSlice({
    name: 'accountPage',
    initialState,
    reducers: {
        changeMenu(state, action) {
            state.menu = action.payload;
        }
    }
});

export const { changeMenu } = accountPageSlice.actions;

export const menuSelector = state => state.accountPage.menu;


export default accountPageSlice.reducer;