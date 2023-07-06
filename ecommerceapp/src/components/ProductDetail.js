import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import './style/ProductDetail.css';


function ProductDetail() {

  const { ProductID } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
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
    console.log(ProductID)
    setProduct(products.find(product => product.id === Number('1')))
  }, [ProductID]);

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