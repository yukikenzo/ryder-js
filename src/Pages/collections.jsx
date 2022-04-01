import React from 'react'
import Product from "../Componets/products" 


export default function collections() {

  let data = [
    {
      id : 1,
      img1 : 'https://cdn.shopify.com/s/files/1/0371/0749/products/YouBeauty_2e9afc77-bbbb-416d-bdab-3b79d16db1c1_720x.png?v=1630611704',
      img2 : 'https://cdn.shopify.com/s/files/1/0371/0749/products/YouBeauty_2e9afc77-bbbb-416d-bdab-3b79d16db1c1_720x.png?v=1630611704',
      name : 'You Beauty Sweater',
      price : '125.00',
      details : 'The You Beauty knit sweater is a relaxed fit sweater made from 100% organic cotton. Featuring a ribbed cuff and neckband and "You Beauty" intarsia in white. This lightweight sweater is perfect for in between seasons.'
    },
    {
      id : 2,
      img1 : 'https://cdn.shopify.com/s/files/1/0371/0749/products/YouBeauty_2e9afc77-bbbb-416d-bdab-3b79d16db1c1_720x.png?v=1630611704',
      img2 : 'https://cdn.shopify.com/s/files/1/0371/0749/products/YouBeauty_2e9afc77-bbbb-416d-bdab-3b79d16db1c1_720x.png?v=1630611704',
      name : 'You Beauty Sweater',
      price : '125.00',
      details : 'The You Beauty knit sweater is a relaxed fit sweater made from 100% organic cotton. Featuring a ribbed cuff and neckband and "You Beauty" intarsia in white. This lightweight sweater is perfect for in between seasons.'
    },
    {
      id : 3,
      img1 : 'https://cdn.shopify.com/s/files/1/0371/0749/products/YouBeauty_2e9afc77-bbbb-416d-bdab-3b79d16db1c1_720x.png?v=1630611704',
      img2 : 'https://cdn.shopify.com/s/files/1/0371/0749/products/YouBeauty_2e9afc77-bbbb-416d-bdab-3b79d16db1c1_720x.png?v=1630611704',
      name : 'You Beauty Sweater',
      price : '125.00',
      details : 'The You Beauty knit sweater is a relaxed fit sweater made from 100% organic cotton. Featuring a ribbed cuff and neckband and "You Beauty" intarsia in white. This lightweight sweater is perfect for in between seasons.'
    }
  ];

  return (
    <div className='product_container'>
      { data.map( product => {
        return Product(product)
      })}
    </div>
  )
}
