import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Recommended from '../Componets/Recommended'
import Selected from '../Componets/Selected'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase-config'

export default function Cart() {

  const cartCollectionRef = collection(db, 'cart');
  const [cart, setCart] = useState([])

  useEffect(() => {
    const getSelected = async () => {
      let data = await getDocs(cartCollectionRef);
      setCart(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getSelected();
  }, [])

  // const removeCart = id => {
  //   setCart(cart.filter(cart => {
  //     return cart != id;
  //   }))
  // }

  const style1 = {
    fontFamily: "'Jost', sans-serif"
  }

  const style = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '300px'
  }



  return (

    <div style={style1}>
      {cart.length == 0 ?
        <div style={style}>
          <h3>Your cart is empty</h3>
          <Link to={'/collections'}>Continue shopping</Link>
        </div>
        :
        <>
          <div class="grid-container">
            <div class="item1">Your Cart</div>
            <div class="item2">Continue shopping</div>
            <div class="item3">PRODUCT</div>
            <div class="item4">PRICE</div>
            <div class="item5">QUANTITY</div>
            <div class="item6">TOTAL</div>
          </div>
          {cart.map((product) => {
            return <Selected product={product} />
          })}
        </>
      }
      <Recommended />
    </div>
  )
}
