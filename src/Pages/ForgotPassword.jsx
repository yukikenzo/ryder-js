import React, { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import FormInput from '../Componets/FormInput';

export default function ForgotPassword() {
    const [warning, setWarning] = useState({
        value: '',
        style: {}
    });
    const [email, setEmail] = useState("");
    const auth = getAuth();

    function resetEmail(event) {
        event.preventDefault();
        if (document.querySelectorAll('.forgotPasswordContainer>input:invalid').length) {
          return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setWarning({ value: 'Email Sent!', style: { color: 'green', margin: '0' } })
            })
            .catch((err) => {
                alert("error")
                let error = err.code.toString().slice(5).replaceAll('-', ' ') + '!!'
                setWarning({ value: error.charAt(0).toUpperCase() + error.slice(1), style: { color: 'red', margin: '0' } })
            });
    }

    const style = {
        height: '350px',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 'auto',
        paddingBottom: '100px'
    }

    const emailInput = {
        id: 1,
        name: 'email',
        type: 'email',
        className: 'login-email',
        style: { margin: '0 0 20px 0' },
        error: 'Not valid email!',
        h6: 'Email',
        required: true,
    };

    return (
        <form className='forgotPasswordContainer' style={style}>
            <FormInput submitted={false} {...emailInput} value={email} onChange={(e) => setEmail(e.target.value)} />
            <p5 style={warning.style} className='error-message'>{warning.value}</p5>
            <button className='sign_button' onClick={resetEmail}>Sent Email</button>
        </form>
    )
}
