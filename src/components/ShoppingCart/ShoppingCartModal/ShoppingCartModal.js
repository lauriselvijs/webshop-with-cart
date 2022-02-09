import React, { Component } from "react";
import "../../../styles/shopping-cart/shopping-cart-modal/shopping-cart-modal.css";
import { connect } from "react-redux";
import { getCartItems } from "../../../state/actions/cartActions";
import ShoppingCartProductView from "./ShoppingCartProductView";
import {
  getTotalItemCount,
  getTotalItemAmount,
} from "../../../utils/reduceUtils";
import ShoppingCartTitle from "./ShoppingCartTitle";
import ShoppingCartTotal from "./ShoppingCartTotal";
import ShoppingCartFooter from "./ShoppingCartFooter";
import PropTypes from "prop-types";

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
  cartOpen: PropTypes.bool,
  cartItems: PropTypes.array,
  chosenSymbol: PropTypes.string,
  chosenCurrencyName: PropTypes.string,
  getCartItems: PropTypes.func,
};

ShoppingCartModal.defaultProps = {
  cartOpen: false,
  cartItems: [],
  chosenSymbol: "$",
  chosenCurrencyName: "USD",
  getCartItems: () => {},
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.currency,
});

export default connect(mapStateToProps, {
  getCartItems,
})(ShoppingCartModal);
