import React, { Component } from "react";
import ShoppingCartSingle from "./ShoppingCartSingle";
import { connect } from "react-redux";

export class ShoppingCart extends Component {
  render() {
    const { cartItems, cartOpen } = this.props.cart;
    return (
      <>
        {!cartOpen && <hr style={{ width: "95%", color: "lightgray" }} />}
        {cartItems.map((item, index) => (
          <div key={index}>
            <ShoppingCartSingle item={item} />
            {!cartOpen && <hr style={{ width: "95%", color: "lightgray" }} />}
          </div>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {})(ShoppingCart);
