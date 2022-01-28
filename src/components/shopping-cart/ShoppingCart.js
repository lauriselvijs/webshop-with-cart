import React, { Component } from "react";
import "../styles/shopping-cart.css";
import ClothesShoppingCart from "./categories/clothes/ClothesShoppingCart";

export class ShoppingCart extends Component {
  render() {
    return (
      <>
        <hr style={{ width: "95%", color: "lightgray" }} />
        <ClothesShoppingCart />
      </>
    );
  }
}
