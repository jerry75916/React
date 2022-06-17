import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
// import { UserProvider } from "./component/contexts/user.context";
import { BrowserRouter } from "react-router-dom";
// import { CategoriesProvider } from "./component/contexts/categories.context";
import { CartProvider } from "./component/contexts/cart.context";
import { Provider } from "react-redux";
import { store } from "./store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <UserProvider> */}
        {/* <CategoriesProvider> */}
        {/* <CartProvider> */}
        <App />
        {/* </CartProvider> */}
        {/* </CategoriesProvider> */}
        {/* </UserProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
