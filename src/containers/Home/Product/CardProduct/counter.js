import React, { Component, createContext } from "react";
import { RootContext } from "../../../Home";

class Counter extends Component {
  render() {
    return (
      <RootContext.Consumer>
        {(value) => {
          console.log("value", value);
          return (
            <div className="counter">
              <button
                className="minus"
                onClick={() => value.dispatch({ type: "MINUS_ORDER" })}
              >
                -
              </button>
              <input
                type="text"
                className="input"
                value={value.state.totalOrder}
              />
              <button
                className="plus"
                onClick={() => value.dispatch({ type: "PLUS_ORDER" })}
              >
                +
              </button>
            </div>
          );
        }}
      </RootContext.Consumer>
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

export default Counter;
