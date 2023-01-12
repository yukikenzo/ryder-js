import React, { useState, useRef, useEffect, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { doc, setDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from '../firebase-config';
import Recommended from '../Componets/Recommended';
import { Context } from '../Contex';

export default function Product() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  const user = sessionStorage.getItem('loggedIn');
  const isAdmin = sessionStorage.getItem('admin');

  const textarea = useRef()

  const { refetchProducts, setNotifyCart } = useContext(Context);

  const [buttonText, setButtonText] = useState('Edit');
  const [textareaHeight, setTextareaHeight] = useState({})
  const readOnly = useRef(true);
  const [warning, setWarning] = useState('')
  const [productProps, setProductProps] = useState({
    name: product.name,
    price: product.price,
    details: product.details
  });
  const [button, setButton] = useState({
    disabled: false,
    style: { backgroundColor: 'rgb(32, 37, 75)' }
  })

  useEffect(() => {
    setTextareaHeight({ height: `${textarea.current.scrollHeight}px` })
  }, [])

  async function changeData() {
    if (productProps.price && productProps.name && productProps.details !== '') {
      if (productProps.details.length < 50) {
        setWarning('Details should be well described!')
      }
      if (productProps.price < 1) {
        setWarning('Invalid Price')
      }
      else {
        product.name = productProps.name;
        product.price = productProps.price;
        product.details = productProps.details;
        try {
          await setDoc(doc(db, "products", product.id.toString()), {
            ...product
          })
        } catch (err) {
          const error = err.code.toString().replaceAll('-', ' ') + '!!'
          setWarning(error.charAt(0).toUpperCase() + error.slice(1));
          readOnly.current = true;
          return;
        }

        refetchProducts();
        alert('Successfuly Edited')
        navigate('/collections')
      }
    }
    else {
      setWarning('Fill all fields!!')
    }
  }

  function editData() {
    if (buttonText === 'Edit') {
      readOnly.current = false;
      setButtonText('Save')
    }
    else {
      changeData()
    }
  }

  async function addCart() {
    let q = 1
    const docRef = doc(db, user, product.id.toString());
    const docSnap = await getDoc(docRef);
    setButton({ disabled: true, style: { backgroundColor: "rgb(104, 110, 156)" } })

    document.querySelector('.shop-link').style.top = '25px';
    document.querySelector('.brand').style.top = '50px';
    document.querySelector('.icons').style.top = '28px';
    setNotifyCart(prev => ++prev);

    if (docSnap.exists()) {
      q = docSnap.data().quantity + 1
    }

    await setDoc(doc(db, user, product.id.toString()), {
      ...product, quantity: q
    })
    setButton({ disabled: false, style: { backgroundColor: "rgb(32, 37, 75)" } })
  }

  async function removeProduct() {
    try {
      await deleteDoc(doc(db, "products", product.id.toString()))
    } catch (err) {
      const error = err.code.toString().replaceAll('-', ' ') + '!!'
      setWarning(error.charAt(0).toUpperCase() + error.slice(1));
      return;
    }

    navigate('/collections')
    window.location.reload(true)
  }

  function editable(read, text) {
    readOnly.current = read;
    setButtonText(text)
  }

  function fuckFunction(event) {
    setProductProps({ ...productProps, details: event.target.value })
    setTextareaHeight({ height: `${event.target.scrollHeight}px` })
  }

  return (
    <>
      <div className='productPage'>
        <div>
          <img className='primaryImage' src={product.img1} alt="" />
          <img className='additionalImages' src={product.img2} alt="" />
          <img className='additionalImages' src={product.img3} alt="" />
          <img className='additionalImages' src={product.img4} alt="" />
        </div>

        <div className='productDescription'>
          <input id="name1" readOnly={readOnly.current} onChange={event => setProductProps({ ...productProps, name: event.target.value })} value={productProps.name} />
          <div>
            <p style={{ display: 'inline', fontSize: '20px' }}>$</p>
            <input id="price1" readOnly={readOnly.current} onChange={event => setProductProps({ ...productProps, price: event.target.value })} type="number" value={productProps.price} />
          </div>
          <button {...button} onClick={addCart} className='addToCart'>Add to cart</button>
          <h4 className='detailsHeader'>Details</h4>
          <textarea ref={textarea} style={{ ...textareaHeight, resize: 'none' }} readOnly={readOnly.current} onChange={fuckFunction} value={productProps.details} />

          {isAdmin
            ? <>
              <p style={{ color: 'red', textAlign: 'center' }} >{warning}</p>
              <button className='addToCart' id='editButton' onClick={editData}>{buttonText}</button>
              <button className='addToCart' onClick={removeProduct}>Remove</button>
            </>
            : null
          }
        </div>

      </div>
      <Recommended editable={editable} />
    </>

  )
}