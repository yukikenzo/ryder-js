import React from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase-config';
import { useState } from 'react';
import { reload } from 'firebase/auth';

export default function AddProduct() {
  let [data, setData] = useState({
    name: "",
    price: "",
    details: "",
    img1: "",
    img2: "",
    img3: "",
    img4: ""
  })

  async function submitData() {
    await addDoc(collection(db, "products"), data);
    setData({
      ...data,
      name: "",
      price: "",
      details: "",
      img1: "",
      img2: "",
      img3: "",
      img4: ""
    })
  }

  return (
    <div className='addProduct'>
      <div>
        <div className='inputImgLink'>
   
          <input value={data.img1} onChange={e => setData({ ...data, img1: e.target.value })} placeholder='Paste your Image links here' type="text" />
          <input value={data.img2} onChange={e => setData({ ...data, img2: e.target.value })} placeholder='Paste your Image links here' type="text" />
          <input value={data.img3} onChange={e => setData({ ...data, img3: e.target.value })} placeholder='Paste your Image links here' type="text" />
          <input value={data.img4} onChange={e => setData({ ...data, img4: e.target.value })} placeholder='Paste your Image links here' type="text" />
        </div>
        <div className='productDetails'>
          <input value={data.name} onChange={e => setData({ ...data, name: e.target.value })} placeholder='Name' type="text" />
          <input value={data.price} onChange={e => setData({ ...data, price: e.target.value })} placeholder='Price' type="text" />
          <textarea value={data.details} onChange={e => setData({ ...data, details: e.target.value })} placeholder='Details' name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
      <button type='submit' onClick={submitData}>Submit</button>
    </div>
  )
}
