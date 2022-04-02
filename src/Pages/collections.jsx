import React from 'react'
import Product from "../Componets/products" 


export default function collections(props) {

  return (
    <div className='product_container'>
      { props.map( product => {
        return Product(product)
      })}
    </div>
  )
}
