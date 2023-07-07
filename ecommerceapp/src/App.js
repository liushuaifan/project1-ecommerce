import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Products from "./components/Products"
import ProductDetail from "./components/ProductDetail"
import CreateProducts from "./components/CreateProducts"
import Cart from "./components/Cart"
import UpdatePassWord from "./components/updatePassword";
import SignIn from "./components/Signin"
import SignUp from "./components/Signup"

import './App.css';




function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
        <Navbar />
        <div className="container">

        <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/updatePassword" element={<UpdatePassWord />} />
        </Routes>

        </div>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/Product/:ProductId" element={<ProductDetail />} />
          <Route path="/CreateProducts" element={<CreateProducts />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>

 
    </div>
  );
}

export default App;
