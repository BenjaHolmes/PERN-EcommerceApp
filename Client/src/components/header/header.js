import React from 'react';
import './header.css'
import img1 from '../../imgs/BillionLogo.png';
import img2 from '../../imgs/cartIcon.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCart from './shoppingCart/shoppingCart';
import LogIn from '../login/login.js';
import Register from '../register/register';
import OutsideClickHandler from 'react-outside-click-handler';
import {useDispatch, useSelector} from 'react-redux';
import { manageAuthMenu, menuSelector } from '../../slices/authSlice';

const Header = () => {
    const dispatch = useDispatch();
    const authMenu = useSelector(menuSelector);

    const navigate = useNavigate();

    const handleOutsideClick = () => {
        dispatch(manageAuthMenu('Closed'))
    }

    return (
        <div>
        <div className='header-container'>
            <div className="logo" onClick={()=>navigate("/")}>
                <img src={img1} alt="" />
                 One<span>Billion</span> </div>
            <div className="midButtons">
                <div className="clothing" onClick={()=>navigate("/products")}> Clothing </div>
                <div className="accessories" onClick={()=>navigate("/products")}> Accessories </div>
                <div className="footwear" onClick={()=>navigate("/products")}> Footwear </div>
                <div className='Log In' onClick={() => navigate("/account")}> Account </div>
            </div>
        </div>
            {/* <OutsideClickHandler> */}
                {/* Needs on Click to open put back */}
                <div className="cartButton"> 
                    <img src={img2} alt='' />   
                </div>
                {/* {toggleCart === 'true' ? <ShoppingCart toggleCart={cartToggle}/> : '' } */}
            {/* </OutsideClickHandler> */}
        {authMenu === 'Log In' ? <LogIn handleOutsideClick={handleOutsideClick}/> : '' }
        {authMenu === 'Register' ? <Register /> : ''}
        </div>
    );
}

export default Header;
