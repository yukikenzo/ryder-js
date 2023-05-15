import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { BiUser, BiShoppingBag } from 'react-icons/bi';
import { BsPlusLg } from "react-icons/bs";


const style1 = {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    backgroundColor:  'rgb(32, 37, 75)',
    position: 'absolute',
    top: '15px',
    right: '6px',
    display: 'flex',
    justifyContent: 'center',
}

const style2 = {
    fontSize: '10px',
    color: 'white',
}

export default function Navbar({ isAdmin, notifyCart }) {

    let lastScroll = 0;
    window.addEventListener("scroll", function () {
        let coordinates = document.documentElement.scrollTop;
        if (coordinates < 10) {
            document.querySelector('.shop-link').style.top = '25px';
            document.querySelector('.brand').style.top = '50px';
            document.querySelector('.icons').style.top = '28px';
        }
        else {
            document.querySelector('.shop-link').style.top = coordinates < lastScroll ? '25px' : '-60px'
            document.querySelector('.brand').style.top = coordinates < lastScroll ? '50px' : '-60px'
            document.querySelector('.icons').style.top = coordinates < lastScroll ? '28px' : '-70px'
        }
        lastScroll = coordinates <= 0 ? 0 : coordinates; // For Mobile or negative scrolling
    }, false);

    return (
        <>
            <div id='nav-container' className='nav-container'>
                <Link className='shop-link' to="/collections">Shop</Link>
                <Link className='brand' to="/">RYDER</Link>
                <div className='icons'>

                    {isAdmin && <Link to="/addproduct"><BsPlusLg className='add_icon' /></Link>}

                    <Link to="/login"><BiUser className='main_icons' /></Link>
                    <Link to="/cart"><BiShoppingBag className='main_icons' /></Link>

                    {notifyCart
                        ?
                        <div style={style1}>
                            <p style={style2}>{notifyCart}</p>
                        </div>
                        :
                        null
                    }

                </div>
            </div>
        </>
    )
}