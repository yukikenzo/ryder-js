import React from 'react';
import Treadmill from './Componets/treadmill'
import Navbar from './Componets/navbar'
import Footer from './Componets/footer'
import Home from "./Pages/home";
import About from "./Pages/about";
import Sale from "./Pages/sale";
import Collections from "./Pages/collections";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {

  return (
    <div className="App">

      <Treadmill/>
      <Navbar/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/gifts" element={<Collections />} />
        </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );

}