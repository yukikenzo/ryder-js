import React from 'react'
import { doc, setDoc, query, orderBy, limit, collection, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';
import { useState, useEffect } from 'react';


let k = 1;
export default function AddProduct() {

  const citiesRef = collection(db, "products");
  const q = query(citiesRef, orderBy("id", "desc"), limit(1));

  let [data, setData] = useState({})

  useEffect(() => {
    const getLast = async () => {

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        k = parseInt(doc.id) + 1;
      });
    };
    getLast();
  }, data)

  async function submitData() {
    let len = 0;
    for (let i in Object.values(data)) {
      if (Object.values(data)[i] !== '') {
        len++;
      }
    }

    const warning = document.getElementById('warnings')

    if (len === 7) {
      if (data.details.length < 50) {
        warning.style.color = 'red';
        warning.innerHTML = 'Details should be well described!';
      }
      if (isNaN(data.price)) {
        warning.style.color = 'red';
        warning.innerHTML = 'Price should be integer';
      }
      else {
        await setDoc(doc(db, "products", `${k}`), {
          ...data, id: k
        })
        warning.style.color = 'green';
        warning.innerHTML = 'Success!!';
        window.location.reload(false);
      }
      
    }

    else {
      warning.style.color = 'red';
      warning.innerHTML = 'Fill all fields!!';
    }

    setData({
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
        <h5 id='warnings'></h5>
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
