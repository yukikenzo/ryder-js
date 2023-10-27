import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import Input from "../Componets/Input";
import { addProductInputs } from "../inputConfig";

export default function AddProduct() {
  const [focused, setFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState({
    value: "",
    style: { color: "red" },
  });

  let [data, setData] = useState({
    name: "",
    price: "",
    details: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
  });

  async function submitData() {
    if (
      document.querySelectorAll(".addProduct textarea:invalid,input:invalid")
        .length
    ) {
      setSubmitted(true);
      return;
    }

    try {
      await addDoc(collection(db, "products"), {
        ...data,
        price: data.price + ".00",
      });
    } catch (err) {
      const error = err.code.toString().replaceAll("-", " ") + "!!";
      setSuccess({
        style: { color: "red" },
        value: error.charAt(0).toUpperCase() + error.slice(1),
      });
      return;
    }
    setSuccess({ style: { color: "green" }, value: "Success!!" });

    alert("Success. Product added to Database!");
    window.location.reload(false);
  }

  function clearWarning(e) {
    let clue = e.target.className;
    setData({ ...data, [`${clue}`]: e.target.value });
  }

  let linkInputs = [];

  for (let i = 0; i < 4; i++) {
    linkInputs.push({
      ...addProductInputs.inputs,
      id: i,
      className: `img${i + 1}`,
    });
  }

  return (
    <div className="addProduct">
      <div>
        <div className="productDetails">
          <Input
            submitted={submitted}
            value={data.name}
            onChange={clearWarning}
            {...addProductInputs.nameInput}
          />
          <Input
            submitted={submitted}
            value={data.price}
            onChange={clearWarning}
            {...addProductInputs.priceInput}
          />

          <textarea
            onBlur={() => setFocused(true)}
            focused={(focused || submitted).toString()}
            {...addProductInputs.textArea}
            value={data.details}
            onChange={clearWarning}
          ></textarea>

          <p5>{addProductInputs.textArea.error}</p5>
        </div>

        <div className="inputImgLink">
          {linkInputs.map((input) => (
            <div key={input.id}>
              <Input
                submitted={submitted}
                value={data[input.className]}
                onChange={clearWarning}
                {...input}
              />
            </div>
          ))}
        </div>
      </div>
      <span style={success.style}>{success.value}</span>
      <button type="submit" onClick={submitData}>
        Submit
      </button>
    </div>
  );
}
