import React, { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import Form from "./Form";
import ReactDOM from "react-dom";

export default function CheckOutModal({ onClose, product, total }) {
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = null;
    };
  }, []);

  return ReactDOM.createPortal (

    <>
    <div id="clickbox" className="orderContainer">
      <div onClick={() => setIsExpanded(!isExpanded)} className="dropDown">
        <FiShoppingCart />
        <p>
          Show order summary {isExpanded ? <BiChevronUp /> : <BiChevronDown />}{" "}
        </p>
      </div>

      <div
        id="orderSummary"
        expanded={`${isExpanded}`}
        className="orderSummary"
      >
        {product.map((product) => {
          return (
            <div key={product.id} className="orderProducts">
              <div>
                <img src={product.img1} alt="" />
                <span>{product.quantity}</span>
                <p>{product.name}</p>
              </div>
              <p>${product.price * product.quantity}</p>
            </div>
          );
        })}

        <div className="orderPrice">
          <input
            className="gridItem1"
            placeholder="Gift card or discount code"
            type="text"
          />
          <button className="gridItem2">Apply</button>

          <p className="gridItem3">Subtotal</p>
          <p className="gridItem4">${total}</p>

          <p className="gridItem5">Shipping</p>
          <p className="gridItem6">Calculated at next step</p>

          <p className="gridItem7">Total</p>
          <h4 className="gridItem8">${total + ".00"}</h4>
        </div>
      </div>

      <Form onClose={onClose} />
    </div>
    </>,
    
    document.getElementById("portal")
  );
}
