import React, { Component } from "react";
import Cart from "../img/green_cart.png";

export default class Logo extends Component {
  render() {
    return (
      <>
        <a href="#green-cart">
          <img src={Cart} className="logo-image" alt="green-cart" />
        </a>
      </>
    );
  }
}
