// AddProduct

export const addProductInputs = {
  inputs: {
    id: 0,
    type: "url",
    className: "",
    style: { display: "none" },
    error: "Fill all fields!",
    h6: "",
    required: true,
    placeholder: "Paste your Image links here",
  },

  nameInput: {
    type: "text",
    className: "name",
    style: { display: "none" },
    error: "Fill all fields!",
    h6: "",
    required: true,
    placeholder: "Name",
  },

  priceInput: {
    type: "number",
    className: "price",
    style: { display: "none" },
    error: "Invalid price",
    h6: "",
    pattern: `^[1-9]|[1-9][0-9]{1,5}|1000000`,
    required: true,
    placeholder: "Price",
  },

  textArea: {
    type: "text",
    className: "details",
    error: "Details should be well described!",
    required: true,
    placeholder: "Details",
  },
};
