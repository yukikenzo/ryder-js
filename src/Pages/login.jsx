import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'

export default function Login() {

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
      console.log(error.message);
    }
    document.querySelector(".login-email").value="";
    document.querySelector(".password-input").value="";
  }


  return (
    <form className="login" >
      <div className="contact-form">

        <h6>Email</h6>

        <input className='login-email' style={{ width: "100%" }} onChange={event => { setRegisterEmail(event.target.value) }}></input>

        <h6>Password</h6>

        <input className='password-input' style={{ width: "100%" }} onChange={event => { setRegisterPassword(event.target.value) }}></input>

        <a href="/" style={{ display: "block" }} >Forgot password </a>

        <input type="button" value="Sign in" style={{ display: "block" }} onClick={register}/>

        <a href="">Sign up</a>

      </div>
    </form>
  )
}