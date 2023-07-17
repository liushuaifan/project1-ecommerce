import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { createProductAction, updateProductAction } from '../app/productSlice';
import CreateProductForm from "./CreateProductFrom";
import UpdateProductForm from "./UpdateProductForm";

import './style/CreateProducts.css';

function ManageProduct() {

  const dispatch = useDispatch();
  const navigate = new useNavigate();
  const { user } = useSelector(state => state.user);
  const { products } = useSelector(state => state.product);
  const location = useLocation();
  const { ProductId } = useParams();
  const Direction = location.state.Direction;
  const Action = location.state.Action;
  if(Action==='create'){
    const handleSubmit = (data) => {
      console.log("create data", data);
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
    return <CreateProductForm onSubmit={handleSubmit}/>;
  }else if(Action==='update'){
    
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
          if(Direction==='productdetail'){
            navigate(`/Product/${ProductId}`);
          }else if(Direction==='home')
            navigate('/');
        }
      );
    };

    if (products) {
      let product = products.filter(product => product._id===ProductId);
      return <UpdateProductForm onSubmit={handleSubmit} ProductId={ProductId} product={product}/>;
    } else {
      return null;
    }
  }
  
}

export default ManageProduct