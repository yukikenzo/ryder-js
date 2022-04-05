import React from 'react'
import "./style.css"

export default function products(props) {

  return (
    <div className='product_image'>
        <img className='default_image' src={props.product.img1} alt="clothes" />
        <img onClick={event => window.location.href='/#/products'} className='alt_image' src={props.product.img2}  alt="link clothes" />
        <p className='clothes_name'>{props.product.name}</p>
        <h4 className='clothes_price'>{props.product.price}</h4>
    </div>
  )
}
