import React, { Component } from "react";
import ShoppingCartSingle from "./ShoppingCartSingle";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../styles/shopping-cart/shopping-cart.css";

export class ShoppingCart extends Component {
  render() {
    const { cartItems } = this.props.cart;
    return (
      <div className="shopping-cart">
        <hr />
        {cartItems.map((item, index) => (
          <div key={index}>
            <ShoppingCartSingle item={item} />
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.shape({
    cartItems: PropTypes.array,
  }),
};

ShoppingCart.defaultProps = {
  cart: {
    cartItems: [],
  },
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(ShoppingCart);
