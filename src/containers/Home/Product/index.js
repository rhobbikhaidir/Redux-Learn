import "./index.css";
import Logo from "../../../logo-etanee.png";
import Cart from "../../../cart.png";
import CardProduct from "./CardProduct";
import { connect } from "react-redux";
import React, { Component } from "react";
import { RootContext } from "../../Home";
class index extends Component {
  render() {
    return (
      <div>
        <RootContext.Consumer>
          {(value) => {
            return (
              <div className="header">
                <div className="logo">
                  <img src={Logo} alt="Logo" />
                </div>
                <div className="troley">
                  <img src={Cart} alt="img-daging-ayam" />
                  <p className="count">{value.state.totalOrder}</p>
                </div>
              </div>
            );
          }}
        </RootContext.Consumer>
        <CardProduct />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     order: state.order,
//   };
// };

// export default connect(mapStateToProps)(index);
export default index;
