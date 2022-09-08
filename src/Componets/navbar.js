import React from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { BiUser, BiSearch, BiShoppingBag, BiPlus } from 'react-icons/bi';
import { BsXLg, BsPlusLg } from "react-icons/bs";

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



export default function Navbar({ isAdmin, setQuery, query }) {

    const navigate = useNavigate()

    function search(x) {
        document.getElementById('searchContainer').style.display = x ? 'flex' : 'none';
        document.getElementById('nav-container').style.display = x ? 'none' : 'flex';
        setQuery('');
        navigate('collections')
    }

    let i = 7; // cart products quality. it will pop when user adds product to cart.
    return (
        <>
            <div id='searchContainer'>
                <input value={query} onChange={(e) => setQuery(e.target.value)} className='searchInput' placeholder='Search Product' type="text" />
                <button onClick={() => search(false)}> <BsXLg className='x_icons' /> </button>
            </div>
            <div id='nav-container' className='nav-container'>

                <Link className='shop-link' to="/collections">Shop</Link>

                <Link className='brand' to="/">RYDER</Link>

                <div className='icons'>

                    {isAdmin
                        ? <Link to="/addproduct"> <BsPlusLg className='x_icons' /> </Link>
                        : null
                    }
                    <button onClick={() => search(true)}> <BiSearch className='main_icons' /> </button>
                    <Link to="/login"> <BiUser className='main_icons' /> </Link>
                    <Link to="/cart">
                        <BiShoppingBag className='main_icons' />
                    </Link>
                    <div style={style1}>
                        <p style={style2}>{i}</p>
                    </div>
                </div>

            </div>
        </>
    )
}