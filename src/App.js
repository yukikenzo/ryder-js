import React from 'react';
import { useEffect, useState } from 'react';
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
import Register from './Pages/Register';
import { db } from './firebase-config'
import { collection, getDocs } from "firebase/firestore"

export default function App() {

  const [first, setfirst] = useState([]);
  const productsCollectionRef = collection(db, 'products')

  useEffect(() => {
    const getProducts = async () => {
      let data = await getDocs(productsCollectionRef);
      setfirst(data.docs.map((doc) => ({ ...doc.data() })))
    };
    getProducts()
  }, [])

  console.log(first)

  return (
    <div className="App">
      <Treadmill />

      <HashRouter>
        <Navbar />
        
        <Routes>
          
          <Route exact path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/collections" element={Collections(first)} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </HashRouter>

      <Footer />
    </div>
  );

}