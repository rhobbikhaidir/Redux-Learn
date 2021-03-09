import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import BlogSpot from "../BlogSpot";
import Product from "./Product";

export default function index() {
  return (
    <div>
      <div className="navbar">
        <ol className="card-navbar">
          <a className="a" href="/">
            <li className="title-navbar">Blog Spot</li>
          </a>
          <a className="a" href="/product">
            <li className="title-navbar-p">Product</li>
          </a>
        </ol>
      </div>
      <div style={{ padding: 30, borderBottom: "1px solid black" }} />
      <Router>
        <Route exact path="/" component={BlogSpot} />
        <Route exact path="/product" component={Product} />
      </Router>
    </div>
  );
}
