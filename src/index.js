import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const client = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={client}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
