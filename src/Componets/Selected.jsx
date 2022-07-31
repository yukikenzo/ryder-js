import React from 'react'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { doc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const style = {
  display: 'grid',
  gridTemplateColumns: '40% 10% 30% auto',
  columnGap: '15px',
  rowGap: '5px',
  padding: '5px',
  margin: '0 7vw 10px 7vw',
  border: '2px groove gray',
  borderRight: 'none',
  borderLeft: 'none'
}

const style1 = {
  display: 'inline',
  marginLeft: '10px',
  marginRight: '10px',
  width: '30px',
  height: '30px',
  fontSize: '20px',
  border: 'none',
  backgroundColor: 'transparent',
}

const style2 = {
  height: '100px',
  width: '100px',
  display: 'inline',
  objectFit: 'cover'
}

const style3 = {
  marginLeft: '10px',
  display: 'inline',
  cursor: 'pointer'
}

const style4 = {
  border: '2px groove gray',
  margin: '25px 120px 25px 0'
}

const style5 = {
  margin: 'auto',
  marginLeft: '0',
  marginRight: '0'
}

export default function Selected({ product }) {

  const user = sessionStorage.getItem('loggedIn');

  async function remove() {
    await deleteDoc(doc(db, user, product.id.toString()))
    window.location.reload(true)
  }

  const [amount, setAmount] = useState(0)

  useEffect(() => {
    async function changeQuatity() {
      if (product.quantity+amount < 1) {
        remove()
      }
      else {
        await setDoc(doc(db, user, product.id.toString()), {
          ...product, quantity: product.quantity+amount
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
    <div style={style}>
      <div class="item3">
        <img style={style2} src={product.img1} alt="" />
        <h6 className='cartProductName' onClick={passState} style={style3}>{product.name}</h6>
      </div>
      <div style={style5} class="item4">
        <h6 style={{ textDecoration: 'line-through' }}>{'$' + (parseInt(product.price) + 10) + '.00'}</h6>
        <h6>{'$' + product.price + '.00'}</h6>
      </div>
      <div style={style4} class="item5">
        <button onClick={() => {setAmount(amount-1)}} style={style1}>-</button>
        <h6 style={style1}>{product.quantity+amount}</h6>
        <button onClick={() => {setAmount(amount+1)}} style={style1}>+</button>
      </div>
      <div style={style5} class="item6">
        <h6>{'$' + (parseInt(product.price) * (product.quantity+amount)) + '.00'}</h6>
        <FontAwesomeIcon onClick={remove} icon={faTrash} />
      </div>
    </div>
  )
}