import React from 'react'

export default function AddProduct() {

  return (
    <div className='addProduct'>
      <div>
        <div className='inputImgLink'>
          <input placeholder='Paste your Image links here' type="text" />
          <input placeholder='Paste your Image links here' type="text" />
          <input placeholder='Paste your Image links here' type="text" />
          <input placeholder='Paste your Image links here' type="text" />
          <input placeholder='Paste your Image links here' type="text" />
          <input placeholder='Paste your Image links here' type="text" />
        </div>
        <div className='productDetails'>
          <input placeholder='Name' type="text" />
          <input placeholder='Price' type="text" />
          <textarea placeholder='Details' name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
      <button>Submit</button>
    </div>
  )
}
