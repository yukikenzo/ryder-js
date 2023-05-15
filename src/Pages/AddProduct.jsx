import React, { useState } from 'react'
import { addDoc, collection } from "firebase/firestore";
import { db } from '../firebase-config';
import Input from '../Componets/Input';

export default function AddProduct() {
  const [focused, setFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState({
    value: '',
    style: { color: 'red' }
  });

  let [data, setData] = useState({
    name: "",
    price: "",
    details: "",
    img1: "",
    img2: "",
    img3: "",
    img4: ""
  });

  async function submitData() {
    if (document.querySelectorAll('.addProduct textarea:invalid,input:invalid').length) {
      setSubmitted(true);
      return;
    }

    try {
      await addDoc(collection(db, "products"), {
        ...data, price: data.price + '.00'
      })
    } catch (err) {
      const error = err.code.toString().replaceAll('-', ' ') + '!!'
      setSuccess({ style: { color: 'red' }, value: error.charAt(0).toUpperCase() + error.slice(1) });
      return;
    }
    setSuccess({ style: { color: 'green' }, value: 'Success!!' });

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
          <Input submitted={submitted} value={data.name} onChange={clearWarning} {...nameInput} />
          <Input submitted={submitted} value={data.price} onChange={clearWarning} {...priceInput} />

          <textarea onBlur={() => setFocused(true)} focused={(focused || submitted).toString()} {...textArea} 
          value={data.details} onChange={clearWarning}></textarea>

          <p5>{textArea.error}</p5>
        </div>

        <div className='inputImgLink'>

          {linkInputs.map((input) =>
            <div key={input.id} >
              <Input submitted={submitted} value={data[input.className]} onChange={clearWarning} {...input} />
            </div>)
          }

        </div>
      </div>
      <span style={success.style}>{success.value}</span>
      <button type='submit' onClick={submitData}>Submit</button>
    </div>
  )
}
