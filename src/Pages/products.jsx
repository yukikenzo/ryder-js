import React from 'react'
import { isAdmin } from './login'

export default function products(props) {

  console.log(props.products[0], "idinah")

  return (
    <>
      <div className='productPage'>
        <div>
          <img className='primaryImage' src={props.products[0].img1} alt="" />
          <img className='additionalImages' src={props.products[0].img2} alt="" />
          <img className='additionalImages' src="https://cdn.shopify.com/s/files/1/0371/0749/products/youbeauty_995bdab6-013f-4743-8bfd-ddf882c8c82a_720x.png?v=1630611704" alt="" />
          <img className='additionalImages' src="https://cdn.shopify.com/s/files/1/0371/0749/products/youbeauty_995bdab6-013f-4743-8bfd-ddf882c8c82a_720x.png?v=1630611704" alt="" />
          <img className='additionalImages' src="https://cdn.shopify.com/s/files/1/0371/0749/products/youbeauty_995bdab6-013f-4743-8bfd-ddf882c8c82a_720x.png?v=1630611704" alt="" />
        </div>

        <div>
          <h5>{props.products[0].name}</h5>
          <h6>{props.products[0].price}</h6>
          <button>Add to cart</button>
          <p>{props.products[0].details}</p>

          {isAdmin
            ? <button>Edit</button>
            : null
          }

        </div>
      </div>
      <div className='recomendedProducts'>
        You may also like
      </div>
    </>

  )
}