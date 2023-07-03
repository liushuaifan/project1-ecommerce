import React from 'react'
import { Link } from 'react-router-dom';
import Products from './Products';
import Signin from "./Signin"
import Signup from "./Signup"

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">
            <Products />
          </Link>
        </li>
        <li>
          <Link to="/signin">
            <Signin />
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <Signup />
          </Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar