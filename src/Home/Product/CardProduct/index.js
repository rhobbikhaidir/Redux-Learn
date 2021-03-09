import React, { Component } from "react";
import Daging from "../../../daging-ayam.jpg";

export default class index extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (value) => {
    this.props.onCounterChange(value);
  };
  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.props.onCounterChange(this.state.order);
      }
    );
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.props.onCounterChange(this.state.order);
        }
      );
    }
  };
  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img src={Daging} alt="" />
        </div>
        <p className="product-title">Daging ayam Berbumbu original 1 ekor</p>
        <p className="product-price">Rp. 45.000</p>
        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>
            -
          </button>
          <input type="text" className="input" value={this.state.order} />
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}
