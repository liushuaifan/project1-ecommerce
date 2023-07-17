import React,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography } from '@material-ui/core'
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { updateProductAction } from '../app/productSlice';
import {createCart , updateCart, fetchCart}  from '../services/cart'

import './style/Product.css';
import AddMinButton from './AddMinButton';

function Product({product, admin}) {
  const navigate = new useNavigate();

  const [cartValue, setcartValue] = useState(0);
  // const show = useState(localStorage.getItem("admin") === 'true');

  const { user } = useSelector(state => state.user);

  const handleClick = (product) => {
    navigate(`/Product/${product._id}`);
  }

  const updateProduct = (product) => {
    navigate(`/ManageProduct/Update/${product._id}`, { state: { Direction: "home" , Action: 'update'} });
  }


  return (
    <div>
      <Card >
        <img className="productImage"src={product.imageurl} alt="loading..." onClick={()=> handleClick(product)}/>
        <CardContent>
          <div>
            <Typography dangerouslySetInnerHTML={{ __html: product.productname }} variant='body2' color='textSecondary' />
            {/* <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant='body2' color='textSecondary' /> */}
            <Typography variant="h5">
                ${product.price}
            </Typography>
            <Typography variant="h6" style={{position:"relative",left:"50%", top:"10%"}}>
                remaining:{product.quantity}
            </Typography>
            {/* <Typography variant="h1">
                ${product.quantity}
            </Typography> */}
          </div>
        </CardContent>
        <div className="buttonContainer">
           {localStorage.getItem("login")==='true' && <AddMinButton product={product}/>}
          {localStorage.getItem("login")==='true' && admin==='true' && user.id===product.user && <Button variant="outlined" fullWidth onClick={()=> updateProduct(product)} style={{ height: "60px"}}>Edit</Button>}
        </div>
      </Card>
    </div>
  )
}

export default Product;