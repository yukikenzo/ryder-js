import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context'
import { Link } from 'react-router-dom'
import Recommended from '../Componets/Recommended'

export default function Cart() {

  const { setCart, cart } = useContext(Context)
  console.log(cart)

  const removeCart = id => {
    setCart(cart.filter(cart => {
      return cart != id;
    }))
  }

  return (
    <div>
      {cart.length == 0 ? 
      <div>
        <h3>Your cart is empty</h3>
        <Link to={'/collections'}>Continue shopping</Link>
      </div>
      :
      <div>not empty</div>
      }
      <Recommended/>
    </div>
  )
}
