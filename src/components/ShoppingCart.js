import React, { Component } from "react";
import "../styles/shopping-cart.css";
import { connect } from "react-redux";
import {
  decQuantity,
  incQuantity,
  selectSize,
  getCartItems,
} from "../state/actions/cartActions";
import ShoppingCartSingle from "./ShoppingCartSingle";

export class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected_S: true,
      selected_M: false,
      count: 1,
    };
  }

  selectButtonS() {
    this.setState({ selected_S: !this.state.selected_S });
    this.setState({ selected_M: false });
  }

  selectButtonM() {
    this.setState({ selected_M: !this.state.selected_M });
    this.setState({ selected_S: false });
  }

  increaseQuantity = (id) => {
    this.props.incQuantity(id);
  };

  decreaseQuantity = (id) => {
    this.props.decQuantity(id);
  };

  render() {
    const { cartItems } = this.props.cart;

    return (
      <>
        <hr style={{ width: "95%", color: "lightgray" }} />
        {cartItems.map((item, index) => (
          <div className="shopping-cart">
            <ShoppingCartSingle
              key={index}
              item={item}
              increaseQuantity={this.increaseQuantity.bind(this, item.id)}
              decreaseQuantity={this.decreaseQuantity.bind(this, item.id)}
            />
            <hr style={{ width: "95%", color: "lightgray" }} />
          </div>
        ))}
      </>
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
})(ShoppingCart);
