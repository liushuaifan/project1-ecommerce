import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import {createCart , updateCart, fetchCart}  from '../services/cart';

import "./style/button.css";

function AddMinButton({product}) {

  const [cartValue, setcartValue] = useState(0);
  const { user } = useSelector(state => state.user);

  useEffect(() => {

    async function fetchUserData() {
      const fetchdata = {
        userId: user.id,
        productId: product._id
      }
      try {
        // console.log("userId: ", user.id);
        // console.log("productId: ", product._id);
        const CartResult = await fetchCart(fetchdata);
        console.log("Get user cart item: ", CartResult[0].cartValue);
        setcartValue(CartResult[0].cartValue);
      } catch (error) {
        console.error("Error fetching user cart: ", error);
      }
    }
    fetchUserData();
  }, [user.id, product.id,cartValue]);


  const AddtoCart = (product) => {
    setcartValue(cartValue+1);
    const data = {
      cartValue:cartValue+1,
      email:localStorage.getItem("email"),
      imageurl:product.imageurl,
      price:product.price,
      productname:product.productname,
      productId:product._id,
      userId: user.id
    };

    const fetchdata = {
      productId:product._id,
      userId: user.id
    }

    fetchCart(fetchdata).then(dat=> dat[0] === undefined ? createCart(data) : updateCart(data));
  }

  const MinuCart = (product) => {
    // let cartNumber = cartValue;
    if(cartValue>0) {
      setcartValue(cartValue-1);
      // cartNumber = cartValue - 1;
      const data = {
        cartValue:cartValue-1,
        email:localStorage.getItem("email"),
        imageurl:product.imageurl,
        price:product.price,
        productname:product.productname,
        productId:product._id,
        userId: user.id
      };
      updateCart(data);
    }
  }

  return (
    <div className="addminsbutton">
      <Button variant="contained"  onClick={()=> AddtoCart(product)} style={{height: "60px"}}>Add</Button>
      <h2> {cartValue} </h2>
      <Button variant="contained"  onClick={()=> MinuCart(product)}  style={{height: "60px"}}>Minus</Button>
    </div>
  )
}

export default AddMinButton