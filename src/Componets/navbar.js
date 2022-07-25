import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faShoppingBag, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const style1 = {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    backgroundColor: 'blue',
    display: 'none',
    position: 'absolute',
    top: '12px',
    right: '-5px'
}

const style2 = {
    fontSize: '10px',
    color: 'white',
    position: 'absolute',
    top: '1px',
    right: '5px',
    fontFamily: "'Jost', sans-serif"
}

export default function Navbar({ isAdmin }) {
    let i = 7;
    return (

        <div className='nav-container'>

            <Link className='shop-link' to="/collections">Shop</Link>

            <Link className='brand' to="/">RYDER</Link>

            <div className='icons'>

                {isAdmin
                    ? <Link to="/addproduct"> <FontAwesomeIcon icon={faPlus} size="lg" className='main_icons' /></Link>
                    : null
                }
                <Link to="/"> <FontAwesomeIcon icon={faSearch} size="lg" className='main_icons' /></Link>
                <Link to="/login"> <FontAwesomeIcon icon={faUser} size="lg" className='main_icons' /></Link>
                <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingBag} size="lg" className='main_icons' />
                </Link>
                <div style={style1}>
                    <p style={style2}>{i}</p>
                </div>
            </div>

        </div>
    )
}