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
  console.log(product);
  const navigate = new useNavigate();

  const [cartValue, setcartValue] = useState(0);
  // const show = useState(localStorage.getItem("admin") === 'true');

  const { user } = useSelector(state => state.user);

  const handleClick = (product) => {
    navigate(`/Product/${product._id}`);
  }

  const updateProduct = (product) => {
    navigate(`/UpdateProducts/${product._id}`, { state: { extraParam: "home" } });
  }


  return (
    <div>
      <Card >
        <img className="productImage"src={product.imageurl} alt="loading..." onClick={()=> handleClick(product)}/>
        <CardContent>
          <div>
            <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant='body2' color='textSecondary' />
            <Typography variant="h5">
                ${product.price}
            </Typography>
          </div>
        </CardContent>
        <div className="buttonContainer">
           <AddMinButton product={product}/>
          {admin==='true' && <Button variant="outlined" fullWidth onClick={()=> updateProduct(product)} style={{ height: "60px"}}>Edit</Button>}
        </div>
      </Card>
    </div>
  )
}

export default Product;