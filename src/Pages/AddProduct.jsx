import React from 'react'
import { doc, setDoc, query, orderBy, limit, collection, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';
import { useState, useEffect } from 'react';


let k = 1;
export default function AddProduct() {

  const citiesRef = collection(db, "products");
  const q = query(citiesRef, orderBy("id", "desc"), limit(1));

  useEffect(() => {
    const getLast = async () => {

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        k = doc.id;
        console.log(doc.id);
      });
    };
    getLast();
  }, [])

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
    await setDoc(doc(db, "products", `${k}`), {
      ...data, id: k
    });
    k++;
  }

  return (
    <div className='addProduct'>
      <div>
        <div className='inputImgLink'>

          <input value={data.img1} onChange={e => setData({ img1: e.target.value })} placeholder='Paste your Image links here' type="text" />
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
