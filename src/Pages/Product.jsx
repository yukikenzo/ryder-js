import React from 'react'
import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getDatabase, ref, onValue } from "firebase/database";

export default function Product() {
  const location = useLocation();

  const product = location.state;

  let { id } = useParams();

  function edit() {
    document.getElementById("name1").readOnly = false;
    document.getElementById("price1").readOnly = false;
    document.getElementById("detail1").readOnly = false;
    document.getElementById("saveChanges").style.display = "block";
  }

  const [name, setname] = useState(product.name)
  const [price, setprice] = useState(product.price)
  const [details, setdetails] = useState(product.details)

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
          <button>Add to cart</button>
          <textarea id="detail1" readOnly onChange={event => setdetails(event.target.value)} value={details} />
          {true
            ? <>
              <button onClick={edit}>Edit</button>
              <button onClick={edit}>Remove</button>
            </>
            : null
          }
          <button id='saveChanges'>Save</button>
        </div>

      </div>
      <div className='recomendedProducts'>
        You may also like
      </div>
    </>

  )
}