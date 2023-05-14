import React, { useState, useEffect } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export default function CheckOutModal({ onClose, product, total }) {
    const [isExpanded, setIsExpanded] = useState(true)

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = null;
        }
    }, [])

    return (
        <div id='clickbox' className='orderContainer'>

            <form style={{transform: `translateY(${isExpanded ? "0" : "-440px"})`}} className='addressForm'>
                <h5>Shipping address</h5>
                <select name="Countres">
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="England">England</option>
                    <option value="Germany">Germany</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Italy">Italy</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Poland">Poland</option>
                    <option value="Russia">Russia</option>
                    <option value="Singapur">Singapur</option>
                    <option value="USA">USA</option>
                </select>

                <div>
                    <input placeholder='First name' type="text" />
                    <input placeholder='Last name' type="text" />
                </div>

                <input placeholder='Company (optional)' type="text" />
                <input placeholder='Address' type="text" />
                <input placeholder='Apartment, suite, etc. (optional)' type="text" />

                <div>
                    <input placeholder='Postal code' type="text" />
                    <input placeholder='City' type="text" />
                </div>

                <input placeholder='Phone' type="number" />
                <div className='orderButtons'>
                    <button onClick={onClose}><IoIosArrowBack />Return to cart</button>
                    <button onClick={() => alert("THIS WEBSITE HAS BEEN DEVELOPED FOR EDUCATIONAL PURPOSES ONLY!!! ORIGINAL WEBSITE OF THIS SHOP: ryderlabel.com")}> Continue To Shopping</button>
                </div>

            </form>

            <div id='orderSummary' className='orderSummary'>
                {product.map((product) => {
                    return <div key={product.id} className='orderProducts'>
                        <div>
                            <img src={product.img1} alt="" />
                            <span>{product.quantity}</span>
                            <p>{product.name}</p>
                        </div>
                        <p>${(product.price) * (product.quantity)}</p>
                    </div>
                })}

                <div className='orderPrice'>
                    <input className='gridItem1' placeholder='Gift card or discount code' type="text" />
                    <button className='gridItem2'>Apply</button>

                    <p className='gridItem3'>Subtotal</p>
                    <p className='gridItem4'>${total}</p>

                    <p className='gridItem5'>Shipping</p>
                    <p className='gridItem6'>Calculated at next step</p>

                    <p className='gridItem7'>Total</p>
                    <h4 className='gridItem8'>${total + '.00'}</h4>
                </div>

            </div>
            <div onClick={() => setIsExpanded(!isExpanded)} className='dropDown'>
                <FiShoppingCart />
                <p>Show order summary {isExpanded ? <BiChevronUp /> : <BiChevronDown />} </p>
            </div>
        </div>
    )
}
