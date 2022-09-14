import React from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { BiUser, BiSearch, BiShoppingBag, BiPlus } from 'react-icons/bi';
import { BsXLg, BsPlusLg } from "react-icons/bs";

const style1 = {
    width: '13px',
    height: '13px',
    borderRadius: '50%',
    backgroundColor: 'blue',

    position: 'absolute',
    top: '15px',
    right: '6px'
}

const style2 = {
    fontSize: '10px',
    color: 'white',
    position: 'absolute',
    top: '-1px',
    right: '4px',
    fontFamily: "'Jost', sans-serif"
}



export default function Navbar({ isAdmin, setQuery, query, notifyCart }) {

    const navigate = useNavigate()
    

    function search(x) {
        document.getElementById('searchContainer').style.display = x ? 'flex' : 'none';
        document.getElementById('nav-container').style.display = x ? 'none' : 'flex';
        setQuery('');
        navigate('collections')
    }

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
                        <p style={style2}>{notifyCart}</p>
                    </div>
                </div>

            </div>
        </>
    )
}