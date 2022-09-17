import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase-config';
import Recommended from '../Componets/Recommended';

export default function Product( {setNotifyCart} ) {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;
  const user = sessionStorage.getItem('loggedIn');
  const isAdmin = sessionStorage.getItem('admin');
  const [name, setname] = useState(product.name)
  const [price, setprice] = useState(product.price)
  const [details, setdetails] = useState(product.details)

  async function changeData() {
    const warning = document.getElementById('updateWarnings')

    if (price !== '' && name !== '' && details !== '') {
      if (details.length < 50) {
        warning.style.color = 'red';
        warning.innerHTML = 'Details should be well described!';
      }
      if (isNaN(price)) {
        warning.style.color = 'red';
        warning.innerHTML = 'Price should be integer';
      }
      else {
        product.name = name;
        product.price = price;
        product.details = details;
        await setDoc(doc(db, "products", product.id.toString()), {
          ...product
        })
        warning.style.color = 'green';
        warning.innerHTML = 'Successfuly Updated :)';
        edit(true, 'Edit');
        navigate('/collections')
      }
      
    }

    else {
      warning.style.color = 'red';
      warning.innerHTML = 'Fill all fields!!';
    }
  }

  function edit(read, value) {
    document.getElementById("name1").readOnly = read;
    document.getElementById("price1").readOnly = read;
    document.getElementById("detail1").readOnly = read;
    document.getElementById("editButton").replaceChildren(value)
  }

  let toggler = true
  function editData(){
    if (toggler) {
      edit(false, 'Save')
      toggler = false;
    }
    else {
      changeData()
      toggler = true;
    }
  }

  async function addCart() {
    document.querySelector('#myBtn').disabled = true;
    document.getElementById('myBtn').style.backgroundColor = "rgb(104, 110, 156)";
    setNotifyCart(prev => prev + 1);
    await setDoc(doc(db, user, product.id.toString()), {
      ...product, quantity: 1
    })
    document.querySelector('#myBtn').disabled = false;
    document.getElementById('myBtn').style.backgroundColor = "rgb(32, 37, 75)";
  }

  async function removeProduct() {
    await deleteDoc(doc(db, "products", product.id.toString()))
    navigate('/collections')
    window.location.reload(true)
  }

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
          <div>
            <p style={{display: 'inline', fontSize: '20px'}}>$</p>
            <input id="price1" readOnly onChange={event => setprice(event.target.value)} value={price} />
          </div>
          <button id='myBtn' onClick={addCart} className='addToCart'>Add to cart</button>
          <h4 className='detailsHeader'>Details</h4>
          <textarea id="detail1" readOnly onChange={event => setdetails(event.target.value)} value={details} />

          {isAdmin
            ? <>
              <button className='addToCart' id='editButton' onClick={editData}>Edit</button>
              <button className='addToCart' onClick={removeProduct}>Remove</button>
            </>
            : null
          }
          <p id='updateWarnings'></p>
        </div>

      </div>
      <Recommended />
    </>

  )
}