import React, { useState, useContext } from 'react'
import { admin } from '../firebase-config'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
import Input from '../Componets/Input';
import { Context } from '../Contex';
import { loginInputs } from '../inputConfig';

export default function Login({ isAuth, setAuth, setAdmin }) {
  const [loginValues, setLoginValues] = useState({email: "", password: ""});
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
        loginValues.email,
        loginValues.password
      );
      sessionStorage.setItem('loggedIn', auth.currentUser.email)

      getCartProductsQuantity()

      setAuth(true);
      navigate('/collections');
      if (loginValues.email === admin) {
        sessionStorage.setItem('admin', true)
        setAdmin(true);
      }
    } catch (err) {
      let error = err.code.toString().slice(5).replaceAll('-', ' ') + '!!'
      setWarning(error.charAt(0).toUpperCase() + error.slice(1))
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
        <div className="login-form">
          <h1 className='login_header'>Login</h1>

          <Input submitted={submitted} {...loginInputs.emailInput} value={loginValues.email} onChange={(e) => setLoginValues((prev) => ({...prev, email : e.target.value}))} />
          <Input submitted={submitted} {...loginInputs.passwordInput} value={loginValues.password} onChange={(e) => setLoginValues((prev) => ({...prev, password : e.target.value}))} />

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