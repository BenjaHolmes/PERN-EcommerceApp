import React from 'react';
import './login.css';
import { useDispatch, useSelector } from 'react-redux';
import { logEmailSelector, 
    logPwSelector,
    updateLogInEmail, 
    updateLogInPassword, 
    logInUser, 
    getUser,
    userSelector, 
    
} from '../../slices/authSlice';
import { menuSelector } from '../../slices/accountPageSlice';
import { changeMenu } from '../../slices/accountPageSlice';
import Register from '../register/register';
import { checkCart } from '../../slices/cartSlice';

const LogIn = () => {
    const dispatch = useDispatch();
    const logEmail = useSelector(logEmailSelector);
    const logPw = useSelector(logPwSelector);
    const menu = useSelector(menuSelector);
    const user = useSelector(userSelector);
    

    const attemptLogin = async () => {
        const data = {
            email: logEmail,
            password: logPw
        }
        dispatch(logInUser(data)).then(dispatch(checkCart(user.id)));
        }


    return (
        
            <div className='logInContainer'>
                { menu === 'Log In' ?
                <div className="logInCard">
                    <h1 className='logTitle'> Log In </h1>
                    
                        <input type='text' 
                        placeholder='Email Address' 
                        id='email'
                        autoComplete='off'
                        onChange={e => dispatch(updateLogInEmail(e.target.value))}
                        value={logEmail}
                        required
                        ></input>
                        <input placeholder='Password' type='password' autoComplete='off' 
                        onChange={e => dispatch(updateLogInPassword(e.target.value))} />
                        <button className='submitBtn' onClick={attemptLogin}> Submit </button> 
                    
                    <h3 onClick={() => dispatch(changeMenu('Register'))}> Not Registered? Click Here </h3>
                </div>
                : <Register /> }
            </div>
            
    );
}

export default LogIn;
