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

const Header = () => {
    const [toggleCart, setToggleCart] = useState('false');
    const [toggleLogIn, setToggleLogIn] = useState('hidden');
    const [toggleReg, setToggleReg] = useState('hidden');
    
    function cartToggle() {
        if (toggleCart === 'false') {
            setToggleCart('true');
        } else {
            setToggleCart('false');
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
            <div className="logo" onClick={()=>navigate("/")}>
                <img src={img1} alt="" />
                 One<span>Billion</span> </div>
            <div className="midButtons">
                <div className="clothing" onClick={()=>navigate("/products")}> Clothing </div>
                <div className="accessories" onClick={()=>navigate("/products")}> Accessories </div>
                <div className="footwear" onClick={()=>navigate("/products")}> Footwear </div>
                <div className='Log In' onClick={logToggle}> Account </div>
            </div>
            <OutsideClickHandler onOutsideClick={() => {setToggleCart(false);}}>
                <div className="cartButton" onClick={cartToggle}> 
                    <img src={img2} alt='' />   
                </div>
            </OutsideClickHandler>
        </div>
        {toggleCart === 'true' ? <ShoppingCart toggleCart={cartToggle}/> : '' }
        {toggleLogIn === 'show' ? <LogIn toggleLog={logToggle} toggleReg={regToggle} /> : '' }
        {toggleReg === 'show' ? <Register toggleLog={logToggle} toggleReg={regToggle} /> : ''}
        </div>
    );
}

export default Header;
