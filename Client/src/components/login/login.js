import React from 'react';
import './login.css';

const LogIn = (props) => {
    return (
        <div className='logInContainer'>
            <div className="logInCard">
                <h5 onClick={props.toggleLog}> X </h5>
                <h1 className='logTitle'> Log In </h1>
                <form>
                    <input value='Email Address'></input>
                    <input value="Password"></input>
                    <input type="submit"></input>
                </form>
                <h3 onClick={props.toggleReg}> Not Registered? Click Here </h3>
            </div>
        </div>
    );
}

export default LogIn;
