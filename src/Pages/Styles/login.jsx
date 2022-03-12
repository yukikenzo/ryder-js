import React from 'react'
import './Styles/login.css';

export default function login() {
  return (
    <form className="login" >
        <div className="contact-form">

          <h6>Email</h6>

          <input className='email-input' style={{ width: "100%" }} name='from_email'></input>

          <h6>Subject</h6>

          <input className='subject-input' style={{ width: "100%" }} name='subject'></input>

          <a href="">Forgot password</a>

          <input type="submit" value="Sign in" />

          <a href="">Sign up</a>

        </div>
    </form>
  )
}
