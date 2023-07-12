import * as React from 'react';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { fetchUserCart } from '../services/cart';

import "./style/cart.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(70%, -60%)',
  width: 500,
  height:600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [products, setProducts] = useState([]);
  const { user } = useSelector(state => state.user);

  useEffect(() => {

    async function fetchData() {
      const fetchdata = {
        userId: user.id
      }
      try {
        const result = await fetchUserCart(fetchdata);
        console.log("Get user cart: ", result);
        setProducts(result);
      } catch (error) {
        console.error("Error fetching user cart: ", error);
      }
    }
    fetchData();
  }, [user.id]);


  return (
    <div>
      
      <Modal
        open={open}
        onClose={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
            <div key={index}>
              <img src={product.img} alt="pending" style={{width: "50px",height:"50px"}}/>
              <h2 className='cartName'>{product.productname}</h2>
              <h3 className='cartPrice'>{product.price}</h3>
              <Button variant="contained" style={{width:"50px",height:"30px", position:"absolute",top:"20%",right:"20%"}} >remove</Button>
              <Button style={{width:"50px",height:"30px", position:"absolute",top:"20%",left:"20%"}} >-</Button>
              <Button style={{width:"50px",height:"30px", position:"absolute",top:"20%",left:"25%"}} >+</Button>
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
            <h style={{position:"absolute", top:"30%"}}>Apply discount code </h>
            <input type="text" id="discount" name="discount" style={{position:"absolute", top:"40%"}}/>
            <button type="submit" className='discountbuton' style={{position:"absolute", top:"40%",right:"10%", color:"white"}}>apply discount  </button>
        </div>
        
        <h style={{position:"absolute", top:"60%"}}> subtotal </h>
        <h style={{position:"absolute", top:"65%"}}> tax </h>
        <h style={{position:"absolute", top:"70%"}}> discount </h>
        <h style={{position:"absolute", top:"75%"}}> estimated total </h>
        
        <button type="submit" className='gotocheckout' style={{position:"absolute", top:"90%", color:"white",width:"400px"}}>Continue to check out  </button>

        </Box>
      </Modal>
    </div>
  );
}