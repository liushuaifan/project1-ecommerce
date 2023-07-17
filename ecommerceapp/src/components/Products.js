import React, { useEffect, useState }from 'react'
import Product from './Product';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsAction } from '../app/productSlice';
import { fetchUserInfo } from '../services/auth';
import Pagination from './Pagination';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import './style/Products.css';

function Products() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, []);

  const { products } = useSelector(state => state.product);
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    setSortedProducts(products);
}, [products]);

  
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(10);
  let searchValue = 0;
  const [sortedProducts, setSortedProducts] = useState(null);
  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;
  

  const currentProducts = Array.isArray(sortedProducts) ? sortedProducts.slice(firstProductIndex, lastProductIndex) : [];
  
  

  const navigate = new useNavigate();
  
  const handleClick = () => {
    navigate('/ManageProduct/Create', {state: { Action:"create"}});
  }

  const handleInputChange = (event,value) =>{  
    const copy = products.find(product => product.productname === value);
    console.log(copy);
    // navigate('/Product/' + copy._id);
    if(copy!==undefined) searchValue = copy._id;
}

const handleSearchChange = () =>{
  navigate('/Product/' + searchValue);
}

  const handleShowProducts = async() => {
    const fetchdata = {
      userId: user.id
    }
    const userInfo = await fetchUserInfo(fetchdata);
    setSortedProducts(sortedProducts.filter(product=>userInfo[0].products.includes(product._id)));
  }
  
  const handleSort = (e) => {
    const sortType = e.target.value;
    
    let sortedProducts = [...products];

    switch (sortType) {
        case "Last Added":
            sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
            setSortedProducts(products);
            break;
        case "sortltoh":
            sortedProducts.sort((a, b) => a.price - b.price);
            setSortedProducts(sortedProducts);
            break;
        case "sorthtol":
            sortedProducts.sort((a, b) => b.price - a.price);
            setSortedProducts(sortedProducts);
            break;
        default:
            break;
    }
}

  return (
    <div className='productContent'>
      <div className='productNav'>
        <h1>Products</h1>
        <img src="" />
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 300, color:'red' }}
          options={products}
          onInputChange={handleInputChange}
          onChange={handleSearchChange}
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
        />
        <div className='button-container'>
          <select name="sort" id="sort" onChange={handleSort}>
            <option value="Last Added">Last Added</option>
            <option value="sortltoh">Price low to high</option>
            <option value="sorthtol">Price high to low</option>
          </select>
          {localStorage.getItem("admin")==='true' && <Button variant="outlined" style={{ color: 'black', borderColor: 'black' }} onClick={handleShowProducts}>Show My Products</Button>}
          {localStorage.getItem("admin")==='true' && <Button variant="outlined" style={{ color: 'black', borderColor: 'black' }} onClick={handleClick}>Add Product</Button>}
        </div>
      </div>
      <div className="productGrid">
        {currentProducts && currentProducts.map((product)=>(
            <div className="productGridItem" key={product.id}>
              <Product product={product} admin = {localStorage.getItem("admin")}/>
            </div>
          ))}  
        <Pagination totalProducts = {sortedProducts? sortedProducts?.length: 0} productsPerPage={productPerPage} setCurrentPage={setCurrentPage} currentPage = {currentPage}/>
      </div>   
    </div>
  )
}

export default Products