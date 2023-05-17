import React, { useState, useContext } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth'
import { auth, admin } from '../firebase-config'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../Componets/Input';
import { Context } from '../Contex';

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

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      className: 'login-email',
      style: { margin: '0' },
      error: 'Not valid email!',
      h6: 'Email',
      required: true,
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      className: 'password-input',
      style: { margin: '40px 0 0 0' },
      error: 'Password should be at least 8 characters and include at least 1 letter, 1 number and 1 special character!',
      h6: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*?])[a-zA-Z0-9!@#$%^&*?]{8,}$`,
      required: true,
    },
    {
      id: 3,
      name: 'repeatPassword',
      type: 'password',
      className: 'repeat-password',
      style: { margin: '40px 0 0 0' },
      error: 'Passwords should match!',
      h6: 'Repeat Password',
      pattern: registerValues.password,
      required: true,
    }
  ];

  return (
    <form className="register-form">
      <h1 className='register_header'>Create account</h1>

      {inputs.map((input) => (<Input key={input.id} submitted={submitted} {...input} onChange={onChange} value={registerValues[input.name]} />))}

      <p5 style={{ visibility: "visible" }} className='error-message'>{warning}</p5>
      <button className='sign_button' style={{ display: "block", marginTop: '40px' }} onClick={register}> Create </button>
      <p>
        <Link to='/login'>Sign In</Link>
      </p>
    </form>
  )
}