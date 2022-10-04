import React from 'react';
import { useEffect, useState } from 'react';

import Treadmill from './Componets/Treadmill'
import Navbar from './Componets/Navbar'
import Footer from './Componets/Footer'

import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Collections from "./Pages/Collections";
import Login from "./Pages/Login"
import Register from './Pages/Register';
import ForgotPassword from './Pages/ForgotPassword';
import AddProduct from './Pages/AddProduct';
import Product from './Pages/Product';

import './Pages/style.css';

import { HashRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from "./ProtectedRoutes";

import { db } from './firebase-config'
import { collection, getDocs } from "firebase/firestore"

export default function App() {
  const [first, setfirst] = useState([]);
  const [isAuth, setAuth] = useState(sessionStorage.getItem('loggedIn') ? true : false);
  const [isAdmin, setAdmin] = useState(sessionStorage.getItem('admin') ? true : false);
  const [query, setQuery] = useState('')
  const [notifyCart, setNotifyCart] = useState(0)  // cart products quality. it will pop when user adds product to cart.
  const productsCollectionRef = collection(db, 'products');

  useEffect(() => {
    const getProducts = async () => {
      let data = await getDocs(productsCollectionRef);
      setfirst(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getProducts();
  }, [])

  return (
      <div className="App">
        <Treadmill />
        <HashRouter>
          <Navbar notifyCart={notifyCart} isAdmin={isAdmin} setQuery={setQuery} query = {query}  />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route element={<ProtectedRoutes isAuth={isAuth} />}>
              <Route exact path="/collections" element={< Collections products={first} query = {query} />} />
              <Route path="/cart" element={<Cart setNotifyCart={setNotifyCart} />} />
              <Route path="/addproduct" element={<AddProduct  />} />
              <Route path="/product/:id" element={<Product setNotifyCart={setNotifyCart} />} />
            </Route>
            <Route path="/login" element={<Login isAuth={isAuth} setAuth={setAuth} setAdmin={setAdmin} />} />
            <Route path="/register" element={<Register setAuth={setAuth} />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Routes>
        </HashRouter>

        <Footer />
      </div>
  );
}