import React, { Component } from "react";
import { connect } from "react-redux";

class counter extends Component {
  render() {
    return (
      <div className="counter">
        <button className="minus" onClick={this.props.handleMinus}>
          -
        </button>
        <input type="text" className="input" value={this.props.order} />
        <button className="plus" onClick={this.props.handlePlus}>
          +
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: "PLUS_ORDER" }),
    handleMinus: () => dispatch({ type: "MIN_ORDER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(counter);
