import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'
import { Link, useNavigate } from 'react-router-dom';
import { admin } from '../firebase-config';

export let isAuth = true;
export let isAdmin = true;

export function setAuth() {
  isAuth = true
}

export default function login(setadmin) {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      document.querySelector(".error-message").innerHTML = 'Success';
      isAuth = true;
      navigate(-1);

      if (loginEmail == admin) {
        isAdmin = true;
        setadmin(true)
      }

    } catch (error) {
      document.querySelector(".error-message").innerHTML = 'The email or password is incorrect.';
      console.log(error)
    }
  }

  return (
    <form className="login" >
      <div className="contact-form">

        <h4 className='error-message'></h4>

        <h6>Email</h6>

        <input className='login-email' style={{ width: "100%" }} onChange={event => { setLoginEmail(event.target.value) }}></input>

        <h6>Password</h6>

        <input type={'password'} className='password-input' style={{ width: "100%" }} onChange={event => { setLoginPassword(event.target.value) }}></input>

        <Link style={{marginBottom: '50px'}} to={'/forgotpassword'}>Forgot password?</Link>

        <input type="button" value="Sign in" style={{ display: "block", marginTop: '30px'}} onClick={login} />

        <Link to='/register'>Sign Up</Link>

      </div>
    </form>
  )
}