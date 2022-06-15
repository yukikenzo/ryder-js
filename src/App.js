import React from 'react';
import { useEffect, useState } from 'react';

import Treadmill from './Componets/treadmill'
import Navbar from './Componets/navbar'
import Footer from './Componets/footer'

import Home from "./Pages/home";
import Cart from "./Pages/cart";
import Collections from "./Pages/collections";
import Login from "./Pages/login"
import Products from "./Pages/products";
import Register from './Pages/Register';
import ForgotPassword from './Pages/ForgotPassword';
import AddProduct from './Pages/AddProduct';

import './Pages/style.css';

import { HashRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from "./ProtectedRoutes";

import { db } from './firebase-config'
import { collection, getDocs } from "firebase/firestore"

export const UserContext = React.createContext();

export default function App() {

  const [first, setfirst] = useState([]);
  const productsCollectionRef = collection(db, 'products');
  const [isAuth, setAuth] = useState(false);
  const [isAdmin, setAdmin] = useState(false);


  useEffect(() => {
    const getProducts = async () => {
      let data = await getDocs(productsCollectionRef);
      setfirst(data.docs.map((doc) => ({ ...doc.data() })))
    };
    getProducts()
  }, [])

  return (
    <div className="App">
      <Treadmill />
      <HashRouter>
        <Navbar isAdmin={isAdmin} />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route element={<ProtectedRoutes isAuth={isAuth} />}>
            <Route path="/collections" element={< Collections products={first} />} />
            <Route path="/products" element={<Products products={first} isAdmin={isAdmin} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/addproduct" element={<AddProduct />} />
          </Route>
          <Route path="/login" element={<Login setAuth={setAuth} setAdmin={setAdmin} />} />
          <Route path="/register" element={<Register setAuth={setAuth} />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </HashRouter>

      <Footer />
    </div>
  );

}