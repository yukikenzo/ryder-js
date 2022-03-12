import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faShoppingBag, faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

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

            <div className='dropdown-names' onClick={openShopOptions}><Link to="/collections">Shop</Link></div>

            <h1 className='brand' onClick={event => window.location.href = '/home'}>RYDER</h1>

            <div className='icons'>

                <Link to="/home"> <FontAwesomeIcon icon={faSearch} size="lg" className='search-icon' /></Link>
                <Link to="/login"> <FontAwesomeIcon icon={faUser} size="lg" className='search-icon' /></Link>
                <Link to="/cart"> <FontAwesomeIcon icon={faShoppingBag} size="lg" className='search-icon' /></Link>


            </div>

        </div>
    )
}