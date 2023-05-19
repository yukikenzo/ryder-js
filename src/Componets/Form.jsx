import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

export default function Form({onClose}) {
    return (
        <form className='addressForm'>
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
    )
}
