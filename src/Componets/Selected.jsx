import React from 'react'
import { useState, useEffect } from 'react';
import { BiTrash } from 'react-icons/bi';
import { doc, deleteDoc, setDoc} from "firebase/firestore";
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';


export default function Selected({ product, subtotal, setSubtotal }) {

  const user = sessionStorage.getItem('loggedIn');
  async function remove() {
    await deleteDoc(doc(db, user, product.id.toString()))
    window.location.reload(true)
  }

  const [amount, setAmount] = useState(0)

  useEffect(() => {
    setSubtotal(current =>
      // looping throw array of object and searching for poduct with id equal to changed id. 'obj[0]' means id of object, I named '0' insted of id because 
      // Cart.js: setSubtotal(data.docs.map((doc) => ({ ...doc.id, price: doc.price}))), I couldn't change ...doc.id to id and it sets '0' by default
      current.map(obj => {
        if (obj.id === product.id) {
          // parseInt(product.price) * (product.quantity+amount) parses int from server data and and multiplies to previous product quatity and quantity
          // added now. You cannot multyply directly to product quandity because to do that you should fetch data every time when there is change in quantity.
          // Therefore I save added or reduced amount localy and silultainiously send them to server. In this way there is no need to wait everytime fo answer of serwer.
          return { ...obj, price: parseInt(product.price) * (product.quantity + amount) };
        }
        return obj;
      }),
    );

    async function changeQuatity() {
      // removes product i its amount is less then 1
      if (product.quantity + amount < 1) {
        remove()
      }
      else {
        await setDoc(doc(db, user, product.id.toString()), {
          ...product, quantity: product.quantity + amount
        })
      }
    }
    changeQuatity()
  }, [amount])

  const navigate = useNavigate();
  function passState() {
    navigate(`/product/${product.id}`, {
      state: product
    })
  }

  return (
    <div className='selContainer'>
      <div className='selTitles'>
        <img className='selPhoto' src={product.img1} alt="" />
        <div onClick={passState} className='selName'>{product.name}</div>
      </div>
      <div className='selPrice'>
        <h6 style={{ textDecoration: 'line-through', color: 'gray', textDecorationColor: 'black', textDecorationThickness: '1px' }}>{'$' + (parseInt(product.price) + 10) + '.00'}</h6>
        <h6>{'$' + product.price + '.00'}</h6>
      </div>
      <div className='selQuantity'>
        <button onClick={() => { setAmount(amount - 1) }}>-</button>
        <h6 style={{ marginTop: '9px' }}>{product.quantity + amount}</h6>
        <button onClick={() => { setAmount(amount + 1) }}>+</button>
      </div>
      <div className='selTotal'>
        <h6>{'$' + (parseInt(product.price) * (product.quantity + amount)) + '.00'}</h6>
        <BiTrash onClick={remove} />
      </div>
    </div>
  )
}