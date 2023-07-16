import React, { useEffect, useState,useLayoutEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import Autocomplete from '@mui/material/Autocomplete';

function Navbar() {

  const { products } = useSelector(state => state.product); 
  const navigate = useNavigate();
  const [login, setlogin] = useState(true);
  const handleInputChange = (event,value) =>{  
      // console.log(value);
      // console.log(products);
      const copy = products.find(product => product.productname === value);
      console.log(copy);
      // navigate('/Product/' + copy._id);
      navigate(`/Product/${copy._id}`);
  }
  
  const handleClick = () =>{
    setlogin(false);
    localStorage.setItem("login",false);
    navigate('/signin')
  }

  // useLayoutEffect(() => {
  //   setlogin(localStorage.getItem("login"))
  //   console.log(login+"1");
  //   console.log(localStorage.getItem("login")+"2")
  // },[])

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

      {/* <Autocomplete
      id="country-select-demo"
      sx={{ width: 300, color:'red' }}
      options={products}
      onInputChange={handleInputChange}
      autoHighlight
      getOptionLabel={(option) => option.productname}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>

          {option.productname} 
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    /> */}






    {/* <input
        type="text"
        placeholder="Search here"
        className='searchbar'
    /> */}

    <ul>

       {localStorage.getItem("login")==='true' ? <button onClick={handleClick}  style={{color:'white',backgroundColor:"black"}}>Logout</button> : <Link to="/SignIn">SignIn</Link>}


       <Link to="/SignUp">SignUp</Link> 

       {/* <Link to="/updatePassword">updatePassword</Link> */}

       {localStorage.getItem("login")==='true' && <Link to="/Cart">Cart</Link>}



    </ul>


  </nav>
  )
}

export default Navbar