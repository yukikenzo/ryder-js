import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function Cart({product}) {

  const location = useLocation();
  const [selected, setSelected] = useState(location.state)

  return (
    <div>cart</div>
  )
}
