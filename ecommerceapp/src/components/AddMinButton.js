import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import {createCart , updateCart, fetchCart}  from '../services/cart';

import "./style/button.css";

function AddMinButton({product}) {

  const [cartValue, setcartValue] = useState(0);
  const { user } = useSelector(state => state.user);
  const [fetchdata, setfetchdata] = useState({
    userId: user.id,
    productId: product._id
  })


  const AddtoCart = (product) => {

  

    // console.log(user.id+" user "  + product._id);
    console.log(product.imageurl);

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

  const MinuCart = (product) => {
    // let cartNumber = cartValue;
    if(cartValue>0) {
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