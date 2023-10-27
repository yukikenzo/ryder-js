import React, { useEffect, useState, useContext } from "react";
import { db } from "../firebase-config";
import { Link } from "react-router-dom";
import Selected from "../Componets/Selected";
import Recommended from "../Componets/Recommended";
import {
  doc,
  collection,
  getDocs,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import CheckOutModal from "../Componets/CheckOutModal";
import { Context } from "../Contex";
import { useAuth0 } from "@auth0/auth0-react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { setNotifyCart, getCartProductsQuantity } = useContext(Context);
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      const cartCollectionRef = collection(db, user.email);
      (async () => {
        let data = await getDocs(cartCollectionRef);
        setCartItems(data.docs.map((doc) => ({ ...doc.data() })));
        setIsLoading(false);
      })();
    }
  }, [user, isAuthenticated]);

  useEffect(() => {
    if (cartItems.length > 0) {
      setTotalPrice(
        cartItems.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
      );
    }
  }, [cartItems]);

  async function alterProductQuantity(product, actualAmount) {
    await setDoc(doc(db, user.email, product.id.toString()), {
      ...product,
      quantity: actualAmount,
    });
  }

  async function removeProductFromCart(id) {
    setCartItems(cartItems.filter((obj) => obj.id !== id));
    await deleteDoc(doc(db, user.email, id.toString()));
    getCartProductsQuantity();
  }

  function changeQuatity(id, quantity) {
    setNotifyCart((prev) => prev + quantity);

    setCartItems(
      cartItems.map((obj) => {
        if (obj.id === id) {
          let actualAmount = obj.quantity + quantity;
          alterProductQuantity(obj, actualAmount);
          return { ...obj, quantity: actualAmount };
        } else {
          return obj;
        }
      })
    );
  }

  return (
    <div>
      {!isLoading ? (
        cartItems.length ? (
          <div style={{ width: "90vw", margin: "auto" }}>
            <div className="grid-container">
              <div className="item1">Your cart</div>
              <div className="item2">
                <Link to={"/collections"}>Continue shopping</Link>
              </div>
              <div className="item3">PRODUCT</div>
              <div className="item4">PRICE</div>
              <div className="item5">QUANTITY</div>
              <div className="item6">TOTAL:</div>
            </div>

            <div className="itemsContainer">
              {cartItems.map((product) => {
                return (
                  <Selected
                    key={product.id}
                    product={product}
                    removeProductFromCart={removeProductFromCart}
                    changeProductQuantity={changeQuatity}
                  />
                );
              })}
            </div>

            <div className="checkOutContainer">
              <span>
                Subtotal
                <p>${parseInt(totalPrice)}.00 USD</p>
              </span>
              <p>Tax included. Shipping calculated at checkout.</p>
              <button
                onClick={() => setIsOpen(true)}
                className="checkOutButton"
              >
                Check out
              </button>

              {isOpen && (
                <CheckOutModal
                  total={totalPrice}
                  product={cartItems}
                  onClose={() => setIsOpen(false)}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="cartEmptyContainer">
            <h3>Your cart is empty</h3>
            <Link to={"/collections"}>Continue shopping</Link>
          </div>
        )
      ) : (
        <div className="cartEmptyContainer">
          <h3>Loading...</h3>
        </div>
      )}
      <Recommended />
    </div>
  );
}
