import React from 'react'

export default function login() {
  return (
    <form className="login" >
        <div className="contact-form">

          <h6>Email</h6>

          <input className='login-email' style={{ width: "100%" }} name='from_email'></input>

          <h6>Password</h6>

          <input className='password-input' style={{ width: "100%" }} name='subject'></input>

          <a href="/" style={{display: "block"}} >Forgot password </a>

          <input type="submit" value="Sign in" style={{display: "block"}}/>

          <a href="">Sign up</a>

        </div>
    </form>
  )
}

// https://cdn.shopify.com/s/files/1/0371/0749/products/youbeauty_995bdab6-013f-4743-8bfd-ddf882c8c82a_720x.png?v=1630611704
// https://cdn.shopify.com/s/files/1/0371/0749/products/2_3_720x.png?v=1633277508