import React from 'react'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Navbar() {
  return (
    <nav className="nav">
    <Link to="/" className="site-title">
      Management Chuwa
    </Link>

    {/* <Autocomplete
      disablePortal
      id="combo-box-demo"
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    /> */}

    <input
        type="text"
        placeholder="Search here"
        className='searchbar'
    />

    <ul>

      <Link to="/SignIn">SignIn</Link>


      <Link to="/SignUp">SignUp</Link>

      <Link to="/Cart">Cart</Link>

    </ul>


  </nav>
  )
}

export default Navbar