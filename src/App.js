import React, { useEffect, useState } from 'react';

import Navbar from './Componets/Navbar';
import Footer from './Componets/Footer';
import Treadmill from './Componets/Treadmill';

import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Login from './Pages/Login'
import Product from './Pages/Product';
import Register from './Pages/Register';
import AddProduct from './Pages/AddProduct';
import Collections from './Pages/Collections';
import ForgotPassword from './Pages/ForgotPassword';

import './Pages/style.css';

import ProtectedRoutes from './ProtectedRoutes';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

import ErrorBoundary from './ErrorBoundary';

export default function App() {
  const [clotheArray, setClotheArray] = useState([]);
  const [isAuth, setAuth] = useState(sessionStorage.getItem('loggedIn') ? true : false);
  const [isAdmin, setAdmin] = useState(sessionStorage.getItem('admin') ? true : false);
  const [notifyCart, setNotifyCart] = useState(0)
  const productsCollectionRef = collection(db, 'products');

  useEffect(() => {
    const getProducts = async () => {
      let fetchedData = await getDocs(productsCollectionRef);
      setClotheArray(fetchedData.docs.map((doc) => ({ ...doc.data() })));
    };
    getProducts();
  }, [])

  return (
    <div className="App">
      <Treadmill />
      <HashRouter>
        <Navbar notifyCart={notifyCart} isAdmin={isAdmin} />
        <ErrorBoundary>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route element={<ProtectedRoutes isAuth={isAuth} />}>

              <Route exact path="/collections" element={< Collections products={clotheArray} />} />
              <Route path="/cart" element={<Cart products={clotheArray} setNotifyCart={setNotifyCart} />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/product/:id" element={<Product setNotifyCart={setNotifyCart} products={clotheArray} />} />

            </Route>
            <Route path="/login" element={<Login isAuth={isAuth} setAuth={setAuth} setAdmin={setAdmin} />} />
            <Route path="/register" element={<Register setAuth={setAuth} setAdmin={setAdmin} />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Routes>
        </ErrorBoundary>
      </HashRouter>
      <Footer />
    </div>
  );
}