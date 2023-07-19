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
    navigate(`/ManageProduct/Update/${product._id}`, {state: { Direction: "productdetail" , Action:"update"}});
  }

  return (
    <div className='productDetail'>
      <h1>Product Detail</h1>
      { product ? (
        <div className='productDetailContent'>
          <img className="detailImage"src={product.imageurl} alt="Apple Watch"/>
          <div className='textContent' style={{ paddingLeft:"60px", backgroundColor:"WhiteSmoke", width:"500px"}}>
            <h1>{product.productname}</h1>
            <h2>${product.price}</h2>
            <p>{product.description}</p>
            <p> Items Remaining: {product.quantity}</p>
            <div className='contentButton' style={{ marginTop:"80px"}}>
              {localStorage.getItem("login")==='true' && <AddMinButton product={product}/>}
              {localStorage.getItem("login")==='true' 
                && localStorage.getItem("admin")==='true' 
                && <Button variant="outlined" style={{ height: "40px", marginLeft:"60px"}} onClick={()=> updateProduct(product)}>Edit</Button>}
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