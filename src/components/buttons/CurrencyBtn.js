import React, { Component } from "react";
import "../../styles/buttons/currency-btn.css";
import { connect } from "react-redux";
import {
  setCurrency,
  getCurrency,
  setCurrencySelected,
} from "../../state/actions/currencyActions";
import gql from "graphql-tag";
import { Query } from "@apollo/client/react/components";
import Loader from "../Loader";
import PropTypes from "prop-types";
import ErrorMsg from "../ErrorMsg/ErrorMsg";

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

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.selectCurrencyButton = this.selectCurrencyButton.bind(this);
    this.setCurrencySelected = this.setCurrencySelected.bind(this);

    this.state = {};
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.props.setCurrencySelected(false);
    }
  }

  selectCurrencyButton() {
    const { currencySelected } = this.props.currency;

    currencySelected && this.props.setCurrencySelected(false);
    !currencySelected && this.props.setCurrencySelected(true);
  }

  setCurrencySelected(currencyName, symbol) {
    this.props.setCurrency(currencyName, symbol);
    this.props.setCurrencySelected();
  }

  render() {
    const { currencySelected, chosenSymbol } = this.props.currency;

    return (
      <Query query={CURRENCY_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <ErrorMsg errorMsg={"Cant find currency values"} />;

          const { currencies } = data;
          return (
            <div className="menu-list" ref={this.wrapperRef}>
              <div
                className="currency-simbol-btn"
                onClick={this.selectCurrencyButton}
              >
                {chosenSymbol} {currencySelected ? "⌄" : "⌃"}
              </div>
              {currencySelected && (
                <>
                  <div className="menu">
                    <ul className="currency-list">
                      {currencies.map((currency, index) => (
                        <li
                          className="currency-list-item"
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
            </div>
          );
        }}
      </Query>
    );
  }
}

CurrencyBtn.propTypes = {
  currency: PropTypes.shape({
    currencySelected: PropTypes.bool,
    chosenSymbol: PropTypes.string,
  }),
  cartOpen: PropTypes.bool,
  currencies: PropTypes.array,
  setCurrencySelected: PropTypes.func,
  setCurrency: PropTypes.func,
};

CurrencyBtn.defaultProps = {
  currency: {
    currencySelected: false,
    chosenSymbol: "$",
  },
  cartOpen: false,
  currencies: [],
  setCurrencySelected: () => {},
  setCurrency: () => {},
};

const mapStateToProps = (state) => ({
  currency: state.currency,
  cart: state.cart,
});

export default connect(mapStateToProps, {
  getCurrency,
  setCurrency,
  setCurrencySelected,
})(CurrencyBtn);
