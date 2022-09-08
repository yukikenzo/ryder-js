import React from 'react'
import Product from "../Componets/Products"


export default function Collections({ products, query }) {

  return (
    <div className='product_container'>
      {products.map((product) => {
        if (product.name.toLowerCase().includes(query.toLowerCase())) {
          return < Product product={product} />
        }
      })}
    </div>
  )
}
