import React from 'react'
import { Link } from 'react-router-dom';
function Signin() {
  return (
    <>
    <div className="auth-form-container">
    <h2>Sign In to your account</h2>
    <h3 className="deletebutton">delete button</h3>
    <form className="login-form" >
        <label htmlFor="email">email</label>
        <input  placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">password</label>
        <input type="password" placeholder="********" id="password" name="password" />
        <button type="submit">Sign In</button>
    </form>
    Don't have an account? Register here.<Link to= "/signUp"> Sign Up </Link>

    <Link to= "/ForgotPassword"> ForgotPassword </Link>
    </div>  
    </>
  )
}

export default Signin;