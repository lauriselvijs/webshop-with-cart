import React, { Component } from "react";
import "../../../styles/shopping-cart/shopping-cart-modal/shopping-cart-total.css";
import PropTypes from "prop-types";
import { formatMoney } from "../../../utils/formatUtils";

export default class ShoppingCartTotal extends Component {
  render() {
    const { chosenSymbol, totalAmount, chosenCurrencyName } = this.props;

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
  chosenSymbol: PropTypes.string,
  totalAmount: PropTypes.number,
  chosenCurrencyName: PropTypes.string,
};

ShoppingCartTotal.defaultProps = {
  chosenSymbol: "$",
  totalAmount: 100.0,
  chosenCurrencyName: "USD",
};
