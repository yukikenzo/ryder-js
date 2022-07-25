import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase-config';

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
  display: 'inline'
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
  async function remove() {
    await deleteDoc(doc(db, "cart", product.id.toString()))
    window.location.reload(true)
  }

  const [amount, setAmount] = useState(1)

  function increaseAmount() {
    setAmount(amount+1);
  }
  function decreaseAmount() {
    if (amount == 1) {
      remove()
    }
    else {
      setAmount(amount-1);
    }
    
  }
  return (
    <div style={style}>
      <div class="item3">
        <img style={style2} src={product.img1} alt="" />
        <h6 style={style3}>{product.name}</h6>
      </div>
      <div style={style5} class="item4">
        <h6 style={{textDecoration: 'line-through'}}>{'$' + (parseInt(product.price) + 10)  + '.00'}</h6>
        <h6>{'$' + product.price}</h6>
      </div>
      <div style={style4} class="item5">
        <button onClick={decreaseAmount} style={style1}>-</button>
        <h6 style={style1}>{amount}</h6>
        <button onClick={increaseAmount} style={style1}>+</button>
      </div>
      <div style={style5} class="item6">
        <h6>{'$' + (parseInt(product.price) * amount) + '.00'}</h6>
        <FontAwesomeIcon onClick={remove} icon={faTrash} />
      </div>
    </div>
  )
}