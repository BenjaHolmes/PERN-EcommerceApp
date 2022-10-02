import React from 'react';
import './login.css';
import OutsideClickHandler from 'react-outside-click-handler';

const LogIn = (props) => {
    return (
        <OutsideClickHandler onOutsideClick={props.toggleLog}>
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
        </OutsideClickHandler>
    );
}

export default LogIn;
