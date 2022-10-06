import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { BiUser, BiSearch, BiShoppingBag } from 'react-icons/bi';
import { BsXLg, BsPlusLg } from "react-icons/bs";
import { useLocation } from 'react-router-dom';

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

export default function Navbar({ isAdmin, setQuery, query, notifyCart }) {

    const location = useLocation().pathname;

    let lastScroll = 0;
    window.addEventListener("scroll", function () {
        let coordinates = document.documentElement.scrollTop;
        document.querySelector('.shop-link').style.top = coordinates < lastScroll ? '25px' : '-60px'
        document.querySelector('.brand').style.top = coordinates < lastScroll ? '50px' : '-60px'
        document.querySelector('.icons').style.top = coordinates < lastScroll ? '28px' : '-70px'
        coordinates < lastScroll ? void (0) : searchToggler(false);
        lastScroll = coordinates <= 0 ? 0 : coordinates; // For Mobile or negative scrolling
    }, false);

    function searchToggler(x) {
        setQuery('');
        document.getElementById('searchContainer').style.display = x ? 'flex' : 'none';
        document.getElementById('search').style.display = x ? 'block' : 'none';
        document.getElementById('nav-container').style.display = x ? 'none' : 'flex';
    }

    return (
        <>
            <div id='search'>
                <div id='searchContainer'>
                    <input value={query} onChange={(e) => setQuery(e.target.value)} className='searchInput' placeholder='Search Product' type="text" />
                    <button onClick={() => searchToggler(false)}> <BsXLg className='x_icons' /> </button>
                </div>
            </div>

            <div id='nav-container' className='nav-container'>

                <Link className='shop-link' to="/collections">Shop</Link>

                <Link className='brand' to="/">RYDER</Link>

                <div className='icons'>

                    {isAdmin
                        ? <Link to="/addproduct"> <BsPlusLg className='x_icons' /> </Link>
                        : null
                    }

                    {isAdmin && location == '/collections'
                        ? <button onClick={() => searchToggler(true)}> <BiSearch className='main_icons' /> </button>
                        : null
                    }

                    <Link to="/login"> <BiUser className='main_icons' /> </Link>
                    <Link to="/cart">
                        <BiShoppingBag className='main_icons' />
                    </Link>
                    
                    {notifyCart <= 0 || notifyCart == NaN
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