import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Home from "./containers/Home";
import { createStore } from "redux";
const globalState = {
  totalOrder: 0,
};
const rootReducer = (state = globalState, action) => {
  if (action.type === "PLUS_ORDER") {
    return {
      ...state,
      totalOrder: state.totalOrder + 1,
    };
  }

  if (action.type === "MIN_ORDER") {
    let totalOrder = 0;
    if (state.totalOrder > 0) {
      return {
        ...state,
        totalOrder: state.totalOrder - 1,
      };
    }
    return {
      ...state,
      totalOrder: totalOrder,
    };
  }
  return state;
};
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
