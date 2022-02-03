import React, { Component } from "react";
import "../../styles/shopping-cart/shopping-cart-modal.css";
import { connect } from "react-redux";
import { getCartItems } from "../../state/actions/cartActions";
import ProductShoppingCart from "./ShoppingCart";
import { Link } from "react-router-dom";
import { formatMoney } from "../utils/formatUtils";
import { getTotalItemCount, getTotalItemAmount } from "../utils/reduceUtils";

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
          <div className="title">
            <span style={{ fontWeight: "bold" }}>My Bag</span>,{" "}
            {totalAmountItems} items
          </div>
          <ProductShoppingCart />
          <span className="total-title">Total</span>
          <span className="total-amount">
            {chosenSymbol} {formatMoney(totalAmount, chosenCurrencyName)}
          </span>
          <div className="footer-modal">
            <Link to="/shopping-cart">
              <button className="view-bag-button">VIEW BAG</button>
            </Link>
            <Link to="/check-out">
              <button className="check-out-button">CHECK OUT</button>
            </Link>
          </div>
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
