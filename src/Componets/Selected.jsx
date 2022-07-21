import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const style = {
  display: 'grid',
  gridTemplateColumns: '40% 10% 30% auto',
  columnGap: '15px',
  rowGap: '5px',
  padding: '5px',
  margin: '0 7vw 10px 7vw',
  border: '2px groove gray',
  borderRight: 'none',
  borderLeft: 'none'
}

const style1 = {
  display: 'inline',
  marginLeft: '10px',
  marginRight: '10px'
}

const style2 = {
  height: '100px',
  width: '100px',
  display: 'inline',
  objectFit: 'cover'
}

const style3 = {
  marginLeft: '10px',
  display: 'inline'
}

const style4 = { 
  border: '2px groove gray',
  margin: '25px 120px 25px 0'
}

const style5 = { 
  margin: 'auto',
  marginLeft: '0',
  marginRight: '0'
}


export default function Selected({ product }) {
  return (
    <div style={style}>
      <div class="item3">
        <img style={style2} src={product.img1} alt="" />
        <h6 style={style3}>{product.name}</h6>
      </div>
      <div style={style5} class="item4">
        <h6>{product.price}</h6>
        <h6>{product.price}</h6>
      </div>
      <div style={style4} class="item5">
        <h6 style={style1}>-</h6>
        <h6 style={style1}>QUANTITY</h6>
        <h6 style={style1}>+</h6>
      </div>
      <div style={style5} class="item6">
        <h6>TOTALL</h6>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  )
}