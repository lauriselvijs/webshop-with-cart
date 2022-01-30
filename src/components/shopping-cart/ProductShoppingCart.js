import React, { Component } from "react";
import "../../styles/shopping-cart-modal.css";
import ProductShoppingCartSingle from "./ProductShoppingCartSingle";
import { connect } from "react-redux";
import {
  decQuantity,
  incQuantity,
  selectSize,
  getCartItems,
} from "../../state/actions/cartActions";

export class ProductShoppingCart extends Component {
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
    const { cartItems } = this.props.cart;

    return (
      <>
        {cartItems.map((item, index) => (
          <div key={index} className="shopping-cart">
            <ProductShoppingCartSingle
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
})(ProductShoppingCart);
