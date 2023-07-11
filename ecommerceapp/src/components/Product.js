import React,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography } from '@material-ui/core'
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { updateProductAction } from '../app/productSlice';

import './style/Product.css';

function Product({product, admin}) {

  const navigate = new useNavigate();

  const [cartValue, setcartValue] = useState(0);
  // const show = useState(localStorage.getItem("admin") === 'true');
  const handleClick = (product) => {
    // console.log(admin);
    // console.log(product);
    navigate(`/Product/${product._id}`);
  }

  const updateProduct = (product) => {
    // console.log(product);
    navigate(`/UpdateProducts/${product._id}`, { state: { extraParam: "home" } });
  }

  const AddtoCart = (product) => {
    setcartValue(cartValue+1);
    // console.log(product);
    console.log({
      cartValue:cartValue+1,
      email:localStorage.getItem("email"),
      imageurl:product.imageurl,
      price:product.price,
      productname:product.productname 
    });
  }

  const MinuCart = (product) => {
    let cartNumber = cartValue;
    if(cartValue>0) {
      setcartValue(cartValue-1);
      cartNumber = cartValue - 1;
    }
    console.log({
      cartValue:cartNumber,
      email:localStorage.getItem("email"),
      imageurl:product.imageurl,
      price:product.price,
      productname:product.productname
    });
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
           <Button variant="contained"  onClick={()=> AddtoCart(product)} style={{height: "60px"}}>Add</Button>
           <h1> {cartValue} </h1>
           <Button variant="contained"  onClick={()=> MinuCart(product)}  style={{height: "60px"}}>Minus</Button>
          {admin==='true' && <Button variant="outlined" fullWidth onClick={()=> updateProduct(product)} style={{ height: "60px"}}>Edit</Button>}
        </div>
      </Card>
    </div>
  )
}

export default Product;