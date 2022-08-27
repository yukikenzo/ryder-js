import React from 'react'
import { doc, setDoc, query, orderBy, limit, collection, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';
import { useState, useEffect } from 'react';


let k = 1;
export default function AddProduct() {

  const citiesRef = collection(db, "products");
  const q = query(citiesRef, orderBy("id", "desc"), limit(1));

  let [data, setData] = useState({
    name: "",
    price: "",
    details: "",
    img1: "",
    img2: "",
    img3: "",
    img4: ""
  })

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
    for (let i = 0; i < 7; i++) {
      if (Object.values(data)[i] == '') {
        document.getElementById(i.toString()).innerHTML = 'Fill all fields!!';
        document.getElementById(i.toString()+i.toString()).style.borderColor = 'red'
        return;
      }
    }

    if (data.details.length < 50) {
      document.getElementById('2').innerHTML = 'Details should be well described!';
      document.getElementById('22').style.borderColor = 'red'
      return
    }
    if (isNaN(data.price) || data.price < 1) {
      document.getElementById('1').innerHTML = 'Price should be integer';
      document.getElementById('11').style.borderColor = 'red'
      return
    }

    await setDoc(doc(db, "products", `${k}`), {
      ...data, id: k
    })
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
    // window.location.reload(false);
  }

  function clearWarning(id, clue, value) {
    setData({ ...data, [`${clue}`]: value })
    document.getElementById(id).innerHTML = '';
    document.getElementById(id+id).style.borderColor = 'rgb(118, 118, 118)'
  }

  return (
    <div className='addProduct'>
      <div>
        <div className='inputImgLink'>
          <input id='33' value={data.img1} onChange={e => clearWarning('3', 'img1', e.target.value)} placeholder='Paste your Image links here' type="text" />
          <h5 id='3'></h5>
          <input id='44' value={data.img2} onChange={e => clearWarning('4', 'img2', e.target.value)} placeholder='Paste your Image links here' type="text" />
          <h5 id='4'></h5>
          <input id='55' value={data.img3} onChange={e => clearWarning('5', 'img3', e.target.value)} placeholder='Paste your Image links here' type="text" />
          <h5 id='5'></h5>
          <input id='66' value={data.img4} onChange={e => clearWarning('6', 'img4', e.target.value)} placeholder='Paste your Image links here' type="text" />
          <h5 id='6'></h5>
        </div>
        <div className='productDetails'>
          <input id='00' value={data.name} onChange={e => clearWarning('0', 'name', e.target.value)} placeholder='Name' type="text" />
          <h5 id='0'></h5>
          <input id='11' value={data.price} onChange={e => clearWarning('1', 'price', e.target.value)} placeholder='Price' type="text" />
          <h5 id='1'></h5>
          <textarea id='22' value={data.details} onChange={e => clearWarning('2', 'details', e.target.value)} placeholder='Details' cols="30" rows="10"></textarea>
          <h5 id='2'></h5>
        </div>
      </div>
      <h5 id='success'></h5>
      <button type='submit' onClick={submitData}>Submit</button>
    </div>
  )
}
