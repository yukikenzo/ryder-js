import React, { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faShoppingBag, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import login from '../Pages/login';

export default function navbar(props) {

    login(setadmin)

    function useForceUpdate(){
        let [admin, setadmin] = useState(false)
        return () => setValue(value => value + 1); // update the state to force render
    }
    

    return (

        <div className='nav-container'>

            <Link className='shop-link' to="/collections">Shop</Link>

            <Link className='brand' to="/">RYDER</Link>

            <div className='icons'>

                {admin
                    ? <Link to="/addproduct"> <FontAwesomeIcon icon={faPlus} size="lg" className='main_icons' /></Link>
                    : null
                }
                <Link to="/"> <FontAwesomeIcon icon={faSearch} size="lg" className='main_icons' /></Link>
                <Link to="/login"> <FontAwesomeIcon icon={faUser} size="lg" className='main_icons' /></Link>
                <Link to="/cart"> <FontAwesomeIcon icon={faShoppingBag} size="lg" className='main_icons' /></Link>

            </div>

        </div>
    )
}