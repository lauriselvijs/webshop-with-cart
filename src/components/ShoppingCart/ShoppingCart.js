import React, { Component } from "react";
import ShoppingCartSingle from "./ShoppingCartSingle";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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

ShoppingCart.propTypes = {
  cartOpen: PropTypes.bool,
  cartItems: PropTypes.array,
};

ShoppingCart.defaultProps = {
  cartOpen: false,
  cartItems: [],
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(ShoppingCart);
