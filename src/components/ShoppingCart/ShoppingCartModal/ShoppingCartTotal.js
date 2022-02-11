import React, { Component } from "react";
import "../../../styles/shopping-cart/shopping-cart-modal/shopping-cart-total.css";
import PropTypes from "prop-types";
import { formatMoney } from "../../../utils/formatUtils";

export default class ShoppingCartTotal extends Component {
  render() {
    const { totalAmount, chosenCurrencyName } = this.props;

    return (
      <>
        <span className="total-title">Total</span>
        <span className="total-amount">
          {formatMoney(totalAmount, chosenCurrencyName)}
        </span>
      </>
    );
  }
}

ShoppingCartTotal.propTypes = {
  totalAmount: PropTypes.number,
  chosenCurrencyName: PropTypes.string,
};

ShoppingCartTotal.defaultProps = {
  totalAmount: 100.0,
  chosenCurrencyName: "USD",
};
