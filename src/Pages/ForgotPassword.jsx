import React, { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPassword() {

    const [email, setEmail] = useState("");
    const auth = getAuth();

    function resetEmail() {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                document.querySelector(".forgotPasswordAlert").style.color = 'green';
                document.querySelector(".forgotPasswordAlert").innerHTML = "Email Sent!";
            })
            .catch((err) => {
                document.querySelector(".forgotPasswordAlert").style.color = 'red';
                let error = err.code.toString().slice(5).replaceAll('-', ' ') + '!!'
                document.querySelector(".forgotPasswordAlert").innerHTML = error.charAt(0).toUpperCase() + error.slice(1);
            });
    }

    const style = {
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '100px'
    }

    const inputStyle = {
        width: '300px'
    }

    return (
        <div style={style}>
            <input type={'email'} placeholder='Your Email' style={inputStyle} onChange={event => { setEmail(event.target.value) }} ></input>
            <button onClick={resetEmail}>Sent Email</button>
            <p5 className='forgotPasswordAlert'></p5>
        </div>
    )
}
