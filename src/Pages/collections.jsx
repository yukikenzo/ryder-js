import React from 'react'
import Product from "../Componets/Products"
import { BsXLg } from "react-icons/bs";
import { useState } from 'react';

export default function Collections({ products }) {

  const [searchQuery, setSearchQuery] = useState('')

  products = products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <>
      <div id='searchContainer'>
        <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='searchInput' placeholder='Search Product' type="text" />
        <button onClick={() => setSearchQuery('')}> <BsXLg className='clear_search_icon' /> </button>
      </div>

      <div className='product_container'>
        {products.map((product, index) => {
          return < Product product={product} key={index.toString()} />
        })}
      </div>
    </>
  )
}
