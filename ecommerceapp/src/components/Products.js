import React, { useEffect, useState }from 'react'
import Product from './Product';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsAction } from '../app/productSlice';

import './style/Products.css';

function Products() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, []);

  const { products } = useSelector(state => state.product);

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
        {products && products.map((product)=>(
            <div className="productGridItem" key={product.id}>
              <Product product={product}/>
            </div>
          ))}  
      </div>   
    </div>
  )
}

export default Products