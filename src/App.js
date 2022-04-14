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
import Login from "./Pages/login"
import ProtectedRoutes from "./ProtectedRoutes";
import Products from "./Pages/products";
import Register from './Pages/Register';
import { db } from './firebase-config'
import { doc, collection, getDocs, setDoc } from "firebase/firestore"
import ForgotPassword from './Pages/ForgotPassword';
import AddProduct from './Pages/AddProduct';

export const UserContext = React.createContext();

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

  return (
    <div className="App">
      <Treadmill />

      <HashRouter>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/collections" element={< Collections products={first} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/addproduct" element={<AddProduct />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </HashRouter>

      <Footer />
    </div>
  );

}