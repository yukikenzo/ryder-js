import React, { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPassword() {


    const [email, setEmail] = useState("");
    const auth = getAuth();

    function resetEmail() {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                document.querySelector(".forgotPasswordAlert").innerHTML = "Email Sent!";
            })
            .catch((error) => {
                const errorCode = error.code;
                document.querySelector(".forgotPasswordAlert").innerHTML = errorCode;
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
            <input placeholder='Your Email' style={inputStyle} onChange={event => { setEmail(event.target.value) }} ></input>
            <button onClick={resetEmail}>Sent Email</button>
            <h6 className='forgotPasswordAlert'></h6>
        </div>
    )
}
