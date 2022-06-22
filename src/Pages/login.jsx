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
      sessionStorage.removeItem('logedIn')
      sessionStorage.removeItem('admin')
    }).catch((error) => {
    });
  }

  const login = async () => {
    try {
      setPersistence(auth, browserSessionPersistence)
      await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      sessionStorage.setItem('logedIn', true)
      document.querySelector(".error-message").innerHTML = 'Success';
      setAuth(true);
      navigate(-1);


      if (loginEmail === admin) {
        sessionStorage.setItem('admin', true)
        setAdmin(true);
      }

    } catch (error) {
      document.querySelector(".error-message") ? 
      document.querySelector(".error-message").innerHTML = 'The email or password is incorrect.'
      :
      console.log(error)
    }
  }

  return (
    <form className="login" >
      {isAuth ?
        <div className='logout_div'>
          <h4>You are Logged In!</h4>
          <input className='logout_button' type="button" value={"Sign Out!"} onClick={logout} />
        </div>

        :
        <div className="contact-form">

          <h4 className='error-message'></h4>

          <h6>Email</h6>

          <input className='login-email' style={{ width: "100%" }} onChange={event => { setLoginEmail(event.target.value) }}></input>

          <h6>Password</h6>

          <input type={'password'} className='password-input' style={{ width: "100%" }} onChange={event => { setLoginPassword(event.target.value) }}></input>

          <Link style={{ marginBottom: '50px' }} to={'/forgotpassword'}>Forgot password?</Link>

          <input type="button" value="Sign in" style={{ display: "block", marginTop: '30px' }} onClick={login} />

          <Link to='/register'>Sign Up</Link>

        </div>
      }

    </form>
  )
}