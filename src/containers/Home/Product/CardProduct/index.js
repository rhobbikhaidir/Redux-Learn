import React, { Component } from "react";
import Daging from "../../../../daging-ayam.jpg";
import Counter from "./counter";

export default class index extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (value) => {
    this.props.onCounterChange(value);
  };

  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img src={Daging} alt="" />
        </div>
        <p className="product-title">Daging ayam Berbumbu original 1 ekor</p>
        <p className="product-price">Rp. 45.000</p>
        <Counter />
      </div>
    );
  }
}
