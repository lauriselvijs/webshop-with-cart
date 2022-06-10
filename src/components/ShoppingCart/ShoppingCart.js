import React, { Component } from "react";
import ShoppingCartSingle from "./ShoppingCartSingle";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../styles/shopping-cart/shopping-cart.css";
import ShoppingCartSingleSummary from "./ShoppingCartModal/ShoppingCartSingleSummary";

export class ShoppingCart extends Component {
  render() {
    const { cartItems } = this.props.cart;

    return (
      <div className="shopping-cart">
        <div className="shopping-cart-main-title">CART</div>
        <hr />
        {cartItems.map((item, index) => (
          <div key={index}>
            <ShoppingCartSingle item={item} />
            <hr />
          </div>
        ))}
        <ShoppingCartSingleSummary cartItems={cartItems} />
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.shape({
    cartItems: PropTypes.array,
  }),
  currency: PropTypes.shape({
    chosenSymbol: PropTypes.string,
    chosenCurrencyName: PropTypes.string,
  }),
};

ShoppingCart.defaultProps = {
  cart: {
    cartItems: [],
  },
  currency: {
    chosenSymbol: "$",
    chosenCurrencyName: "USD",
  },
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.currency,
});

export default connect(mapStateToProps)(ShoppingCart);
