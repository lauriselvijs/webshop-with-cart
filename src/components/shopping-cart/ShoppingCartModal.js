import React, { Component } from "react";
import "../../styles/shopping-cart-modal.css";
import { connect } from "react-redux";
import { getCartItems } from "../../state/actions/cartActions";
import ProductShoppingCart from "../shopping-cart/ProductShoppingCart";
import { Link } from "react-router-dom";

export class ShoppingCartModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getCartItems();
  }

  render() {
    const { cartDisplay, cartItems } = this.props.cart;

    const totalAmount = cartItems.reduce(
      (total, item) => total + parseInt(item.price) * parseInt(item.count),
      0
    );

    const totalAmountItems = cartItems.reduce(
      (total, item) => total + parseInt(item.count),
      0
    );

    return (
      <div className="modal" style={{ display: cartDisplay }}>
        <div className="title">
          <span style={{ fontWeight: "bold" }}>My Bag</span>, {totalAmountItems}{" "}
          items
        </div>
        <ProductShoppingCart />
        <span className="total-title">Total</span>
        <span className="total-amount">${totalAmount}</span>
        <div className="footer-modal">
          <Link to="/shopping-cart">
            <button className="view-bag-button">VIEW BAG</button>
          </Link>
          <Link to="/check-out">
            <button className="check-out-button">CHECK OUT</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {
  getCartItems,
})(ShoppingCartModal);
