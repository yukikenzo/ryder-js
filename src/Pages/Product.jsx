import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase-config';
import Recommended from '../Componets/Recommended';

export default function Product() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;
  const user = sessionStorage.getItem('loggedIn');
  const isAdmin = sessionStorage.getItem('admin');

  async function changeData() {
      await setDoc(doc(db, "products", product.id.toString()), {
        ...product
      })
      edit(true, 'none');
  }

  function edit(read, display) {
    document.getElementById("name1").readOnly = read;
    document.getElementById("price1").readOnly = read;
    document.getElementById("detail1").readOnly = read;
    document.getElementById("saveChanges").style.display = display;
  }

  async function addCart() {
    document.querySelector('#myBtn').disabled = true;
    document.getElementById('myBtn').style.backgroundColor = "rgb(104, 110, 156)";
    await setDoc(doc(db, user, product.id.toString()), {
      ...product, quantity: 1
    })
    document.querySelector('#myBtn').disabled = false;
    document.getElementById('myBtn').style.backgroundColor = "rgb(32, 37, 75)";
  }

  const [name, setname] = useState(product.name)
  const [price, setprice] = useState(product.price)
  const [details, setdetails] = useState(product.details)

  async function removeProduct() {
    await deleteDoc(doc(db, "products", product.id.toString()))
    navigate('/collections')
    window.location.reload(true)
  }

  product.name = name;
  product.price = price;
  product.details = details;

  return (
    <>
      <div className='productPage'>
        <div>
          <img className='primaryImage' src={product.img1} alt="" />
          <img className='additionalImages' src={product.img2} alt="" />
          <img className='additionalImages' src={product.img3} alt="" />
          <img className='additionalImages' src={product.img4} alt="" />
        </div>

        <div className='productDescription'>
          <input id="name1" readOnly onChange={event => setname(event.target.value)} value={name} />
          <input id="price1" readOnly onChange={event => setprice(event.target.value)} value={'$' + price} />
          <button id='myBtn' onClick={addCart} className='addToCart'>Add to cart</button>
          <h4 className='detailsHeader'>Details</h4>
          <textarea id="detail1" readOnly onChange={event => setdetails(event.target.value)} value={details} />
          
          {isAdmin
            ? <>
              <button className='addToCart' onClick={() => edit(false, 'block')}>Edit</button>
              <button className='addToCart' onClick={removeProduct}>Remove</button>
            </>
            : null
          }
          <button className='addToCart' onClick={changeData} id='saveChanges'>Save</button>
        </div>

      </div>
      <Recommended/>
    </>

  )
}