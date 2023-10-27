import React from 'react'

export default function Login({ isAuth }) {
  return (
    <form className="login" >
      {isAuth ?
        <div className='logout_div'>
          <h4>You are Logged In!</h4>
        </div>
        :
        null
      }
    </form>
  )
}