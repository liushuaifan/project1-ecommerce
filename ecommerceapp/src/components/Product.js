import React,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography } from '@material-ui/core'
import Button from '@mui/material/Button';
import './style/Product.css';

function Product({product, admin}) {

  const navigate = new useNavigate();
  // const show = useState(localStorage.getItem("admin") === 'true');
  const handleClick = (product) => {
    console.log(admin);
    // navigate(`/Product/${product.id}`);
  }


  return (
    <div>
      <Card >
        <img className="productImage"src={product.img} alt="Apple Watch" onClick={()=> handleClick(product)}/>
        <CardContent>
          <div>
            <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant='body2' color='textSecondary' />
            <Typography variant="h5">
                {product.price}
            </Typography>
          </div>
        </CardContent>
        <div className="buttonContainer">
           <Button variant="contained" fullWidth onClick={()=> handleClick(product)}>Add</Button>
          {admin==='true' && <Button variant="outlined" fullWidth>Edit</Button>}
        </div>
      </Card>
    </div>
  )
}

export default Product;