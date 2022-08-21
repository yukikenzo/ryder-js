import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Recommended from '../Componets/Recommended'
import Selected from '../Componets/Selected'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase-config'

export default function Cart() {
  const user = sessionStorage.getItem('loggedIn');
  const cartCollectionRef = collection(db, user);
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState([{}]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getSelected = async () => {
      let data = await getDocs(cartCollectionRef);
      setCart(data.docs.map((doc) => ({ ...doc.data() })));
      console.log(data)
      setSubtotal(data.docs.map((doc) => ({ id: parseInt(doc.id), price: doc.price })))
    };
    getSelected();
  }, [])

  useEffect(() => {
    //in case that subtotal is empty
    try {
      setTotal(
        subtotal.reduce((price1, price2) => {
          return price1.price + price2.price
        })
      )
    } catch (error) {

    }

  }, [subtotal])

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
          <div className="grid-container">
            <div className="item1">Your cart</div>
            <div className="item2"><Link to={'/collections'}>Continue shopping</Link></div>
            <div className="item3">PRODUCT</div>
            <div className="item4">PRICE</div>
            <div className="item5">QUANTITY</div>
            <div className="item6">TOTAL:</div>
          </div>
          {cart.map((product) => {
            return <Selected product={product} setSubtotal={setSubtotal} />
          })}
          <p style={{ margin: '70px 0 0 7vw' }}>Order Notes:</p>
          <div style={{ textAlign: 'right', marginRight: '7vw' }}>
            <p style={{ display: 'inline' }}>Subtotal <p style={{ marginLeft: '15px', display: 'inline', fontSize: '20px' }}>${parseInt(total)}.00 USD</p></p>
            <p style={{ fontSize: '15px', marginTop: '20px' }}>Tax included. Shipping calculated at checkout.</p>
            <button className='chekOutButton'>Check out</button>
          </div>
        </>
      }
      <Recommended />
    </div>
  )
}
