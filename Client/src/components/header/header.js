import React from 'react';
import './header.css'
import { useState } from 'react';
import ShoppingCart from './shoppingCart/shoppingCart';
import LogIn from '../login/login.js';
import Register from '../register/register';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [toggleCart, setToggleCart] = useState('hidden');
    const [toggleLogIn, setToggleLogIn] = useState('hidden');
    const [toggleReg, setToggleReg] = useState('hidden');
    
    function cartToggle() {
        if (toggleCart === 'hidden') {
            setToggleCart('show');
        } else {
            setToggleCart('hidden');
        }
    }
    function logToggle() {
        if (toggleLogIn === 'hidden') {
            setToggleLogIn('show');
            setToggleReg('hidden')
        } else {
            setToggleLogIn('hidden');    
        }
    }
    function regToggle() {
        if (toggleReg === 'hidden') {
            setToggleReg('show');
            setToggleLogIn('hidden');
        } else {
            setToggleReg('hidden');    
        }
    }
    const navigate = useNavigate();
    return (
        <div>
        <div className='header-container'>
            <div className="logo"> Logo </div>
            <div className="home" onClick={()=>navigate("/")}> Home </div>
            <div className="clothing" onClick={()=>navigate("/products")}> Clothing </div>
            <div className="accessories" onClick={()=>navigate("/products")}> Accessories </div>
            <div className="footwear" onClick={()=>navigate("/products")}> Footwear </div>
            <div className='Log In' onClick={logToggle}> Log In </div>
            <div className="cartButton"> 
                <div class="buttonContainer" onClick={cartToggle}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>
            
        </div>
        {toggleCart === 'show' ? <ShoppingCart /> : '' }
        {toggleLogIn === 'show' ? <LogIn toggleLog={logToggle} toggleReg={regToggle} /> : '' }
        {toggleReg === 'show' ? <Register toggleLog={logToggle} toggleReg={regToggle} /> : ''}
        </div>
    );
}

export default Header;
