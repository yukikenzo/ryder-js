import React from 'react'

export default function AddProduct() {

  function dragEnter() {
    document.getElementById('uploadImage').style.background = 'red'
  }

  function dragLeave() {
    document.getElementById('uploadImage').style.background = 'antiquewhite'
  }

  const dropped = (event, data) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div className='addProduct'>
      <div id='uploadImage' className='addProductImage' onDragOver={(event) => { event.preventDefault() }} onDragEnter={dragEnter} onDragLeave={dragLeave} onDrop={event => { dropped(event, event.dataTransfer.files) }}>Drop Files Here!</div>
      <div className='productDetails'>
        <h1 className='newProductName'>Name</h1>
        <h2 className='newProductPrice'>Price</h2>
        <p className='newProductDtails'>

          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolorem, nihil. Obcaecati reprehenderit, ea ex ad
          nobis fugiat dolore quia harum sequi reiciendis rem rerum numquam
          impedit sint deleniti quae? Vitae!

        </p>
      </div>
    </div>
  )
}
