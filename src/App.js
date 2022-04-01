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
import Register from './Pages/Register';
import { db } from './firebase-config'
import { collection, getDoc } from "firebase/firestore"

export default function App() {

  const [first, setfirst] = useState([]);
  const productsCollectionRef = collection(db, "products")


  useEffect(() => {
    const getProducts = async () => {
      const data = await getDoc(productsCollectionRef);
      setfirst(date.docs.map((doc) => ({...doc.data()})))
      console.log(first);
    }
    getProducts()
    return () => {
      second
    }
  }, [])


  return (
    <div className="App">
      <Treadmill />

      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/collections" element={<Collections />} />
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