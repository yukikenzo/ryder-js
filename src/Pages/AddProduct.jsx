import React, { useState, useRef, useEffect } from 'react'
import { doc, setDoc, query, orderBy, limit, collection, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';
import FormInput from '../Componets/FormInput';

export default function AddProduct() {
  const [focused, setFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState({
    value: '',
    style: { color: 'red' }
  });
  const lastID = useRef(1)

  let [data, setData] = useState({
    name: "",
    price: "",
    details: "",
    img1: "",
    img2: "",
    img3: "",
    img4: ""
  });

  useEffect(() => {
    (async function () {
      const citiesRef = collection(db, "products");
      const getLastProduct = query(citiesRef, orderBy("id", "desc"), limit(1));
      const querySnapshot = await getDocs(getLastProduct);
      querySnapshot.forEach((doc) => {
        lastID.current = parseInt(doc.id) + 1;
      });
    }());

  }, [])

  async function submitData() {
    if (document.querySelectorAll('.addProduct textarea:invalid,input:invalid').length) {
      setSubmitted(true);
      return;
    }

    try {
      await setDoc(doc(db, "products", `${lastID.current}`), {
        ...data, price: data.price + '.00', id: lastID.current
      })
    } catch (err) {
      const error = err.code.toString().replaceAll('-', ' ') + '!!'
      setSuccess({ style: {color: 'red'}, value: error.charAt(0).toUpperCase() + error.slice(1) });
      return;
    }
    setSuccess({ style: {color: 'green'}, value: 'Success!!' });

    lastID.current++;
    alert("Success. Product added to Database!")
    window.location.reload(false);
  }

  function clearWarning(e) {
    let clue = e.target.className
    setData({ ...data, [`${clue}`]: e.target.value })
  }

  const inputs = {
    id: 0,
    type: 'url',
    className: '',
    style: { display: 'none' },
    error: 'Fill all fields!',
    h6: '',
    required: true,
    placeholder: 'Paste your Image links here'
  }

  const nameInput = {
    type: 'text',
    className: 'name',
    style: { display: 'none' },
    error: 'Fill all fields!',
    h6: '',
    required: true,
    placeholder: 'Name'
  }

  const priceInput = {
    type: 'text',
    className: 'price',
    style: { display: 'none' },
    error: 'Invalid price',
    h6: '',
    pattern: `^[1-9]|[1-9][0-9]{1,5}|1000000`,
    required: true,
    placeholder: 'Price'
  }

  const textArea = {
    type: 'text',
    className: 'details',
    error: 'Details should be well described!',
    required: true,
    placeholder: 'Details'
  }

  let linkInputs = [];

  for (let i = 0; i < 4; i++) {
    linkInputs.push({ ...inputs, id: i, className: `img${i + 1}` })
  }

  return (
    <div className='addProduct'>
      <div>
        <div className='productDetails'>
          <FormInput submitted={submitted} value={data.name} onChange={clearWarning} {...nameInput} />
          <FormInput submitted={submitted} value={data.price} onChange={clearWarning} {...priceInput} />
          <textarea style={{ border: '2px solid rgb(118, 118, 118)' }} onBlur={() => setFocused(true)} focused={(focused || submitted).toString()} {...textArea} value={data.details} onChange={clearWarning} cols="30" rows="10"></textarea>
          <p5>{textArea.error}</p5>
        </div>

        <div className='inputImgLink'>
          {linkInputs.map((input) => <div key={input.id} ><FormInput submitted={submitted} value={data[input.className]} onChange={clearWarning} {...input} /></div>)}
        </div>
      </div>
      <span style={success.style}>{success.value}</span>
      <button type='submit' onClick={submitData}>Submit</button>
    </div>
  )
}
