import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="nav">
    <Link to="/" className="site-title">
      Management Chuwa
    </Link>
    <ul>

      <Link to="/SignIn">SignIn</Link>


      <Link to="/SignUp">SignUp</Link>

      <Link to="/UpdatePassword">UpdatePassword</Link>

    </ul>


  </nav>
  )
}

export default Navbar