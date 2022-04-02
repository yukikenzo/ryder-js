import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'
import { Link } from 'react-router-dom';

export default function Login() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

    } catch (error) {
        document.querySelector(".error-message").innerHTML = 'The email or password is incorrect.';
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

        <a href="/" style={{ display: "block" }} >Forgot password </a>

        <input type="button" value="Sign in" style={{ display: "block" }} onClick={login} />

        <Link to='/register'>Sign Up</Link>

      </div>
    </form>
  )
}