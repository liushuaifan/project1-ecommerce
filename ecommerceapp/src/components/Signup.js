import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUpUser } from '../app/userSlice';

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
  
   
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    dispatch(signUpUser(formData)).then(() => navigate('/SignIn'));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
    <div className="auth-form-container">
      <h2>Sign Up an account</h2>
      <span className="deletebutton"></span>


      <form className="login-form" onSubmit = {handleSubmit} >
        <label htmlFor="email">Email</label>
        <input  placeholder="youremail@gmail.com" id="email" name="email" value = {formData.email} onChange={handleChange}/>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="********" id="password" name="password" value = {formData.password} onChange={handleChange}/>
        <button type="submit" className='submitButton' onSubmit = {handleSubmit}>Create account  </button>
      </form>


      <div className='formAgreement'>
        Already Have an account?
        <a href="/SignIn" style={{color:"blue"}}> SignIn </a>
        
      </div>


    </div>  
    </>
  )
}

