import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'
import { Link } from 'react-router-dom';

export default function Register() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

    } catch (error) {
        document.querySelector(".error-message").innerHTML = 'The email or password is incorrect.';
    }
    document.querySelector(".login-email").value="";
    document.querySelector(".password-input").value="";
  }


  return (
    <form className="login" >
      <div className="register-form">

        <h4 className='error-message'></h4>

        <h6>Email</h6>

        <input className='login-email' style={{ width: "100%" }} onChange={event => { setRegisterEmail(event.target.value) }}></input>

        <h6>Password</h6>

        <input type={'password'} className='password-input' style={{ width: "100%" }} onChange={event => { setRegisterPassword(event.target.value) }}></input>

        <h6>Repeat Password</h6>

        <input type={'password'} className='repeat-password' style={{ width: "100%" }} onChange={event => { setRegisterPassword(event.target.value) }}></input>

        <a href="/" style={{ display: "block" }} >Forgot password </a>

        <input type="button" value="Sign Up" style={{ display: "block" }} onClick={register}/>

        <Link to='/login'>Sign In</Link>

      </div>
    </form>
  )
}