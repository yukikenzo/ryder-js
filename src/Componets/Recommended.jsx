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
  }

  return (
    <div>
      <h1 className='recommendationContainer' style={style1}>You may also like</h1>
      <div className='recommendationContainer'>
        {recommendedClothesData.map(rec => {
          return (
            <>
              <div className='rec_product_image'>
                <img className='rec_default_image' src={rec.img1} alt="clothes" />
                <img onClick={() => passState(rec.id, rec)} className='rec_alt_image' src={rec.img2} alt="link clothes" />
                <p className='rec_clothes_name'>{rec.name}</p>
                <h4 className='rec_clothes_price'>{'$' + rec.price + '.00'}</h4>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}
