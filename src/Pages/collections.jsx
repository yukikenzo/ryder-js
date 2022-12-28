import React, { useState, useEffect } from 'react'
import Product from "../Componets/Products"
import { BsXLg } from "react-icons/bs";
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

export default function Collections() {
  const [products, setProducts] = useState([])
  async function fetchingProducts() {
    const productsCollectionRef = collection(db, 'products');
    let fetchedData = await getDocs(productsCollectionRef);
    setProducts(fetchedData.docs.map((doc) => ({ ...doc.data() })));
  }
  
  useEffect(() => {
    fetchingProducts()
  }, [])

  const [searchQuery, setSearchQuery] = useState('')

  const clothe = products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <>
      <div id='searchContainer'>
        <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='searchInput' placeholder='Search Product' type="text" />
        <button onClick={() => setSearchQuery('')}> <BsXLg className='clear_search_icon' /> </button>
      </div>

      <div className='product_container'>
        {clothe.map((product) => {
          return < Product product={product} key={product.id} />
        })}
      </div>
    </>
  )
}
