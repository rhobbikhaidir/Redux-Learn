import "./index.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import BlogSpot from "../BlogSpot/index";
import Product from "./Product";
import Youtube from "../../components/Youtube/Youtube";
import React, { Component, createContext } from "react";

export const RootContext = createContext();
const Provider = RootContext.Provider;

export default class index extends Component {
  state = {
    totalOrder: 5,
  };

  dispatch = (action) => {
    if (action.type === "PLUS_ORDER") {
      this.setState({
        totalOrder: this.state.totalOrder + 1,
      });
    }

    if (action.type === "MINUS_ORDER") {
      let order = 0;
      if (this.state.totalOrder > 0) {
        this.setState({
          totalOrder: this.state.totalOrder - 1,
        });
      }
      this.setState({
        totalOrder: order,
      });
    }
  };
  render() {
    return (
      <Router>
        <Provider
          value={{
            state: this.state,
            dispatch: this.dispatch,
          }}
        >
          <div className="navbar">
            <ol className="card-navbar">
              <a className="a" href="/">
                <li className="title-navbar">Blog Spot</li>
              </a>
              <a className="a" href="/product">
                <li className="title-navbar-p">Product</li>
              </a>
              <a className="a" href="/youtubecomp">
                <li className="title-navbar-y">YoutubeComp</li>
              </a>
            </ol>
          </div>
          <div style={{ padding: 30, borderBottom: "1px solid black" }} />
          <Route exact path="/" component={BlogSpot} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/youtubecomp" component={Youtube} />
        </Provider>
      </Router>
    );
  }
}
