import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (data) => {
        const response = await axios.post('http://localhost:4000/api/user/register', {
            first_name: data.fname,
            last_name: data.lname,
            email: data.email,
            password: data.password
        }, {withCredentials: true})
        return response.data;
    }
)

export const logInUser = createAsyncThunk(
    'auth/logInUser',
    async (data) => {
        const response = await axios.post('http://localhost:4000/auth/login', {
            email: data.email,
            password: data.password
        }, { withCredentials: true });
        return response.data;
    }
)    
    
//This thunk is called to see if the member is logged in, so we can decide what to render on some pages
export const getUser = createAsyncThunk(
    'auth/getUser',
    async() => {
        const response = await axios.get('http://localhost:4000/api/user',
        {withCredentials: true});
        return response.data;
    }
)

const initialState = {
    logPw: '',
    logEmail: '',
    register: {
        fname: '',
        lname: '',
        email: '',
        pword: '',
        confirmPword: '',
    },
    user: {},
    isAuthenticated: false,
    error: null,
    loading: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateLogInPassword(state, action) {
            state.logPw = action.payload;
        },
        updateLogInEmail(state, action) {
            state.logEmail = action.payload
        },
        updateRegisterFname(state, action) {
            state.register.fname = action.payload;
        },
        updateRegisterLname(state, action) {
            state.register.lname = action.payload;
        },
        updateRegisterEmail(state, action) {
            state.register.email = action.payload;
        },
        updateRegisterPword(state, action) {
            state.register.pword = action.payload;
        },
        updateRegisterConfirmPword(state, action) {
            state.register.confirmPword = action.payload;
        },
        manageAuthMenu(state, action) {
            state.menuState = action.payload;
        }
       
    }, extraReducers: {
        [getUser.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.loading = false;
            if (state.user.id) {
                state.isAuthenticated = true;
            }
        },
        [getUser.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
        [getUser.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [getUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.loading = false;
            if (state.user.id) {
                state.isAuthenticated = true;
            }
        },
        [getUser.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }
        ,
        [registerUser.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [registerUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.loading = false;
            if (state.user.id) {
                state.isAuthenticated = true;
            }
            state.register = {};
        },
        [registerUser.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }
    }
});

// Action Creators
export const { updateLogInPassword, 
    updateLogInEmail, 
    updateRegisterFname, 
    updateRegisterLname,
    updateRegisterEmail,
    updateRegisterPword,
    updateRegisterConfirmPword,
    manageAuthMenu
} = authSlice.actions;

//Login Selectors
export const logEmailSelector = state => state.auth.logEmail;
export const logPwSelector = state => state.auth.logPw;

//Registration Selectors
export const registerFnameSelector = state => state.auth.register.fname;
export const registerLnameSelector = state => state.auth.register.lname;
export const registerEmailSelector = state => state.auth.register.email;
export const registerPwordSelector = state => state.auth.register.pword;
export const registerConfirmPwordSelector = state => state.auth.register.confirmPword;

//Once Authorised Selectors
export const userSelector = state => state.auth.user;
export const authenticationSelector = state => state.auth.isAuthenticated;

//Menu Selector
export const menuSelector = state => state.auth.menuState;

export default authSlice.reducer;