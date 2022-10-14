import React from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom'


export default function Products({ product }) {
  const navigate = useNavigate();

  function passState() {
    navigate(`/product/${product.id}`, {
      state: product
    })
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <div className='product_image'>
        <div className='product_image_container'>
          <img className='default_image' src={product.img1} alt="clothes" />
          <img onClick={passState} className='alt_image' src={product.img2} alt="link clothes" />
        </div>
        <p className='clothes_name'>{product.name}</p>
        <h4 className='clothes_price'>{'$' + product.price + '.00'}</h4>
      </div>
    </>
  )
}
