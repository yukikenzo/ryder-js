import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Products({ product }) {
  const navigate = useNavigate();

  function passState() {
    navigate(`/product/${product.id}`, {
      state: product,
    });
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="clothes_img">
        <div className="clothes_img_container">
          <img
            className="clothes_default_img"
            src={product.img1}
            alt="clothes"
          />
          <img
            onClick={passState}
            className="clothes_alt_img"
            src={product.img2}
            alt="link clothes"
          />
        </div>
        <p className="clothes_name">{product.name}</p>
        <h4 className="clothes_price">{"$" + product.price}</h4>
      </div>
    </>
  );
}
