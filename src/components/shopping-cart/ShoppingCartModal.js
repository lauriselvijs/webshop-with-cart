import React, { Component } from "react";
import "../../styles/shopping-cart-modal.css";
import { connect } from "react-redux";
import { getCartItems } from "../../state/actions/cartActions";
import ClothesShoppingCart from "../categories/clothes/ClothesShoppingCart";

export class ShoppingCartModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view_bag: false,
      check_out: false,
    };
  }

  viewBag = () => {
    this.setState({ view_bag: !this.state.view_bag });
    console.log("view bag");
  };

  checkOut = () => {
    this.setState({ check_out: !this.state.check_out });
    console.log("check out");
  };

  componentDidMount() {
    this.props.getCartItems();
  }

  render() {
    const { cartDisplay, cartItems } = this.props.cart;

    const totalAmount = cartItems.reduce(
      (total, item) => total + parseInt(item.price) * parseInt(item.count),
      0
    );

    return (
      <div className="modal" style={{ display: cartDisplay }}>
        <div className="title">
          <span style={{ fontWeight: "bold" }}>My Bag</span>, {cartItems.length}{" "}
          items
        </div>
        <ClothesShoppingCart />
        <span className="total-title">Total</span>
        <span className="total-amount">${totalAmount}</span>
        <div className="footer-modal">
          <button className="view-bag-button" onClick={this.viewBag.bind(this)}>
            VIEW BAG
          </button>
          <button
            className="check-out-button"
            onClick={this.checkOut.bind(this)}
          >
            CHECK OUT
          </button>
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
