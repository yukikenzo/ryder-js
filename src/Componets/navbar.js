import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faShoppingBag, faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../Pages/home";
import About from "../Pages/about";
import Cart from "../Pages/cart";
import Collections from "../Pages/collections";

let shopQue = true;

function openShopOptions() {
    if (shopQue) {
        document.getElementById('shop-options').style.display = "flex";
        shopQue = false;
    }
    else {
        document.getElementById('shop-options').style.display = "none";
        shopQue = true;
    }
}

export default function navbar() {
    return (
        <div className='nav-container'>

            <div className='dropdown-names' onClick={openShopOptions}>Shop<FontAwesomeIcon icon={faChevronDown} className='drop-icon' size="xs" /></div>

            <div className='options' id='shop-options'>
                <div>All</div>
                <div onClick={event =>  window.location.href='/home'}>Gift Card</div>
                <div onClick={event =>  window.location.href='/home'}>Sale</div>
            </div>

            <h1 className='brand' onClick={event =>  window.location.href='/home'}>RYDER</h1>

            <div className='icons'>
                <FontAwesomeIcon icon={faSearch} size="lg" className='search-icon' />
                <FontAwesomeIcon icon={faUser} size="lg" className='user-icon' onClick={event =>  window.location.href='/login'} />
                <FontAwesomeIcon icon={faShoppingBag} size="lg" className='cart-icon' onClick={event =>  window.location.href='/cart'} />
            </div>

            <BrowserRouter>
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/collections" element={<Collections />} />
                    <Route path="/sale" element={<About />} />
                    <Route path="/gifts" element={<Collections />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}