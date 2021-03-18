import React, { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../../../../Redux/reducer/globalActionType";

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
    order: state.order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
    handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(counter);
