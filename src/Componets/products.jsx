import React from 'react'
import "./style.css"

export default function products(props) {
  props.price = 300
  return (
    <div className='product_image'>
        <img className='default_image' src={props.img1} alt="clothes" />
        <img onClick={event => window.location.href='/#/products'} className='alt_image' src={props.img2}  alt="link clothes" />
        <p className='clothes_name'>{props.name}</p>
        <h4 className='clothes_price'>{props.price}</h4>
    </div>
  )
}
