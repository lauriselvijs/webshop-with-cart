import React, { Component } from "react";
import "../../../styles/shopping-cart-modal.css";
import ClothesShoppingCartSingle from "./ClothesShoppingCartSingle";
import { connect } from "react-redux";
import {
  decQuantity,
  incQuantity,
  selectSize,
  getCartItems,
} from "../../../state/actions/cartActions";

export class ClothesShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  increaseQuantity(id) {
    this.props.incQuantity(id);
  }

  decreaseQuantity(id) {
    this.props.decQuantity(id);
  }

  componentDidMount() {
    this.props.getCartItems();
  }

  render() {
    const { cartItems } = this.props.cart;

    return (
      <>
        {cartItems.map((item, index) => (
          <div className="shopping-cart">
            <ClothesShoppingCartSingle
              key={index}
              item={item}
              increaseQuantity={this.increaseQuantity.bind(this, item.id)}
              decreaseQuantity={this.decreaseQuantity.bind(this, item.id)}
            />
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
})(ClothesShoppingCart);
