import React, { useEffect, useState }from 'react'
import Product from './Product';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsAction } from '../app/productSlice';

import './style/Products.css';

function Products() {

  const dispatch = useDispatch();

  // const products = [
  //   { id:1 , name: 'Apple Watch', price: '$199.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
  //   { id:2 , name: 'Apple Watch', price: '$299.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
  //   { id:3 , name: 'Apple Watch', price: '$399.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
  //   { id:4 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
  //   { id:5 , name: 'Apple Watch', price: '$599.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
  //   { id:6 , name: 'Apple Watch', price: '$699.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
  //   { id:7 , name: 'Apple Watch', price: '$799.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
  //   { id:8 , name: 'Apple Watch', price: '$899.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
  //   { id:9 , name: 'Apple Watch', price: '$999.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
  //   { id:10 , name: 'Apple Watch', price: '$1099.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
  // ]

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, []);

  // const { products } = useSelector(state => state.products);

  const navigate = new useNavigate();
  
  const handleClick = () => {
    navigate('/CreateProducts');
  }
  
  return (
    <div className='productContent'>
      <div className='productNav'>
        <h1>Products</h1>
        <Button variant="contained" onClick={handleClick}>Add Product</Button>
      </div>
      <div className="productGrid">
        {/* {products.map((product)=>(
            <div className="productGridItem" key={product.id}>
                <Product product={product}/>
            </div>
        ))} */}
      </div>   
    </div>
  )
}

export default Products