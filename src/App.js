import React, { useEffect, useState, useCallback } from "react";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Treadmill from "./Layout/Treadmill";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Login from "./Pages/Profile";
import Product from "./Pages/Product";
import AddProduct from "./Pages/AddProduct";
import Collections from "./Pages/Collections";
import "./Pages/style.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Context } from "./Contex";
import ErrorBoundary from "./ErrorBoundary";
import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  const [clotheArray, setClotheArray] = useState([]);
  const [notifyCart, setNotifyCart] = useState(0);
  const { user, isAuthenticated } = useAuth0();
  const [isAdmin, setIsAdmin] = useState();

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
    isAdmin
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (isAuthenticated) {
      if (user.email === process.env.REACT_APP_ADMIN_URL) {
        setIsAdmin(true);
      }
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
      <HashRouter>
        <Navbar
          isAdmin={isAdmin}
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
            </Routes>
          </Context.Provider>
        </ErrorBoundary>
      </HashRouter>
      <Footer />
    </div>
  );
}
