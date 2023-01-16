import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../Contex';

const h1style = {
  fontSize: '20px',
  display: 'block',
  width: '85vw',
  margin: 'auto',
  marginTop: '80px',
  marginBottom: '50px',
}

export default function Recommended({ editable }) {
  const { products } = useContext(Context);
  let recommendedClothesData = products.slice(0, 4);
  const navigate = useNavigate();

  function passState(id, clothe) {
    editable?.(true, 'Edit')
    navigate(`/product/${id}`, {
      state: clothe
    })
    window.scroll({
      top: 0,
      left: 0
    });
  }

  return (
    <div>
      <h1 style={h1style}>You may also like</h1>
      <div className='recommendationContainer'>
        {recommendedClothesData.map((clothe) => {
          return (
            <div className='product_image' key={clothe.id}>
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
