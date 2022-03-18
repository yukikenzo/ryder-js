import React from 'react'
import "./style.css"

export default function products() {
  return (
    <div className='product_image'>
        <img className='default_image' src="https://cdn.shopify.com/s/files/1/0371/0749/products/YouBeauty_2e9afc77-bbbb-416d-bdab-3b79d16db1c1_720x.png?v=1630611704" />
        <img className='alt_image' src="https://cdn.shopify.com/s/files/1/0371/0749/products/youbeauty_995bdab6-013f-4743-8bfd-ddf882c8c82a_720x.png?v=1630611704" />
        <p className='clothes_name'>You Beauty Sweater</p>
        <h4 className='clothes_price'>$150.00</h4>
    </div>
  )
}
