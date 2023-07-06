import React from 'react'
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <>
    <div className="auth-form-container">
      <h2>Sign In to your account</h2>
      <span className="deletebutton"></span>
      <form className="login-form" >
        <label htmlFor="email">Email</label>
        <input  placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="********" id="password" name="password" />
        <button type="submit" className='submitButton'>Sign In  </button>
      </form>

      <div className='formAgreement'>
        Don't have an account? 
        <a href="/SignUp" style={{color:"blue"}}> SignUp </a>
        
      </div>

      <a href="/updatePassword" className='updatePassword'> Frogot Password </a>
    </div>  
    </>
  )
}

export default Signin;