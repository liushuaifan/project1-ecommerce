import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import './style/ProductDetail.css';


function ProductDetail() {

  const { ProductId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    
    const products = [
      { id:1 , name: 'Apple Watch', price: '$199.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
      { id:2 , name: 'Apple Watch', price: '$299.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
      { id:3 , name: 'Apple Watch', price: '$399.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
      { id:4 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
      { id:5 , name: 'Apple Watch', price: '$599.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
      { id:6 , name: 'Apple Watch', price: '$699.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
      { id:7 , name: 'Apple Watch', price: '$799.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
      { id:8 , name: 'Apple Watch', price: '$899.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
      { id:9 , name: 'Apple Watch', price: '$999.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
      { id:10 , name: 'Apple Watch', price: '$1099.00', description: 'Apple Watch, 126G', img:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/SmartSelect_20180913_104037_Firefox.jpg'},
    ]
    console.log(ProductId);
    setProduct(products.find(product => product.id === Number(ProductId)))
  }, [ProductId]);

  return (
    <div className='productDetail'>
      <h1>Product Detail</h1>
      { product ? (
        <div className='productDetailContent'>
          <img className="detailImage"src={product.img} alt="Apple Watch"/>
          <div className='textContent'>
            <p>Category1</p>
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <p>{product.description}</p>
            <div className='contentButton'>
              <Button variant="contained" >Add</Button>
              <Button variant="outlined" >Edit</Button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default ProductDetail