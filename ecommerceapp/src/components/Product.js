import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import Button from '@mui/material/Button';
import './Product.css';

function Product({product}) {
  return (
    <div>
      <Card >
        <img className="productImage"src={product.img} alt="Apple Watch" />
        <CardContent>
          <div>
            <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant='body2' color='textSecondary' />
            <Typography variant="h5">
                {product.price}
            </Typography>
          </div>
        </CardContent>
        <div className="buttonContainer">
          <Button variant="contained" fullWidth>Add</Button>
          <Button variant="outlined" fullWidth>Edit</Button>
        </div>

      </Card>
    </div>
   
  )
}

export default Product