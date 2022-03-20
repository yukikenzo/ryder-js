import React from 'react'
import Product from "../Componets/products" 


export default function collections() {
  const product_collections = []

// Simulating DataBase
  let x = {
    img1 : 'https://cdn.shopify.com/s/files/1/0371/0749/products/YouBeauty_2e9afc77-bbbb-416d-bdab-3b79d16db1c1_720x.png?v=1630611704',
    img2 : 'https://cdn.shopify.com/s/files/1/0371/0749/products/YouBeauty_2e9afc77-bbbb-416d-bdab-3b79d16db1c1_720x.png?v=1630611704',
    price : 'https://cdn.shopify.com/s/files/1/0371/0749/products/YouBeauty_2e9afc77-bbbb-416d-bdab-3b79d16db1c1_720x.png?v=1630611704',
    name : 'You Beauty Sweater',
    price : '125.00',
    details : 'The You Beauty knit sweater is a relaxed fit sweater made from 100% organic cotton. Featuring a ribbed cuff and neckband and "You Beauty" intarsia in white. This lightweight sweater is perfect for in between seasons.'
  }

  for (let i = 0; i < 10; i++) {
    product_collections.push(Product(x.img1, x.img2, x.name, x.price));
  }

  return (
    <div className='product_container'>
      {product_collections}
    </div>
  )
}
