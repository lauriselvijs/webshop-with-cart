import React, { Component } from "react";
import "../../../styles/shopping-cart/shopping-cart-modal/shopping-cart-single-summary.css";
import OrderBtn from "./OrderBtn";
import { connect } from "react-redux";
import {
  getTotalItemAmount,
  getTotalItemCount,
  getTaxValue,
} from "../../../utils/reduceUtils";
import PropTypes from "prop-types";

export const TAX_PERCENTAGE_VALUE = 21;

class ShoppingCartSingleSummary extends Component {
  render() {
    const { chosenSymbol, chosenCurrencyName } = this.props.currency;
    const { cartItems } = this.props;

    const totalAmountItems = getTotalItemCount(cartItems);
    const totalAmount = getTotalItemAmount(cartItems, chosenCurrencyName);

    const taxAmount = getTaxValue(totalAmount, TAX_PERCENTAGE_VALUE);

    return (
      <div className="shopping-cart-single-summary-container">
        <div className="shopping-cart-single-tax">
          Tax 21%:{" "}
          <span className="shopping-cart-single-tax-value">
            {" "}
            {chosenSymbol}
            {taxAmount}
          </span>
        </div>
        <div className="shopping-cart-single-quantity">
          {" "}
          Quantity:{" "}
          <span className="shopping-cart-single-quantity-value">
            {totalAmountItems}
          </span>
        </div>
        <div className="shopping-cart-single-total">
          Total:{" "}
          <span className="shopping-cart-single-total-value">
            {chosenSymbol}
            {totalAmount}
          </span>
        </div>
        <OrderBtn />
      </div>
    );
  }
}

ShoppingCartSingleSummary.propTypes = {
  cartItems: PropTypes.array,

  currency: PropTypes.shape({
    chosenSymbol: PropTypes.string,
    chosenCurrencyName: PropTypes.string,
  }),
};

ShoppingCartSingleSummary.defaultProps = {
  cartItems: [],
  currency: {
    chosenSymbol: "$",
    chosenCurrencyName: "USD",
  },
};

const mapStateToProps = (state) => ({
  currency: state.currency,
});

export default connect(mapStateToProps)(ShoppingCartSingleSummary);
