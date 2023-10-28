import { BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Selected({
  product,
  changeProductQuantity,
  removeProductFromCart,
}) {
  function remove() {
    removeProductFromCart(product.id);
  }

  function changeAmount(increase) {
    if (product.quantity <= 1 && !increase) {
      remove();
    } else if (increase && product.quantity < 50) {
      changeProductQuantity(product.id, 1);
    } else if (!increase) {
      changeProductQuantity(product.id, -1);
    }
  }

  const navigate = useNavigate();
  function passState() {
    navigate(`/product/${product.id}`, {
      state: product,
    });
  }

  return (
    <div className="selContainer">
      <img className="selPhoto" src={product.img1} alt="" />
      <div onClick={passState} className="selName">
        {product.name}
      </div>

      <div className="selPrice">
        <h6>{"$" + (parseInt(product.price) + 10) + ".00"}</h6>
        <h6>{"$" + product.price}</h6>
      </div>

      <div className="selQuantity">
        <button
          onClick={() => {
            changeAmount(false);
          }}
        >
          -
        </button>
        <h6 style={{ marginTop: "9px" }}>{product.quantity}</h6>
        <button
          onClick={() => {
            changeAmount(true);
          }}
        >
          +
        </button>
      </div>

      <div className="selTotal">
        <h6 className="totalH6">
          {"$" + parseInt(product.price) * product.quantity + ".00"}
        </h6>
        <BiTrash onClick={remove} />
      </div>
    </div>
  );
}
