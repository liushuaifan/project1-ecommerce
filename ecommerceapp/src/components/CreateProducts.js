import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { createProductAction } from '../app/productSlice';
import NewProductForm from "./newProductFrom";

import './style/CreateProducts.css';

function CreateProducts() {

  const dispatch = useDispatch();
  const navigate = new useNavigate();
  const { user } = useSelector(state => state.user);
  const { products } = useSelector(state => state.product);
  const handleSubmit = (data) => {
    dispatch(createProductAction({ 
      userId: user.id, 
      productname: data.productname, 
      description: data.description,
      price: data.price, 
      quantity: data.quantity,
      imageurl: data.imageurl
     })).then(
      () => {
        navigate('/');
      }
    );
  };

  return <NewProductForm onSubmit={handleSubmit}/>;
}

export default CreateProducts;