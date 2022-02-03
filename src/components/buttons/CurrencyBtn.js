import React, { Component } from "react";
import "../../styles/buttons/currency-btn.css";
import Currency from "../../img/currency.png";
import { connect } from "react-redux";
import {
  setCurrency,
  getCurrency,
  setCurrencySelected,
} from "../../state/actions/currencyActions";
import gql from "graphql-tag";
import { Query } from "@apollo/client/react/components";
import Loader from "../helpers/Loader";

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
  }

  render() {
    const { currencySelected } = this.props.currency;
    const { cartOpen } = this.props.cart;

    return (
      <Query query={CURRENCY_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) console.log(error);

          return (
            <>
              <img
                src={Currency}
                alt="currency"
                onClick={this.selectCurrencyButton}
              />
              {currencySelected && (
                <>
                  <div
                    className={`menu ${currencySelected ? "open" : ""}`}
                    style={cartOpen ? { zIndex: "3" } : { zIndex: "2" }}
                  >
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
              )}
            </>
          );
        }}
      </Query>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency,
  cart: state.cart,
});

export default connect(mapStateToProps, {
  getCurrency,
  setCurrency,
  setCurrencySelected,
})(CurrencyBtn);
