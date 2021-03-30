import "./index.css";
import Logo from "../../../logo-etanee.png";
import Cart from "../../../cart.png";
import CardProduct from "./CardProduct";
import React, { Component } from "react";
import { globalConsumer } from "../../../Context/context";
class product extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="troley">
            <img src={Cart} alt="img-daging-ayam" />
            <p className="count">{this.props.state.totalOrder}</p>
          </div>
        </div>
        <CardProduct />
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     order: state.order,
//   };
// };

// export default connect(mapStateToProps)(index);
export default globalConsumer(product);
