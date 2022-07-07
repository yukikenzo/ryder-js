import React from 'react'
import Product from "../Componets/Products"


export default function Collections(props) {
  console.log(props.products)

  return (
    <div className='product_container'>
      {props.products.map((product) => {
        return < Product product={product} />
      })}
    </div>
  )
}
