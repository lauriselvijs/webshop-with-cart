import React, { Component } from "react";
import "../styles/shopping-cart-modal.css";
import ShoppingCartSingle from "../components/ShoppingCartSingle";
import { connect } from "react-redux";
import {
  decQuantity,
  incQuantity,
  selectSize,
  getCartItems,
} from "../state/actions/cartActions";

export class ShoppingCartModal extends Component {
  constructor(props) {
    super(props);

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);

    this.state = {
      view_bag: false,
      check_out: false,
      selected: false,
    };
  }

  increaseQuantity(id) {
    this.props.incQuantity(id);
  }

  decreaseQuantity(id) {
    this.props.decQuantity(id);
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
        {cartItems.map((item, index) => (
          <ShoppingCartSingle
            key={index}
            item={item}
            increaseQuantity={this.increaseQuantity.bind(this, item.id)}
            decreaseQuantity={this.decreaseQuantity.bind(this, item.id)}
          />
        ))}

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
  decQuantity,
  incQuantity,
  selectSize,
  getCartItems,
})(ShoppingCartModal);
