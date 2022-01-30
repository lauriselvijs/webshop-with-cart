import React, { Component } from "react";
import "../../styles/shopping-cart.css";
import ProductShoppingCart from "./ProductShoppingCart";

export default class ShoppingCart extends Component {
  render() {
    return (
      <>
        <hr style={{ width: "95%", color: "lightgray" }} />
        <ProductShoppingCart />
      </>
    );
  }
}
