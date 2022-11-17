import React from 'react';
import './login.css';
import OutsideClickHandler from 'react-outside-click-handler';
import { useState } from 'react';
import axios from 'axios';

const LogIn = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errorMsg, setErrorMsg] = useState('');

    const attemptLogin = async (e) => {
        //Prevent default stops the page from reloading
        e.preventDefault();
         const response = axios.post("http://localhost:4000/auth/login", {
            email: email,
            password: password
        }, { withCredentials: true });
        return (await response).data;
        
        }
        
    

    return (
        <OutsideClickHandler onOutsideClick={props.toggleLog}>
            <div className='logInContainer'>
                <div className="logInCard">
                    <h5 onClick={props.toggleLog}> X </h5>
                    <h1 className='logTitle'> Log In </h1>
                    <form onSubmit={attemptLogin}>
                        <input type='text' 
                        placeholder='Email Address' 
                        id='email'
                        autoComplete='off'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        ></input>
                        <input type='password' 
                        placeholder="Password" 
                        id='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        ></input>
                        <input type="submit"></input>
                    </form>
                    <h3 onClick={props.toggleReg}> Not Registered? Click Here </h3>
                </div>
            </div>
        </OutsideClickHandler>
    );
}

export default LogIn;
