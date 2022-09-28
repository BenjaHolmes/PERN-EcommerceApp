import React from 'react';
import './register.css';

const Register = (props) => {
    return (
        <div className='regContainer'>
            <div className="regCard">
                <h5 onClick={props.toggleReg}> X </h5>
                <h1 className='regTitle'> Register a New Account </h1>
                <form>
                    <input value='First Name'></input>
                    <input value='Last Name'></input>
                    <input value='Email Address'></input>
                    <input value="Password"></input>
                    <input type="submit"></input>
                </form>
                <h3 onClick={props.toggleLog}> Already Registered? Log In Here </h3>
            </div>
        </div>
    );
}

export default Register;