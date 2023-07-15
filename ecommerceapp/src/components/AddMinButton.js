import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import {createCart , updateCart, fetchCart}  from '../services/cart';
import { useDispatch } from 'react-redux';
import { updateProductAction, fetchProductsAction } from '../app/productSlice';

import "./style/button.css";

function AddMinButton({product}) {

  const dispatch = useDispatch();
  const [cartValue, setcartValue] = useState(0);
  const { user } = useSelector(state => state.user);
  // const { product } = useSelector(state => state.product);
  const [fetchdata, setfetchdata] = useState({
    userId: user.id,
    productId: product._id
  })



  const AddtoCart = async  (product) => {
    
    // console.log(product)
    if(localStorage.getItem(`product${product._id}`)==="0"){
      alert("Reach Maximun Quantity!");
      return;
    }
    await dispatch(updateProductAction({ 
      userId: user.id, 
      productId: product._id, 
      quantity:localStorage.getItem(`product${product._id}`)===null? localStorage.setItem(`product${product._id}`, product.quantity): localStorage.getItem(`product${product._id}`)-1,
     }))
    localStorage.setItem(`product${product._id}`, localStorage.getItem(`product${product._id}`)-1);
    
    
    fetchCart(fetchdata).then(dat=>{
        if(dat[0] === undefined){
          setcartValue(1);
          const data = {
            cartValue:1,
            email:localStorage.getItem("email"),
            imageurl:product.imageurl,
            price:product.price,
            productname:product.productname,
            productId:product._id,
            userId: user.id,
          };
          createCart(data);
        }else{
          setcartValue(1+cartValue);
          const data = {
            cartValue:1+dat[0].cartValue,
            email:localStorage.getItem("email"),
            imageurl:product.imageurl,
            price:product.price,
            productname:product.productname,
            productId:product._id,
            userId: user.id
          };
          updateCart(data)
        }
      } 
    );
  }

  const MinuCart = async (product) => {
    // let cartNumber = cartValue;

    if(cartValue>0) {

      await dispatch(updateProductAction({ 
        userId: user.id, 
        productId: product._id, 
        quantity:localStorage.getItem(`product${product._id}`)===null? localStorage.setItem(`product${product._id}`, product.quantity+1): Number(localStorage.getItem(`product${product._id}`))+1,
       }))
      localStorage.setItem(`product${product._id}`, Number(localStorage.getItem(`product${product._id}`))+1);

      fetchCart(fetchdata).then(dat=>{
      
          setcartValue(cartValue-1);
          const data = {
            cartValue:dat[0].cartValue-1,
            email:localStorage.getItem("email"),
            imageurl:product.imageurl,
            price:product.price,
            productname:product.productname,
            productId:product._id,
            userId: user.id
          };
          updateCart(data);
        }
      
      );
    };
    
  }

  return (
    <div className="addminsbutton">
      <Button variant="contained"  onClick={()=> AddtoCart(product)} style={{height: "60px"}}>Add</Button>
      <h2> {cartValue} </h2>
      <Button variant="contained"  onClick={()=> MinuCart(product)}  style={{height: "60px"}}>Minus</Button>
    </div>
  )
}

export default AddMinButton;