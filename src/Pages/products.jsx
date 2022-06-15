import React from 'react'
import { useState } from 'react';

export default function products({products, isAdmin}) {

  function edit(){
    document.getElementById("name1").readOnly = false;
    document.getElementById("price1").readOnly = false;
    document.getElementById("detail1").readOnly = false;
    document.getElementById("saveChanges").style.display = "block";
  }

  const [name, setname] = useState(products[0].name)
  const [price, setprice] = useState(products[0].price)
  const [details, setdetails] = useState(products[0].details)

  return (
    <>
      <div className='productPage'>
        <div>
          <img className='primaryImage' src={products[0].img1} alt="" />
          <img className='additionalImages' src={products[0].img2} alt="" />
          <img className='additionalImages' src={products[0].img3} alt="" />
          <img className='additionalImages' src={products[0].img4} alt="" />
        </div>

        <div className='productDescription'>
          <input id="name1" readOnly onChange={event=>setname(event.target.value)} value={name}/>
          <input id="price1" readOnly onChange={event=>setprice(event.target.value)} value={price}/>
          <button>Add to cart</button>
          <textarea id="detail1" readOnly onChange={event=>setdetails(event.target.value)} value={details}/>
          {isAdmin
            ? <button onClick={edit}>Edit</button>
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