import React from 'react'
import "./style.css"

export default function products(img1, img2, name, price) {
  return (
    <div className='product_image'>
        <img className='default_image' src={img1} alt="clothes" />
        <img onClick={event => window.location.href='/#/products'} className='alt_image' src={img2}  alt="link clothes" />
        <p className='clothes_name'>{name}</p>
        <h4 className='clothes_price'>{price}</h4>
    </div>
  )
}
