import React from 'react';
import './register.css';
import OutsideClickHandler from 'react-outside-click-handler';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




const Register = (props) => {
    const [first_name, setFirst_Name] = useState('');
    const [last_name, setLast_Name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = { first_name, last_name, email, password }
        if (passwordMatch) {
            await fetch("http://localhost:4000/api/user/register", {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                mode: 'cors',
                body: JSON.stringify(body)
            }).then((res) => {
                console.log('New Account Registered');
                props.toggleReg();
                navigate(`/account`, {
                    state: {
                        first_name: first_name,
                        last_name: last_name
                    }});
            });
        } else {
            alert('Passwords do not Match, Please Try Again');
        }
    }

    useEffect(() => {
        if (password === confirmpassword) {
            setPasswordMatch(true);
        } else {
            setPasswordMatch(false);
        }
    }, [password, confirmpassword]);

    return (
        <OutsideClickHandler onOutsideClick={props.toggleReg}>
            <div className='regContainer'>
                <div className="regCard">
                    <h5 onClick={props.toggleReg}> X </h5>
                    <h1 className='regTitle'> Register a New Account </h1>
                    <form onSubmit={handleSubmit} >
                        <input onChange={(e) => setFirst_Name(e.target.value)} id="firstname" value={first_name} placeholder='First Name'></input>
                        <input onChange={(e) => setLast_Name(e.target.value)} id="lastname" value={last_name} placeholder='Last Name'></input>
                        <input onChange={(e) => setEmail(e.target.value)} id="emailaddress" value={email} placeholder='Email Address'></input>
                        <input onChange={(e) => setPassword(e.target.value)} id="password" value={password} placeholder="Password" type='password'></input>
                        <input onChange={(e) => setConfirmPassword(e.target.value)} id="confirmpassword" value={confirmpassword} placeholder="Confirm Password" type='password'></input>
                        { passwordMatch === false ? <p> <span> X </span> Passwords Must Match </p> : <p></p> }
                        <input type="submit" ></input>
                    </form>
                    <h3 onClick={props.toggleLog}> Already Registered? Log In Here </h3>
                </div>
            </div>
        </OutsideClickHandler>
    );
}

export default Register;
