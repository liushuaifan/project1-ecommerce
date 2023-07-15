import * as React from 'react';
import Box from '@mui/material/Box';
import { useState, useLayoutEffect, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { fetchUserCart, createCart , updateCart, fetchCart, deleteCart } from '../services/cart';


import "./style/cart.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(70%, -60%)',
  width: 500,
  height:700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const [promo, setpromo] = React.useState(0);
  const [discount, setdiscount] = React.useState(0);
  const [subtotal, setsubtotal] = React.useState(0);
  const [estimate, setestimate] = React.useState(0);
  
  const navigate = useNavigate();

  const handleClose = (e) => {
    e.preventDefault();
    navigate("/")
  }
  const [products, setProducts] = useState([]);
  const { user } = useSelector(state => state.user);



  useLayoutEffect(() => {

    async function fetchData() {
      const fetchdata = {
        userId: user.id
      }
      try {
        const result = await fetchUserCart(fetchdata);
        // console.log(user.id);
        console.log("Get user cart: ", result);
        setsubtotal(result.reduce((accumulator, currentValue) => accumulator + currentValue.cartValue * currentValue.price,0))
        setProducts(result);
        setestimate(1.1*result.reduce((accumulator, currentValue) => accumulator + currentValue.cartValue * currentValue.price,0));
      } catch (error) {
        console.error("Error fetching user cart: ", error);
      }
    }
    fetchData();
  }, [user.id]);

  const handlediscount = () =>{
      if(promo==="promo100"){
        setdiscount(100);
        setestimate(estimate-100);
      }else{
        setdiscount(0);
        setestimate(estimate+100);
      }
      
  }


  const AddtoCart = (product) => {
      // console.log(product.cartValue +  product.productid   + "clicked")
      const data = {
        cartValue:1+product.cartValue,
        email:localStorage.getItem("email"),
        imageurl:product.imageurl,
        price:product.price,
        productname:product.productname,
        productId:product.productid,
        userId: user.id
      };
      // console.log("hi")
      // console.log(data);
      updateCart(data);
      setsubtotal(subtotal+product.price);
      setestimate(estimate);
      let index = 0;
      // console.log(product.productid);
      // console.log(("hello"));
      for(let i=0;i<products.length;i++){
        // console.log(products[i]);
        if(products[i].productid===product.productid) index = i;
      }

      const mycopy = [...products];
      mycopy[index].cartValue ++;
      setProducts(mycopy);
  }

  const handleRemove = (product) =>{
    const data = {
      userId: user.id,
      productId:product.productid
    }
    deleteCart(data);
    const arr = products.filter(arr => arr.productid !== product.productid);
    setProducts(arr);

    setsubtotal(subtotal - product.cartValue * product.price);
    setestimate(estimate - product.cartValue * product.price);   
  }

  const MinusCart = (product) =>{
      setsubtotal(subtotal-product.price);
      setestimate(estimate-product.price);
      if(product.cartValue === 1){
          handleRemove(product)
          
      }else{

      const data = {
        cartValue:product.cartValue-1,
        email:localStorage.getItem("email"),
        imageurl:product.imageurl,
        price:product.price,
        productname:product.productname,
        productId:product.productid,
        userId: user.id
      };

      updateCart(data);
      let index = 0;
      for(let i=0;i<products.length;i++){

        if(products[i].productid===product.productid) index = i;
      }

      const mycopy = [...products];
      mycopy[index].cartValue --;
      setProducts(mycopy);
  }
}


  return (
    <div>
      
      <Modal
        open={open}

      >
        <Box sx={style}>
          <div>
          <h>
            Cart
          </h>

            <Button onClick={handleClose} style={{position:"absolute",right:"10%"}}>close Cart </Button>
          </div>

        <div className='cartDetail'>
          
          {products.length > 0 && products.map((product, index) => (
            <div key={index} style={{width:"200px" , height:"80px"}}>
              <img src={product.imageurl} alt="pend" style={{width: "70px",height:"70px", position:"relative",top:"20px"}}/>
              <h2 className='cartName' style={{color:"black", position:"relative",top:"-78px",left:"65%"}}>{product.productname}</h2>
              <h3 className='cartPrice' style={{color:"blue",position:"relative",top:"-118px",left:"190%"}}>{product.price}</h3>
              
              
             
              <Button onClick={()=> AddtoCart(product)} style={{backgroundColor: 'yellow',borderColor: 'red',width:"10px",height:"30px", position:"relative",top:"-118px",left:"35%"}} >+</Button>
              <h5 style={{position:"relative",top:"-178px",left:"75%",  fontSize: "20px", color:"black"}}>{product.cartValue} </h5>
              <Button onClick={()=> MinusCart(product)} style={{backgroundColor: 'yellow',borderColor: 'red',width:"10px",height:"30px", position:"relative",top:"-238px",left:"95%"}} >-</Button>
              <Button onClick={()=> handleRemove(product)}    style={{backgroundColor: 'white',borderColor: 'red',width:"10px",height:"30px", position:"relative",top:"-238px",left:"150%"}} >Remove</Button>

            </div>
          ))}

          {/* <img src={products[0].img} alt="Apple Watch" style={{width: "50px",height:"50px"}}/>

          <h2 className='cartName'>{products[0].productname}</h2>
          <h3 className='cartPrice'>{products[0].price}</h3>


          <Button variant="contained" style={{width:"50px",height:"30px", position:"absolute",top:"20%",right:"20%"}} onClick={handleClick} >remove</Button>
          <Button style={{width:"50px",height:"30px", position:"absolute",top:"20%",left:"20%"}} >-</Button>
          <Button style={{width:"50px",height:"30px", position:"absolute",top:"20%",left:"25%"}} >+</Button> */}
        </div>

        <div className='discount'>
            <h style={{position:"relative", top:"30px"}}>Apply discount code </h>
            <input type="text" id="discount" name="discount" style={{position:"relative", top:"70px",width:"200px", right:"30%",height:"10px"}} onChange={(e) => setpromo(e.target.value)} />
            <button type="submit" className='discountbuton' style={{position:"relative", top:"10px",left:"70%", color:"white"}} onClick={handlediscount}>apply discount  </button>
        </div>
        
        <h style={{position:"relative", top:"10px",width:"200px", left:"10%",height:"10px"}}> subtotal </h>
        <h style={{position:"relative", top:"10px",width:"200px", left:"60%",height:"10px"}}> {subtotal.toFixed(2)} </h>
        <h style={{position:"relative", top:"30px",width:"200px",left:"-15%",height:"10px"}}> tax </h>
        <h style={{position:"relative", top:"30px",width:"200px",left:"40%",height:"10px"}}> {(subtotal*0.1).toFixed(2)} </h>
        <h style={{position:"relative", top:"50px",width:"200px" , left:"-35%",height:"10px"}}> discount </h>
        <h style={{position:"relative", top:"50px",width:"200px" , left:"17%",height:"10px"}}> {discount.toFixed(2)} </h>
        <h style={{position:"relative", top:"70px",width:"200px",left:"-59%",height:"10px"}}> estimated total </h>
        <h style={{position:"relative", top:"50px",width:"200px",left:"72%",height:"10px"}}> {estimate.toFixed(2)} </h>
        
        <button type="submit" className='gotocheckout' style={{position:"absolute", top:"90%",left:"10%", color:"white",width:"400px"}}>Continue to check out  </button>

        </Box>
      </Modal>
    </div>
  );
}