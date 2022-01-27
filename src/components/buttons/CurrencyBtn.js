import React, { Component } from "react";
import "../../styles/buttons/currency-btn.css";
import Currency from "../../img/currency.png";
import { connect } from "react-redux";
import {
  setCurrency,
  getCurrency,
  setCurrencySelected,
} from "../../state/actions/currencyActions";

export class CurrencyBtn extends Component {
  constructor(props) {
    super(props);
    this.selectCurrencyButton = this.selectCurrencyButton.bind(this);
    this.setCurrencySelected = this.setCurrencySelected.bind(this);

    this.state = {};
  }

  selectCurrencyButton() {
    this.props.setCurrencySelected();
  }

  setCurrencySelected(currencyName, symbol) {
    this.props.setCurrency(currencyName, symbol);
  }

  render() {
    const { currencyList, currencySelected } = this.props.currency;

    return (
      <>
        <img
          src={Currency}
          alt="currency"
          onClick={this.selectCurrencyButton}
        />
        <div className={`menu ${currencySelected ? "open" : ""}`}>
          <ul>
            {currencyList.map((currency, index) => (
              <li
                onClick={this.setCurrencySelected.bind(
                  this,
                  currency.currencyName,
                  currency.symbol
                )}
                key={index}
              >
                {currency.symbol} {currency.currencyName}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency,
});

export default connect(mapStateToProps, {
  getCurrency,
  setCurrency,
  setCurrencySelected,
})(CurrencyBtn);
