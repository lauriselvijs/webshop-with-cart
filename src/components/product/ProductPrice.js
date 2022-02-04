import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../styles/product/product-price.css";
import { formatMoney } from "../../utils/formatUtils";

export default class ProductPrice extends Component {
  render() {
    const { className, price, chosenCurrencyName } = this.props;

    return (
      <b className={className}>{formatMoney(price, chosenCurrencyName)}</b>
    );
  }
}

ProductPrice.propTypes = {
  className: PropTypes.string,
  price: PropTypes.number,
  chosenCurrencyName: PropTypes.string,
};

ProductPrice.defaultProps = {
  className: "product-price",
  price: 100.0,
  chosenCurrencyName: "USD",
};
