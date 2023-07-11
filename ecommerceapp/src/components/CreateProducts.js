import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { createProductAction } from '../app/productSlice';
import ProductForm from "./ProductForm";

import './style/CreateProducts.css';

function CreateProducts() {

  const dispatch = useDispatch();
  const navigate = new useNavigate();
  const { user } = useSelector(state => state.user);

  const handleSubmit = (data) => {
    console.log(data)
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

  // const [product, setProduct] = useState({
  //   name: "",
  //   description: "",
  //   category: "",
  //   price: "",
  //   imageLink: "",
  // });

  // const handleChange = (e) => {
  //   setProduct({
  //     ...product,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   navigate('/');
    
  // };

  return <ProductForm onSubmit={handleSubmit} />;

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <label>
  //       Product Name:
  //       <input
  //         type="text"
  //         name="name"
  //         value={product.name}
  //         onChange={handleChange}
  //       />
  //     </label>
  //     <label>
  //       Description:
  //       <input
  //         type="text"
  //         name="description"
  //         value={product.description}
  //         onChange={handleChange}
  //       />
  //     </label>
  //     <label>
  //       Category:
  //       <select name="category" value={product.category} onChange={handleChange}>
  //         <option value="">Electronics</option>
  //         <option value="category1">Laptop</option>
  //         <option value="category2">Phone</option>
  //       </select>
  //     </label>
  //     <label>
  //       Price:
  //       <input
  //         type="text"
  //         name="price"
  //         value={product.price}
  //         onChange={handleChange}
  //       />
  //     </label>
  //     <label>
  //       Image Link:
  //       <input
  //         type="text"
  //         name="imageLink"
  //         value={product.imageLink}
  //         onChange={handleChange}
  //       />
  //     </label>
  //     <input type="submit" value="Submit"/>
  //   </form>
  // );
}

export default CreateProducts;