import { db } from '../firebase-config';
import { BiTrash } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { doc, deleteDoc, setDoc } from "firebase/firestore";

export default function Selected({ product, setSubtotal }) {

  const user = sessionStorage.getItem('loggedIn');
  async function remove() {
    await deleteDoc(doc(db, user, product.id.toString()))
    window.location.reload(true)
  }

  const [amount, setAmount] = useState(0)

  useEffect(() => {
    console.log("useEffect")
    setSubtotal(subtotal =>
      subtotal.map(obj => {
        if (obj.id === product.id) {
          return { ...obj, price: parseInt(product.price) * (product.quantity + amount), quantity: product.quantity + amount };
        }
        return obj;
      }),
    );
    
    async function changeQuatity() {
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

  function changeAmount(increase) {
    console.log('setState')
    if (increase && product.quantity + amount < 50) {
      setAmount(amount + 1)
    }
    else if (increase === false) {
      setAmount(amount - 1)
    }
  }

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
        <h6>{'$' + (parseInt(product.price) + 10) + '.00'}</h6>
        <h6>{'$' + product.price + '.00'}</h6>
      </div>

      <div className='selQuantity'>
        <button onClick={() => { changeAmount(false) }}>-</button>
        <h6 style={{ marginTop: '9px' }}>{product.quantity + amount}</h6>
        <button onClick={() => { changeAmount(true) }}>+</button>
      </div>

      <div className='selTotal'>
        <h6 className='totalH6'>{'$' + (parseInt(product.price) * (product.quantity + amount)) + '.00'}</h6>
        <BiTrash onClick={remove} />
      </div>
      
    </div>
  )
}