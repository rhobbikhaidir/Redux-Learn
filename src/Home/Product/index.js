import "./index.css";
import Logo from "../../logo-etanee.png";
import Cart from "../../cart.png";
import CardProduct from "./CardProduct";

import React, { Component } from "react";

export default class index extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };
  render() {
    return (
      <div>
        <div className="header">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="troley">
            <img src={Cart} alt="img-daging-ayam" />
            <p className="count">{this.state.order}</p>
          </div>
        </div>
        <CardProduct
          onCounterChange={(newValue) => this.handleCounterChange(newValue)}
        />
      </div>
    );
  }
}
