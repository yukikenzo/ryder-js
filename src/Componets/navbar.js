import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faShoppingBag, faChevronDown } from '@fortawesome/free-solid-svg-icons'

let shopQue = true;
let aboutQue = true;

function openShopOptions() {
    if (shopQue) {
        document.getElementById('shop-options').style.display = "block";
        shopQue = false;
    }
    else {
        document.getElementById('shop-options').style.display = "none";
        shopQue = true;
    }
}

function openAboutOptions() {
    if (aboutQue) {
        document.getElementById('about-options').style.display = "block";
        aboutQue = false;
    }
    else {
        document.getElementById('about-options').style.display = "none";
        aboutQue = true;
    }
}

export default function navbar() {
    return (
        <>
            <div className='first-container'>
                <div className='drop-container' onClick={openShopOptions}>
                    <div className='dropdown' id='dropdown1'>Shop</div>
                    <FontAwesomeIcon icon={faChevronDown} className='drop-icon' />
                </div>

                <div className='options' id='shop-options'>
                    <div>All</div>
                    <div>Australian Trees</div>
                    <div>Bottoms</div>
                    <div>Dresses</div>
                    <div>Tops</div>
                    <div>Knitwear</div>
                    <div>Gift Card</div>
                    <div>Sale</div>
                </div>
            </div>

            <div className='second-container'>
                <div className='drop-container' onClick={openAboutOptions}>
                    <div className='dropdown' id='dropdown2'>Our World</div>
                    <FontAwesomeIcon icon={faChevronDown} className='drop-icon' />
                </div>

                <div className='options' id='about-options'>
                    <div>About Us</div>
                    <div>Contact</div>
                </div>
            </div>
            <div className='nav-container'>
                <h1 className='brand'>RYDER</h1>
                <div className='icons'>
                    <FontAwesomeIcon icon={faSearch} />
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faShoppingBag} />
                </div>

            </div>
        </>

    )
}