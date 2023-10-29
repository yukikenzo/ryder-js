import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";

export default function AddProduct() {
  const [success, setSuccess] = useState({
    value: "",
    style: { color: "red" },
  });
  const initialValues = {
    name: "",
    price: "",
    details: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    price: Yup.number().required("Price is required"),
    details: Yup.string().required("Description is required"),
    img1: Yup.string().required("Image is required").url("Invalid URL"),
    img2: Yup.string().required("Image is required").url("Invalid URL"),
    img3: Yup.string().required("Image is required").url("Invalid URL"),
    img4: Yup.string().required("Image is required").url("Invalid URL"),
  });

  async function submitData(data) {
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

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitData}
      validationSchema={validationSchema}
    >
      {() => (
        <Form className="addProduct">
          <div>
            <div className="productDetails">
              <Field name="name" placeholder="Name" />
              <div className="addProductError">
                <ErrorMessage name="name" component="span" />
              </div>

              <Field type="number" name="price" placeholder="Price" />
              <div className="addProductError">
                <ErrorMessage name="price" component="span" />
              </div>

              <Field name="details" as="textarea" placeholder="Description" />
              <div className="addProductError">
                <ErrorMessage name="details" component="span" />
              </div>
            </div>

            <div className="inputImgLink">
              <Field name="img1" placeholder="Image URL" />
              <div className="addProductErrorURL">
                <ErrorMessage name="img1" component="span" />
              </div>
              <Field name="img2" placeholder="Image URL" />
              <div className="addProductErrorURL">
                <ErrorMessage name="img2" component="span" />
              </div>
              <Field name="img3" placeholder="Image URL" />
              <div className="addProductErrorURL">
                <ErrorMessage name="img3" component="span" />
              </div>
              <Field name="img4" placeholder="Image URL" />
              <div className="addProductErrorURL">
                <ErrorMessage name="img4" component="span" />
              </div>
            </div>
          </div>
          <span
            style={{ display: "block", textAlign: "center", ...success.style }}
          >
            {success.value}
          </span>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
