import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase-config';

export default function Product() {
  
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;
  console.log(product)

  async function changeData() {
      await setDoc(doc(db, "products", product.id.toString()), {
        product
      })
      unEdit();
  }

  function edit() {
    document.getElementById("name1").readOnly = false;
    document.getElementById("price1").readOnly = false;
    document.getElementById("detail1").readOnly = false;
    document.getElementById("saveChanges").style.display = "block";
  }

  function unEdit() {
    document.getElementById("name1").readOnly = true;
    document.getElementById("price1").readOnly = true;
    document.getElementById("detail1").readOnly = true;
    document.getElementById("saveChanges").style.display = "none";
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
          <input id="price1" readOnly onChange={event => setprice(event.target.value)} value={price} />
          <button className='addToCart'>Add to cart</button>
          <h4 className='detailsHeader'>Details</h4>
          <textarea id="detail1" readOnly onChange={event => setdetails(event.target.value)} value={details} />
          
          {true
            ? <>
              <button className='addToCart' onClick={edit}>Edit</button>
              <button className='addToCart' onClick={removeProduct}>Remove</button>
            </>
            : null
          }
          <button className='addToCart' onClick={changeData} id='saveChanges'>Save</button>
        </div>

      </div>
      <div className='recomendedProducts'>
        You may also like
      </div>
    </>

  )
}