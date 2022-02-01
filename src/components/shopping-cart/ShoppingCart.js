import React, { Component } from "react";
import ShoppingCartSingle from "./ShoppingCartSingle";
import { connect } from "react-redux";
import {
  decQuantity,
  incQuantity,
  selectSize,
  getCartItems,
} from "../../state/actions/cartActions";

export class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  increaseQuantity(id, selectedSize) {
    this.props.incQuantity(id);
    this.props.selectSize(id, selectedSize);
  }

  decreaseQuantity(id, selectedSize) {
    this.props.decQuantity(id);
    this.props.selectSize(id, selectedSize);
  }

  componentDidMount() {
    this.props.getCartItems();
  }

  render() {
    const { cartItems, cartOpen } = this.props.cart;

    return (
      <>
        {!cartOpen && <hr style={{ width: "95%", color: "lightgray" }} />}
        {cartItems.map((item, index) => (
          <div key={index}>
            <ShoppingCartSingle
              item={item}
              increaseQuantity={this.increaseQuantity.bind(
                this,
                item.id,
                item.selectedSize
              )}
              decreaseQuantity={this.decreaseQuantity.bind(
                this,
                item.id,
                item.selectedSize
              )}
            />
            {!cartOpen && <hr style={{ width: "95%", color: "lightgray" }} />}
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
