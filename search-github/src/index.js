import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./reducer/index";
import App from "./App";

setTimeout(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}, 3000);
