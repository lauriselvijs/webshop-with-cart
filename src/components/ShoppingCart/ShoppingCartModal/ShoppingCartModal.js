import React, { Component } from "react";
import "../../../styles/shopping-cart/shopping-cart-modal/shopping-cart-modal.css";
import { connect } from "react-redux";
import { getCartItems } from "../../../state/actions/cartActions";
import {
  getTotalItemCount,
  getTotalItemAmount,
} from "../../../utils/reduceUtils";
import ShoppingCartTitle from "./ShoppingCartTitle";
import ShoppingCartTotal from "./ShoppingCartTotal";
import ShoppingCartFooter from "./ShoppingCartFooter";
import PropTypes from "prop-types";
import ShoppingCartProductView from "./ShoppingCartProductView";

export class ShoppingCartModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getCartItems();
  }

  render() {
    const { cartOpen, cartItems } = this.props.cart;
    const { chosenSymbol, chosenCurrencyName } = this.props.currency;

    const totalAmountItems = getTotalItemCount(cartItems);

    const totalAmount = getTotalItemAmount(cartItems, chosenCurrencyName);

    return (
      cartOpen && (
        <div className="modal">
          <ShoppingCartTitle totalAmountItems={totalAmountItems} />
          <ShoppingCartProductView />
          <ShoppingCartTotal
            chosenSymbol={chosenSymbol}
            totalAmount={totalAmount}
            chosenCurrencyName={chosenCurrencyName}
          />
          <ShoppingCartFooter />
        </div>
      )
    );
  }
}

ShoppingCartModal.propTypes = {
  cart: PropTypes.shape({
    cartOpen: PropTypes.bool,
    cartItems: PropTypes.array,
  }),
  currency: PropTypes.shape({
    chosenSymbol: PropTypes.string,
    chosenCurrencyName: PropTypes.string,
  }),
  getCartItems: PropTypes.func,
};

ShoppingCartModal.defaultProps = {
  cart: {
    cartOpen: false,
    cartItems: [],
  },
  currency: {
    chosenSymbol: "$",
    chosenCurrencyName: "USD",
  },
  getCartItems: () => {},
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.currency,
});

export default connect(mapStateToProps, {
  getCartItems,
})(ShoppingCartModal);
