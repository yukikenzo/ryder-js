import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { BiUser, BiShoppingBag } from 'react-icons/bi';
import {BsPlusLg } from "react-icons/bs";


const style1 = {
    width: '13px',
    height: '13px',
    borderRadius: '50%',
    backgroundColor: 'blue',
    position: 'absolute',
    top: '15px',
    right: '6px',
    display: 'flex',
    justifyContent: 'center',
}

const style2 = {
    fontSize: '10px',
    color: 'white',
    fontFamily: "'Jost', sans-serif"
}

export default function Navbar({ isAdmin, notifyCart }) {

    let lastScroll = 0;
    window.addEventListener("scroll", function () {
        let coordinates = document.documentElement.scrollTop;
        document.querySelector('.shop-link').style.top = coordinates < lastScroll ? '25px' : '-60px'
        document.querySelector('.brand').style.top = coordinates < lastScroll ? '50px' : '-60px'
        document.querySelector('.icons').style.top = coordinates < lastScroll ? '28px' : '-70px'
        lastScroll = coordinates <= 0 ? 0 : coordinates; // For Mobile or negative scrolling
    }, false);

    return (
        <>
            <div id='nav-container' className='nav-container'>

                <Link className='shop-link' to="/collections">Shop</Link>

                <Link className='brand' to="/">RYDER</Link>

                <div className='icons'>

                    {isAdmin
                        ? <Link to="/addproduct"> <BsPlusLg className='x_icons' /> </Link>
                        : null
                    }

                    <Link to="/login"> <BiUser className='main_icons' /> </Link>
                    <Link to="/cart">
                        <BiShoppingBag className='main_icons' />
                    </Link>
                    
                    {notifyCart <= 0 || notifyCart === isNaN
                        ? null
                        : <div style={style1}>
                            <p style={style2}>{notifyCart}</p>
                        </div>
                    }

                </div>

            </div>
        </>
    )
}