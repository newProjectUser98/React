import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createTheme} from "@mui/material/styles";

localStorage.setItem('accessToken', '55f6348199957d97ae048eaa44956626d880bce2');

var user = {
  "serial_no": 32,
  "creation_date": "2023-04-17",
  "username": "bharti",
  "user_role": "super_admin",
  "email": "dotnet_dev@initiativewater.com",
  "contact_no": null,
  "company_name": "initiative",
  "gst_no": "123456789987654",
  "address1": "pune",
  "address2": ""
};

localStorage.setItem('user', JSON.stringify(user));

// eslint-disable-next-line
const theme = createTheme({
  typography: {
    fontFamily: ["'Poppins'", "sans-serif"].join(","),
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
