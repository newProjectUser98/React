import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createTheme} from "@mui/material/styles";
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
