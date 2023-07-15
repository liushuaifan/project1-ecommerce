import React from 'react'
import { useState, useEffect } from 'react';
import { useParams,useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

import './style/ProductDetail.css';
import AddMinButton from './AddMinButton';


function ProductDetail() {

  
  const { ProductId } = useParams();
  const [product, setProduct] = useState(null);

  const { products } = useSelector(state => state.product);
  
  useEffect(() => {
    setProduct(products.find(product => product._id === ProductId));
  }, [products, ProductId]);
  
  const navigate = new useNavigate();
  const updateProduct = (product) => {
    navigate(`/UpdateProducts/${product._id}`, {state: { extraParam: "productdetail" }});
  }

  return (
    <div className='productDetail'>
      <h1>Product Detail</h1>
      { product ? (
        <div className='productDetailContent'>
          <img className="detailImage"src={product.imageurl} alt="Apple Watch"/>
          <div className='textContent'>
            <h2>{product.productname}</h2>
            <h3>${product.price}</h3>
            <p>{product.description}</p>
            <div className='contentButton'>
              <AddMinButton product={product}/>
              <Button variant="outlined" onClick={()=> updateProduct(product)}>Edit</Button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default ProductDetail