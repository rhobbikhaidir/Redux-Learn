import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogSpot from "../BlogSpot/index";
import Product from "./Product/product";
import Youtube from "../../components/Youtube/Youtube";
import React, { Component } from "react";
import globalProvider from "../../Context/context";

class index extends Component {
  render() {
    return (
      <Router>
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
      </Router>
    );
  }
}

export default globalProvider(index);
