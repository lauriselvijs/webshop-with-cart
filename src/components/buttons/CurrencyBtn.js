import React, { Component } from "react";
import "../../styles/buttons/currency-btn.css";
import Currency from "../../img/currency.png";
import { connect } from "react-redux";
import {
  setCurrency,
  getCurrency,
  setCurrencySelected,
} from "../../state/actions/currencyActions";
import { updatePriceValues } from "../../state/actions/cartActions";
import gql from "graphql-tag";
import { Query } from "@apollo/client/react/components";

const CURRENCY_QUERY = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;

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
    this.props.updatePriceValues();
  }

  render() {
    const { currencySelected } = this.props.currency;

    return (
      <Query query={CURRENCY_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(error);

          return (
            <>
              <img
                src={Currency}
                alt="currency"
                onClick={this.selectCurrencyButton}
              />
              <div className={`menu ${currencySelected ? "open" : ""}`}>
                <ul>
                  {data.currencies.map((currency, index) => (
                    <li
                      onClick={this.setCurrencySelected.bind(
                        this,
                        currency.label,
                        currency.symbol
                      )}
                      key={index}
                    >
                      {currency.symbol} {currency.label}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          );
        }}
      </Query>
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
  updatePriceValues,
})(CurrencyBtn);
