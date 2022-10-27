import React from 'react'
import { useNavigate } from 'react-router-dom';


const style = {
  fontSize: '20px',
  display: 'block',
  marginTop: '80px',
  marginBottom: '50px',
  width: '85vw',
  margin: 'auto'
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
      <h1 style={style}>You may also like</h1>
      <div className='recommendationContainer'>
        {recommendedClothesData.map((clothe, index) => {
          return (
            <div className='product_image' key={index.toString()}>
              <div className='defalut_image_container'>
                <img onClick={() => passState(clothe.id, clothe)} className='default_image' src={clothe.img1} alt="clothes" />
              </div>
              <p className='clothes_name'>{clothe.name}</p>
              <h4 className='clothes_price'>{'$' + clothe.price + '.00'}</h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}
