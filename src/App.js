import React from 'react';
import Treadmill from './Componets/treadmill'
import Navbar from './Componets/navbar'
import Footer from './Componets/footer'
import Home from "./Pages/home";
import './Pages/style.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Cart from "./Pages/cart";
import Collections from "./Pages/collections";
import Login from "./Pages/Login"
import ProtectedRoutes from "./ProtectedRoutes";
import Products from "./Pages/products";

export default function App() {

  return (
    <div className="App">
      <Treadmill/>
      
      <HashRouter>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/collections" element={<Collections />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/login" element={<Login />} />
        </Routes>
      </HashRouter>
      <Footer/>
    </div>
  );

}