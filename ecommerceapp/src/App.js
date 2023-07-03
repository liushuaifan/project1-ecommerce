import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Products from "./components/Products"
import Product from "./components/Product"
import CreateProducts from "./components/CreateProducts"
import Cart from "./components/Cart"

import './App.css';

function App() {
  return (
    <div className="App">
     
     <Navbar />

     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
            <Route path=":ProductId" element={<Product />} />
          <Route path="/CreateProducts" element={<CreateProducts />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
