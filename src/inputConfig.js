// AddProduct

export const addProductInputs = {
    inputs: {
        id: 0,
        type: 'url',
        className: '',
        style: { display: 'none' },
        error: 'Fill all fields!',
        h6: '',
        required: true,
        placeholder: 'Paste your Image links here'
    },

    nameInput: {
        type: 'text',
        className: 'name',
        style: { display: 'none' },
        error: 'Fill all fields!',
        h6: '',
        required: true,
        placeholder: 'Name'
    },

    priceInput: {
        type: 'text',
        className: 'price',
        style: { display: 'none' },
        error: 'Invalid price',
        h6: '',
        pattern: `^[1-9]|[1-9][0-9]{1,5}|1000000`,
        required: true,
        placeholder: 'Price'
    },

    textArea: {
        type: 'text',
        className: 'details',
        error: 'Details should be well described!',
        required: true,
        placeholder: 'Details'
    }
};

// ForgotPassword

export const forgotPasswordInputs = {
    id: 1,
    name: 'email',
    type: 'email',
    className: 'login-email',
    style: { margin: '0 0 20px 0' },
    error: 'Not valid email!',
    h6: 'Email',
    required: true,
};

// Login 

export const loginInputs = {
    emailInput : {
        type: 'email',
        className: 'login-email',
        style: { margin: '0' },
        error: 'Not valid email!',
        h6: 'Email',
        required: true,
    },

    passwordInput : {
        type: 'password',
        className: 'password-input',
        style: { margin: '40px 0 0 0' },
        error: 'Password should be at least 8 characters and include at least 1 letter, 1 number and 1 special character!',
        h6: 'Password',
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$`,
        required: true,
    }
};

// Register

export const registerInputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      className: 'login-email',
      style: { margin: '0' },
      error: 'Not valid email!',
      h6: 'Email',
      required: true,
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      className: 'password-input',
      style: { margin: '40px 0 0 0' },
      error: 'Password should be at least 8 characters and include at least 1 letter, 1 number and 1 special character!',
      h6: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*?])[a-zA-Z0-9!@#$%^&*?]{8,}$`,
      required: true,
    },
    {
      id: 3,
      name: 'repeatPassword',
      type: 'password',
      className: 'repeat-password',
      style: { margin: '40px 0 0 0' },
      h6: 'Repeat Password',
      required: true,
    }
  ];