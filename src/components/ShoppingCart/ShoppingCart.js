import React, { Component } from "react";
import ShoppingCartSingle from "./ShoppingCartSingle";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../styles/shopping-cart/shopping-cart.css";

export class ShoppingCart extends Component {
  render() {
    const { cartItems, cartOpen } = this.props.cart;
    return (
      <>
        {!cartOpen && <hr />}
        {cartItems.map((item, index) => (
          <div key={index}>
            <ShoppingCartSingle item={item} />
            {!cartOpen && <hr />}
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
