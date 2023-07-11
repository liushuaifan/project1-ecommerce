import React,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography } from '@material-ui/core'
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { updateProductAction } from '../app/productSlice';

import './style/Product.css';

function Product({product, admin}) {

  const navigate = new useNavigate();
  // const show = useState(localStorage.getItem("admin") === 'true');
  const handleClick = (product) => {
    console.log(admin);
    console.log(product);
    // navigate(`/Product/${product.id}`);
  }
  const dispatch = useDispatch();

  const updateProduct = (product) => {
    navigate(`/UpdateProducts/${product._id}`);
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
           <Button variant="contained" fullWidth onClick={()=> handleClick(product)}>Add</Button>
          {admin==='true' && <Button variant="outlined" fullWidth onClick={()=> updateProduct(product)}>Edit</Button>}
        </div>
      </Card>
    </div>
  )
}

export default Product;