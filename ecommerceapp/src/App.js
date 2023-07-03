import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Products from "./components/Products"
import Product from "./components/Product"
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
        <Route path="/UpdatePassword" element={<UpdatePassWord />} />
        </Routes>

        </div>
        <Routes>
          <Route path="/" element={<Products />} />
            <Route path=":ProductId" element={<Product />} />
          <Route path="/CreateProducts" element={<CreateProducts />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>

 
    </div>
  );
}

export default App;
