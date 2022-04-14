import React from 'react'

export default function products() {
  return (
    <>
      <div className='productPage'>
        <div>
          <img className='primaryImage' src="https://cdn.shopify.com/s/files/1/0371/0749/products/youbeauty_995bdab6-013f-4743-8bfd-ddf882c8c82a_720x.png?v=1630611704" alt="" />
          <img className='additionalImages' src="https://cdn.shopify.com/s/files/1/0371/0749/products/youbeauty_995bdab6-013f-4743-8bfd-ddf882c8c82a_720x.png?v=1630611704" alt="" />
          <img className='additionalImages' src="https://cdn.shopify.com/s/files/1/0371/0749/products/youbeauty_995bdab6-013f-4743-8bfd-ddf882c8c82a_720x.png?v=1630611704" alt="" />
          <img className='additionalImages' src="https://cdn.shopify.com/s/files/1/0371/0749/products/youbeauty_995bdab6-013f-4743-8bfd-ddf882c8c82a_720x.png?v=1630611704" alt="" />
          <img className='additionalImages' src="https://cdn.shopify.com/s/files/1/0371/0749/products/youbeauty_995bdab6-013f-4743-8bfd-ddf882c8c82a_720x.png?v=1630611704" alt="" />
        </div>

        <div>
          <h5>Name</h5>
          <h6>Price</h6>
          <button>Add to cart</button>
          <p>Details</p>
        </div>
      </div>
      <div className='recomendedProducts'>
        You may also like
      </div>
    </>

  )
}