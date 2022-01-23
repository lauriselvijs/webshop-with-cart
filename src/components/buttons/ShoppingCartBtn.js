import React, { Component } from "react";
import "../../styles/buttons/shopping-cart-btn.css";
import ShoppingCart from "../../img/shopping_cart.png";
import BlackCircle from "../../img/black_circle.png";

export default class ShoppingCartBtn extends Component {
  render() {
    const { onClick, cartHasAItem } = this.props;

    return (
      <>
        <img
          onClick={onClick}
          className="cart-image"
          src={ShoppingCart}
          alt="shopping-cart"
        />
        {cartHasAItem ? (
          <div>
            <img
              className="black-circle"
              src={BlackCircle}
              alt="black-circle"
              style={{ width: "20px" }}
            />
            <div className="quantity-count">1</div>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}
