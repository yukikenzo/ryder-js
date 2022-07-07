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

export const UserContext = React.createContext();

export default function App() {

  const [first, setfirst] = useState([]);
  const productsCollectionRef = collection(db, 'products');

  const [isAuth, setAuth] = useState(sessionStorage.getItem('logedIn') ? true : false);
  const [isAdmin, setAdmin] = useState(sessionStorage.getItem('admin') ? true : false);

  function func() {
    console.log("lsdf")
  }

  useEffect(() => {
    const getProducts = async () => {
      let data = await getDocs(productsCollectionRef);
      setfirst(data.docs.map((doc) => ({ ...doc.data(), fuct: func})));
    };
    getProducts();
  }, [])


  return (
    <div className="App">
      <Treadmill />
      <HashRouter>
        <Navbar isAdmin={isAdmin} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route element={<ProtectedRoutes isAuth={isAuth} />}>
            <Route exact path="/collections" element={< Collections products={first} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/product/:id" element={<Product />} />
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