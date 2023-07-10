import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { authUser } from '../app/userSlice';

function Signin() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
      email: '',
      password: ''
    });

  const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    dispatch(authUser(formData)).then((a) => {
      // console.log(localStorage.getItem("token"))
      if(localStorage.getItem("login")==="true") navigate(location.state?.from || '/') 
      else alert("wrong password");
      // navigate(location.state?.from || '/');
    });
  };

  return (
    <>
    <div className="auth-form-container">
      <h2>Sign In to your account</h2>
      <span className="deletebutton"></span>



      <form className="login-form" onSubmit = {handleSubmit}>
        <label htmlFor="email">Email</label>
        <input  placeholder="youremail@gmail.com" id="email" name="email"  value = {formData.email} onChange={handleChange}/>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="********" id="password" name="password" value = {formData.password} onChange={handleChange}/>
        <button type="submit" className='submitButton' onSubmit = {handleSubmit}>Sign In  </button>
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