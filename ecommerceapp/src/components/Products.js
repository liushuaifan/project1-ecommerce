import React from 'react'
import Product from './Product';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

import './style/Products.css';

function Products() {

  const products = [
    { id:1 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
    { id:2 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
    { id:3 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
    { id:4 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
    { id:5 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
    { id:6 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
    { id:7 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
    { id:8 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
    { id:9 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
    { id:10 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
  ]
  const navigate = new useNavigate();
  
  const handleClick = () => {
    navigate('/CreateProducts');
  }
  
  return (
    <div className='productContent'>
      <div className='productNav'>
        <h1>Products</h1>
        <Button variant="contained" onClick={handleClick}>Add Product</Button>
      </div>
      <div className="productGrid">
        {products.map((product)=>(
            <div className="productGridItem" key={product.id}>
                <Product product={product}/>
            </div>
        ))}
      </div>   
    </div>
  )
}

export default Products