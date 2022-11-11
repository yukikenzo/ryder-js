import React, { useState } from 'react'
import { doc, setDoc, query, orderBy, limit, collection, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';

export default function AddProduct() {
  let k = 1;

  let [data, setData] = useState({
    name: "",
    price: "",
    details: "",
    img1: "",
    img2: "",
    img3: "",
    img4: ""
  });

  (async function () {
    const citiesRef = collection(db, "products");
    const getLastProduct = query(citiesRef, orderBy("id", "desc"), limit(1));
    const querySnapshot = await getDocs(getLastProduct);
    querySnapshot.forEach((doc) => {
      k = parseInt(doc.id) + 1;
    });
    alert(k);
  }());

  async function submitData() {
    for (let i = 0; i < 7; i++) {
      if (!Object.values(data)[i]) {
        document.querySelector(`.addProduct .${Object.keys(data)[i]} + p5`).innerHTML = 'Fill all fields!!';
        document.querySelector(`.addProduct .${Object.keys(data)[i]}`).style.borderColor = 'red'
        return;
      }
    }

    if (data.price < 1) {
      document.querySelector('.addProduct p5:nth-of-type(2)').innerHTML = 'Invalid price';
      document.querySelector('.price').style.borderColor = 'red'
      return
    }

    if (data.details.length < 50) {
      document.querySelector('.addProduct p5:nth-of-type(3)').innerHTML = 'Details should be well described!';
      document.querySelector('.details').style.borderColor = 'red'
      return
    }

    await setDoc(doc(db, "products", `${k}`), {
      ...data, id: k
    })

    k++;

    setData({
      name: "",
      price: "",
      details: "",
      img1: "",
      img2: "",
      img3: "",
      img4: ""
    })

    document.getElementById('success').innerHTML = 'Success!!';
    window.location.reload(false)
  }

  function clearWarning(e) {
    let clue = e.target.className
    setData({ ...data, [`${clue}`]: e.target.value })
    document.querySelector(`.addProduct>div .${clue} + p5`).innerHTML = '';
    e.target.style.borderColor = 'rgb(118, 118, 118)'
  }

  return (
    <div className='addProduct'>
      <div>

        <div className='productDetails'>
          <input className='name' value={data.name} onChange={e => clearWarning(e)} placeholder='Name' type="text" />
          <p5></p5>
          <input className='price' value={data.price} onChange={e => clearWarning(e)} placeholder='Price' type="number" />
          <p5></p5>
          <textarea className='details' value={data.details} onChange={e => clearWarning(e)} placeholder='Details' cols="30" rows="10"></textarea>
          <p5></p5>
        </div>

        <div className='inputImgLink'>
          <input className='img1' value={data.img1} onChange={e => clearWarning(e)} placeholder='Paste your Image links here' type="url" />
          <p5></p5>
          <input className='img2' value={data.img2} onChange={e => clearWarning(e)} placeholder='Paste your Image links here' type="url" />
          <p5></p5>
          <input className='img3' value={data.img3} onChange={e => clearWarning(e)} placeholder='Paste your Image links here' type="url" />
          <p5></p5>
          <input className='img4' value={data.img4} onChange={e => clearWarning(e)} placeholder='Paste your Image links here' type="url" />
          <p5></p5>
        </div>

      </div>
      <p5 id='success'></p5>
      <button type='submit' onClick={submitData}>Submit</button>
    </div>
  )
}
