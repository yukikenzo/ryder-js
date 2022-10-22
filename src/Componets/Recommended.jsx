import React from 'react'
import { useNavigate } from 'react-router-dom';


const style1 = {
  fontSize: '20px',
  display: 'block',
  marginTop: '80px',
  marginBottom: '50px'
}

export default function Recommended({ products }) {
  let recommendedClothesData = [];
  let randomId = [];
  while (randomId.length < 4) {
    let random = Math.floor(Math.random() * products.length);
    if (randomId.includes(random)) {
      continue
    }
    else {
      recommendedClothesData.push(products[random])
      randomId.push(random);
    }
  }

  const navigate = useNavigate();

  function passState(id, rec) {
    navigate(`/product/${id}`, {
      state: rec
    })
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div>
      <h1 className='recommendationContainer' style={style1}>You may also like</h1>
      <div className='recommendationContainer'>
        {recommendedClothesData.map((clothe, index) => {
          return (
            <div className='rec_product_image' key={index.toString()}>
              <div className='rec_defalut_image_container'>
                <img onClick={() => passState(clothe.id, clothe)} className='rec_default_image' src={clothe.img1} alt="clothes" />
              </div>
              <p className='rec_clothes_name'>{clothe.name}</p>
              <h4 className='rec_clothes_price'>{'$' + clothe.price + '.00'}</h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}
