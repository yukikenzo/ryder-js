import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function navbar() {
    return (
        <div className='nav-container'>

           <Link className='shop-link' to="/collections">Shop</Link>

           <Link className='brand' to="/">RYDER</Link>

            <div className='icons'>

                <Link to="/"> <FontAwesomeIcon icon={faSearch} size="lg" className='search-icon' /></Link>
                <Link to="/login"> <FontAwesomeIcon icon={faUser} size="lg" className='user-icon' /></Link>
                <Link to="/cart"> <FontAwesomeIcon icon={faShoppingBag} size="lg" className='cart-icon' /></Link>
                
            </div>

        </div>
    )
}