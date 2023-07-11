import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { updateProductAction } from '../app/productSlice';
import ProductForm from "./ProductForm";

import './style/CreateProducts.css';

function UpdateProducts() {

  const dispatch = useDispatch();
  const navigate = new useNavigate();
  const location = useLocation();
  const extraParam = location.state.extraParam;


  const { user } = useSelector(state => state.user);
  const { product } = useSelector(state => state.product);
  const { ProductId } = useParams();
  const handleSubmit = (data) => {
    dispatch(updateProductAction({ 
      userId: user.id, 
      productId: ProductId, 
      productname: data.productname, 
      description: data.description,
      price: data.price, 
      quantity: data.quantity,
      imageurl: data.imageurl
     })).then(
      () => {
        if(extraParam==='productdetail'){
          navigate(`/Product/${ProductId}`);
        }else if(extraParam==='home')
          navigate('/');
      }
    );
  };

  return <ProductForm onSubmit={handleSubmit} />;
}

export default UpdateProducts;