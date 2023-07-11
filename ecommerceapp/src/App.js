import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Products from "./components/Products"
import ProductDetail from "./components/ProductDetail"
import CreateProducts from "./components/CreateProducts"
import UpdateProducts from "./components/UpdateProducts"
import Cart from "./components/Cart"
import UpdatePassWord from "./components/updatePassword";
import SignIn from "./components/Signin"
import SignUp from "./components/Signup"
import AuthLayout from "./components/AuthLayout";

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
          <Route element={<AuthLayout />}>
            <Route path="/CreateProducts" element={<CreateProducts />} />
            <Route path="/UpdateProducts/:ProductId" element={<UpdateProducts />} />
          </Route>
          
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>

 
    </div>
  );
}

export default App;
