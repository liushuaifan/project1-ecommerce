import React, { useEffect, useState }from 'react'
import Product from './Product';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsAction } from '../app/productSlice';
import Pagination from './Pagination';

import './style/Products.css';


function Products() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, []);

  const { products } = useSelector(state => state.product);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(10);

  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;

  const currentProducts = Array.isArray(products) ? products.slice(firstProductIndex, lastProductIndex) : [];

  

  const navigate = new useNavigate();
  
  const handleClick = () => {
    navigate('/CreateProducts');
  }
  
  return (
    <div className='productContent'>
      <div className='productNav'>
        <h1>Products</h1>
        {localStorage.getItem("admin")==='true' && <Button variant="contained" onClick={handleClick}>Add Product</Button>}
      </div>
      <div className="productGrid">
        {currentProducts && currentProducts.map((product)=>(
            <div className="productGridItem" key={product.id}>
              <Product product={product} admin = {localStorage.getItem("admin")}/>
            </div>
          ))}  
        <Pagination totalProducts = {products? products.length: 0} productsPerPage={productPerPage} setCurrentPage={setCurrentPage} currentPage = {currentPage}/>
      </div>   
    </div>
  )
}

export default Products