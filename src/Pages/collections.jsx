import React from 'react'
import Product from "../Componets/products"


export default function collections(props) {
  return (
    <div className='product_container'>
      {props.products.map((product) => {
        return < Product product = {product} />
      })}
    </div>
  )
}
