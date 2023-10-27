import React, { useEffect, useState, useCallback } from "react";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Treadmill from "./Layout/Treadmill";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import AddProduct from "./Pages/AddProduct";
import Collections from "./Pages/Collections";
import ForgotPassword from "./Pages/ForgotPassword";
import "./Pages/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Context } from "./Contex";
import ErrorBoundary from "./ErrorBoundary";
import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  const [clotheArray, setClotheArray] = useState([]);
  const [notifyCart, setNotifyCart] = useState(0);
  const { user, isAuthenticated } = useAuth0();

  const fetchProducts = useCallback(async () => {
    const productsCollectionRef = collection(db, "products");
    let fetchedData = await getDocs(productsCollectionRef);
    setClotheArray(
      fetchedData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  }, []);

  const contexData = {
    products: clotheArray,
    refetchProducts: fetchProducts,
    setNotifyCart: setNotifyCart,
    getCartProductsQuantity: getCartProductsQuantity,
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (isAuthenticated) {
      getCartProductsQuantity();
    }
  }, [isAuthenticated]);

  function getCartProductsQuantity() {
    const cartCollectionRef = collection(db, user.email);
    (async () => {
      let data = await getDocs(cartCollectionRef);
      setNotifyCart(
        data.docs.reduce((acc, cur) => acc + cur.data().quantity, 0)
      );
    })();
  }

  return (
    <div className="App">
      <Treadmill />
      <BrowserRouter>
        <Navbar
          isAdmin={false}
          isAuth={isAuthenticated}
          notifyCart={notifyCart}
        />
        <ErrorBoundary>
          <Context.Provider value={contexData}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/collections" element={<Collections />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/product/:id" element={<Product />} />
              <Route
                path="/user"
                element={<Login isAuth={isAuthenticated} />}
              />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
            </Routes>
          </Context.Provider>
        </ErrorBoundary>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
