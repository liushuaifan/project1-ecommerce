import React from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <>
    <div className="auth-form-container">
      <h2>Sign Up an account</h2>
      <span className="deletebutton"></span>
      <form className="login-form" >
        <label htmlFor="email">Email</label>
        <input  placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="********" id="password" name="password" />
        <button type="submit" className='submitButton'>Create account  </button>
      </form>

      <div className='formAgreement'>
        Already Have an account?
        <a href="/SignIn" style={{color:"blue"}}> SignIn </a>
        
      </div>


    </div>  
    </>
  )
}

export default SignUp;