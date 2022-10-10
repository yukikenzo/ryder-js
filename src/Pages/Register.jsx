import React from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth'
import { auth, admin } from '../firebase-config'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Register({ setAuth, setAdmin }) {
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  function register() {
    if (registerEmail == '') {
      document.querySelector('.register-form>.login-email+p5').innerHTML = 'Fill all fields!!';
      document.querySelector('.register-form>.login-email').style.borderColor = 'red'
    }

    else if (registerPassword == '') {
      document.querySelector('.register-form>.password-input+p5').innerHTML = 'Fill all fields!!';
      document.querySelector('.register-form>.password-input').style.borderColor = 'red'
    }

    else if (repeatPassword == '') {
      document.querySelector('.register-form>.repeat-password+p5').innerHTML = 'Fill all fields!!';
      document.querySelector('.register-form>.repeat-password').style.borderColor = 'red'
    }

    else if (registerPassword != repeatPassword) {
      document.querySelector(".error-message").innerHTML = 'Passwords should match!!';
    }

    else {
      createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then(() => {
          login()
          document.querySelector(".login-email, .password-input, .repeat-password").value = "";
          document.querySelector(".error-message").style.color = 'green';
          document.querySelector(".error-message").innerHTML = 'Success';

        })
        .catch(err => {
          let error = err.code.toString().slice(5).replaceAll('-', ' ') + '!!'
          document.querySelector(".error-message").innerHTML = error.charAt(0).toUpperCase() + error.slice(1);
        })
    }

  }

  const login = async () => {
    setPersistence(auth, browserSessionPersistence)
    await signInWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    sessionStorage.setItem('loggedIn', auth.currentUser.email)
    setAuth(true);
    navigate('/collections');

    if (registerEmail === admin) {
      sessionStorage.setItem('admin', true)
      setAdmin(true);
    }
  }

  function clearWarning(inputBorder) {
    document.querySelector(`.register-form>.${inputBorder}+p5`).innerHTML = '';
    document.querySelector(`.${inputBorder}`).style.borderColor = 'rgb(118, 118, 118)'
  }

  return (
    <form className="register-form">

      <h1 className='register_header'>Create account</h1>

      <h6 style={{ margin: '0' }}>Email</h6>

      <input type={'email'} className='login-email' style={{ width: "100%" }} onChange={event => {
        setRegisterEmail(event.target.value)
        clearWarning('login-email')
      }}></input>

      <p5></p5>

      <h6 style={{ margin: '40px 0 0 0' }}>Password</h6>

      <input type={'password'} className='password-input' onChange={event => {
        setRegisterPassword(event.target.value)
        clearWarning('password-input')
      }}></input>

      <p5></p5>

      <h6 style={{ margin: '40px 0 0 0' }}>Repeat Password</h6>

      <input type={'password'} className='repeat-password' style={{ width: "100%" }} onChange={event => {
        setRepeatPassword(event.target.value)
        clearWarning('repeat-password')
      }}></input>

      <p5></p5>

      <h5 className='error-message'></h5>

      <button type='reset' className='sign_button' style={{ display: "block", marginTop: '40px' }} onClick={register}> Create </button>

      <p>
        <Link to='/login'>Sign In</Link>
      </p>

    </form>
  )
}