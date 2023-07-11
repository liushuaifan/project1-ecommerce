import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { updateProductAction } from '../app/productSlice';
import ProductForm from "./ProductForm";

import './style/CreateProducts.css';

function UpdateProducts() {

  const dispatch = useDispatch();
  const navigate = new useNavigate();
  const { user } = useSelector(state => state.user);
  const { product } = useSelector(state => state.product);
  const { ProductId } = useParams();
  console.log("user info: ", user);
  console.log("all product info: ", product);
  console.log("product id: ", ProductId)
  const handleSubmit = (data) => {
    console.log(data)
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
        navigate('/');
      }
    );
  };

  return <ProductForm onSubmit={handleSubmit} />;
}

export default UpdateProducts;