import React, { Component } from "react";
import "../../styles/buttons/currency-btn.css";
import Currency from "../../img/currency.png";

export default class CurrencyBtn extends Component {
  render() {
    const { onClick, selectedCurrency } = this.props;

    return (
      <>
        <img src={Currency} alt="currency" onClick={onClick} />
        <div className={`menu ${selectedCurrency ? "open" : ""}`}>
          <ul>
            <li>$ USD</li>
            <li>€ EUR</li>
            <li>¥ JPY</li>
          </ul>
        </div>
      </>
    );
  }
}
