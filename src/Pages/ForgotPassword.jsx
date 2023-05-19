import React, { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Input from '../Componets/Input';
import { forgotPasswordInputs } from '../inputConfig';

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
                setWarning({ value: 'Email Sent!', style: { color: 'green', margin: '0' } });
                alert("Email sent!");
            })
            .catch((err) => {
                let error = err.code.toString().slice(5).replaceAll('-', ' ') + '!!'
                setWarning({ value: error.charAt(0).toUpperCase() + error.slice(1), style: { color: 'red', margin: '0' } })
            });
    }

    return (
        <form className='forgotPasswordContainer'>
            <Input submitted={false} {...forgotPasswordInputs} value={email} onChange={(e) => setEmail(e.target.value)} />
            <p3 style={warning.style} className='error-message'>{warning.value}</p3>
            <button className='sign_button' onClick={resetEmail}>Reset Password</button>
        </form>
    )
}