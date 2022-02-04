import React, { Component } from "react";
import "../../../styles/shopping-cart/shopping-cart-modal/shopping-cart-modal.css";
import { connect } from "react-redux";
import { getCartItems } from "../../../state/actions/cartActions";
import ProductShoppingCart from "../ShoppingCart";
import { Link } from "react-router-dom";
import {
  getTotalItemCount,
  getTotalItemAmount,
} from "../../../utils/reduceUtils";
import ShoppingCartTitle from "./ShoppingCartTitle";
import ShoppingCartTotal from "./ShoppingCartTotal";
import ShoppingCartFooter from "./ShoppingCartFooter";

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
          <ProductShoppingCart />
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

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.currency,
});

export default connect(mapStateToProps, {
  getCartItems,
})(ShoppingCartModal);
