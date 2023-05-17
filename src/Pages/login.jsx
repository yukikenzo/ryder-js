import React, { useState, useContext } from 'react'
import { admin } from '../firebase-config'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
import Input from '../Componets/Input';
import { Context } from '../Contex';

export default function Login({ isAuth, setAuth, setAdmin }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate();
  const auth = getAuth();
  const [warning, setWarning] = useState('')
  const { setNotifyCart, getCartProductsQuantity } = useContext(Context);

  function logout() {
    signOut(auth).then(() => {
      setAdmin(false);
      setAuth(false);
      sessionStorage.clear()
      setNotifyCart(0);
    }).catch((err) => {
      let error = err.code.toString().slice(5).replaceAll('-', ' ') + '!!'
      setWarning(error.charAt(0).toUpperCase() + error.slice(1))
    });
  }

  const login = async (event) => {
    event.preventDefault();
    if (document.querySelectorAll('.login-form>input:invalid').length) {
      setSubmitted(true);
      return;
    }
    try {
      setPersistence(auth, browserSessionPersistence)
      await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      sessionStorage.setItem('loggedIn', auth.currentUser.email)

      getCartProductsQuantity()

      setAuth(true);
      navigate('/collections');
      if (loginEmail === admin) {
        sessionStorage.setItem('admin', true)
        setAdmin(true);
      }
    } catch (err) {
      let error = err.code.toString().slice(5).replaceAll('-', ' ') + '!!'
      setWarning(error.charAt(0).toUpperCase() + error.slice(1))
    }
  }

  const emailInput = {
    type: 'email',
    className: 'login-email',
    style: { margin: '0' },
    error: 'Not valid email!',
    h6: 'Email',
    required: true,
  };

  const passwordInput = {
    type: 'password',
    className: 'password-input',
    style: { margin: '40px 0 0 0' },
    error: 'Password should be at least 8 characters and include at least 1 letter, 1 number and 1 special character!',
    h6: 'Password',
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$`,
    required: true,
  };

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

          <Input submitted={submitted} {...emailInput} value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
          <Input submitted={submitted} {...passwordInput} value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />

          <Link style={{ marginBottom: '50px' }} to={'/forgotpassword'}>Forgot your password?</Link>
          <p5 style={{ visibility: "visible" }} className='error-message'>{warning}</p5>
          <button className='sign_button' style={{ display: "block", marginTop: '30px' }} onClick={login} >Sign in</button>
          <p>
            <Link className='register_link' to='/register'>Create Account</Link>
          </p>
        </div>
      }
    </form>
  )
}