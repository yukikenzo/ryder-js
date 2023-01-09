import { db } from '../firebase-config';
import { BiTrash } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react'
import { doc, deleteDoc, setDoc } from "firebase/firestore";

export default function Selected({ product, setSubtotal, removeProductFromCart }) {
  const user = sessionStorage.getItem('loggedIn');
  const remove = useCallback(
    async () => {
      removeProductFromCart(product.id)
      await deleteDoc(doc(db, user, product.id.toString()))
    },[],
  )

  const [amount, setAmount] = useState(0)

  useEffect(() => {
    setSubtotal(subtotal =>
      subtotal.map(obj => {
        if (obj.id === product.id) {
          return { ...obj, quantity: product.quantity + amount };
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
  }, [amount, user, product, setSubtotal, remove])

  function changeAmount(increase) {
    if (increase && product.quantity + amount < 50) {
      setAmount(prev => ++prev)
    }
    else if (increase === false) {
      setAmount(prev => --prev)
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
        <h6>{'$' + product.price}</h6>
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