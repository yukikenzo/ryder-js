import React from 'react'
import Product from "../Componets/products" 


export default function collections() {
  const product_collections = [Product()]

// Simulating DataBase
  let x = ["https://cdn.shopify.com/s/files/1/0371/0749/products/youbeauty_995bdab6-013f-4743-8bfd-ddf882c8c82a_720x.png?v=1630611704",
  "https://cdn.shopify.com/s/files/1/0371/0749/products/youbeauty_995bdab6-013f-4743-8bfd-ddf882c8c82a_720x.png?v=1630611704",
  "https://cdn.shopify.com/s/files/1/0371/0749/products/youbeauty_995bdab6-013f-4743-8bfd-ddf882c8c82a_720x.png?v=1630611704",
  "https://cdn.shopify.com/s/files/1/0371/0749/products/youbeauty_995bdab6-013f-4743-8bfd-ddf882c8c82a_720x.png?v=1630611704",
  "https://cdn.shopify.com/s/files/1/0371/0749/products/youbeauty_995bdab6-013f-4743-8bfd-ddf882c8c82a_720x.png?v=1630611704",
  "https://cdn.shopify.com/s/files/1/0371/0749/products/youbeauty_995bdab6-013f-4743-8bfd-ddf882c8c82a_720x.png?v=1630611704",
  "https://cdn.shopify.com/s/files/1/0371/0749/products/youbeauty_995bdab6-013f-4743-8bfd-ddf882c8c82a_720x.png?v=1630611704",
  "https://cdn.shopify.com/s/files/1/0371/0749/products/youbeauty_995bdab6-013f-4743-8bfd-ddf882c8c82a_720x.png?v=1630611704",
  "https://cdn.shopify.com/s/files/1/0371/0749/products/youbeauty_995bdab6-013f-4743-8bfd-ddf882c8c82a_720x.png?v=1630611704",
  "https://cdn.shopify.com/s/files/1/0371/0749/products/youbeauty_995bdab6-013f-4743-8bfd-ddf882c8c82a_720x.png?v=1630611704",
  "https://cdn.shopify.com/s/files/1/0371/0749/products/youbeauty_995bdab6-013f-4743-8bfd-ddf882c8c82a_720x.png?v=1630611704",]


  for (let i = 0; i < x.length; i++) {
    product_collections.push(Product());
  }

  return (
    <div className='product_container'>
      {product_collections}
    </div>
  )
}
