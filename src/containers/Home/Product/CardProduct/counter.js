import React, { Component } from "react";
import { globalConsumer } from "../../../../Context/context";

class Counter extends Component {
  render() {
    console.log(this.props.state);
    return (
      <div className="counter">
        <button
          className="minus"
          onClick={() => this.props.dispatch({ type: "MIN_ORDER" })}
        >
          -
        </button>
        <input
          type="text"
          className="input"
          value={this.props.state.totalOrder}
        />
        <button
          className="plus"
          onClick={() => this.props.dispatch({ type: "PLUS_ORDER" })}
        >
          +
        </button>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     order: state.order,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
//     handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(counter);

export default globalConsumer(Counter);
