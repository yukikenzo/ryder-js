import React, { useState } from 'react'
import { admin } from '../firebase-config'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";

export default function Login({ isAuth, setAuth, setAdmin }) {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const auth = getAuth();

  function logout() {
    signOut(auth).then(() => {
      setAdmin(false);
      setAuth(false);
      sessionStorage.removeItem('loggedIn', 'admin')
    }).catch((error) => {
      void (0)
    });
  }

  const login = async () => {
    if (loginEmail === '') {
      document.querySelector('.login-form>.login-email+p5').innerHTML = 'Fill all fields!!';
      document.querySelector('.login-form>.login-email').style.borderColor = 'red'
    }

    else if (loginPassword === '') {
      document.querySelector('.login-form>.password-input+p5').innerHTML = 'Fill all fields!!';
      document.querySelector('.login-form>.password-input').style.borderColor = 'red'
    }

    else {
      try {
        setPersistence(auth, browserSessionPersistence)

        await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        sessionStorage.setItem('loggedIn', auth.currentUser.email)
        document.querySelector(".error-message").innerHTML = 'Success';
        setAuth(true);
        navigate('/collections');


        if (loginEmail === admin) {
          sessionStorage.setItem('admin', true)
          setAdmin(true);
        }

      } catch (err) {

        let error = err.code.toString().slice(5).replaceAll('-', ' ') + '!!'
        document.querySelector(".error-message").innerHTML = error.charAt(0).toUpperCase() + error.slice(1);
      }
    }
  }

  function clearWarning(inputBorder) {
    document.querySelector(`.login-form>.${inputBorder}+p5`).innerHTML = '';
    document.querySelector(`.${inputBorder}`).style.borderColor = 'rgb(118, 118, 118)'
  }

  return (
    <form className="login" >
      {isAuth ?
        <div className='logout_div'>
          <h4>You are Logged In!</h4>
          <input className='logout_button' type="button" value={"Sign Out!"} onClick={logout} />
        </div>

        :
        <div className="login-form">

          <h1 className='login_header'>Login</h1>

          <h6 style={{ margin: '0' }}>Email</h6>

          <input value={loginEmail} type={'email'} className='login-email' onChange={event => {
            setLoginEmail(event.target.value)
            clearWarning('login-email')
          }}></input>
          <p5></p5>

          <h6 style={{ margin: '40px 0 0 0' }}>Password</h6>

          <input value={loginPassword} type={'password'} className='password-input' style={{ width: "100%" }} onChange={event => {
            setLoginPassword(event.target.value)
            clearWarning('password-input')
          }}></input>
          <p5></p5>

          <Link style={{ marginBottom: '50px' }} to={'/forgotpassword'}>Forgot your password?</Link>

          <h5 className='error-message'></h5>

          <button type='reset' className='sign_button' style={{ display: "block", marginTop: '30px' }} onClick={login} >Sign in</button>

          <p>
            <Link className='register_link' to='/register'>Create Account</Link>
          </p>

        </div>
      }

    </form>
  )
}