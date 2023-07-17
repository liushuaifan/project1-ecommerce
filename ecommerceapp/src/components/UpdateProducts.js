import React from "react";
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

  const { products } = useSelector(state => state.product);
  const { user } = useSelector(state => state.user);
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

  if (products) {
    let product = products.filter(product => product._id===ProductId);
    console.log(product)
    return <ProductForm onSubmit={handleSubmit} ProductId={ProductId} product={product}/>;
  } else {
    return null;
  }
}

export default UpdateProducts;