import React, { useState, useContext } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth'
import { auth, admin } from '../firebase-config'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../Componets/Input';
import { Context } from '../Contex';
import { registerInputs } from '../inputConfig';

export default function Register({ setAuth, setAdmin }) {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [warning, setWarning] = useState('');
  const [registerValues, setRegisterValues] = useState({
    email: '',
    password: '',
    repeatPassword: ''
  });
  const { getCartProductsQuantity } = useContext(Context);

  function register(event) {
    event.preventDefault();
    if (document.querySelectorAll('.register-form>input:invalid').length) {
      setSubmitted(true);
      return;
    }
    else if (registerValues.password !== registerValues.repeatPassword) {
      setWarning("Passwords should match!")
      return;
    }
    createUserWithEmailAndPassword(auth, registerValues.email, registerValues.password)
      .then(() => {
        const login = async () => {
          setPersistence(auth, browserSessionPersistence)
          await signInWithEmailAndPassword(
            auth,
            registerValues.email,
            registerValues.password
          );
          sessionStorage.setItem('loggedIn', auth.currentUser.email)

          getCartProductsQuantity()

          setAuth(true);
          navigate('/collections');

          if (registerValues.email === admin) {
            sessionStorage.setItem('admin', true)
            setAdmin(true);
          }
        }
        login()
      })
      .catch(err => {
        let error = err.code.toString().slice(5).replaceAll('-', ' ') + '!!'
        setWarning(error.charAt(0).toUpperCase() + error.slice(1))
      })
  }

  const onChange = (event) => {
    setRegisterValues((user) => ({ ...user, [event.target.name]: event.target.value }))
  }

  return (
    <form className="register-form">
      <h1 className='register_header'>Create account</h1>

      {registerInputs.map((input) =>
        (<Input 
          key={input.id} 
          submitted={submitted} 
          {...input} 
          onChange={onChange} 
          value={registerValues[input.name]} 
        />)
      )}

      <p5 style={{ visibility: "visible" }} className='error-message'>{warning}</p5>
      <button className='sign_button' style={{ display: "block", marginTop: '40px' }} onClick={register}> Create </button>
      <p>
        <Link to='/login'>Sign In</Link>
      </p>
    </form>
  )
}