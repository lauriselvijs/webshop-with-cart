import React, { Component } from "react";
import "../styles/Navbar.css";
import Cart from "../img/green_cart.png";
import Currency from "../img/currency.png";
import ShoppingCart from "../img/shopping_cart.png";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <div className="topnav-centered">
            <a href="#green-cart">
              <img src={Cart} className="logo-image" alt="green-cart" />
            </a>
          </div>
          <a href="#women">WOMEN</a>
          <a href="#men">MEN</a>
          <a href="#kids">KIDS</a>
          <div className="topnav-right">
            <button className="currency-image">
              <img src={Currency} alt="green-cart" />
            </button>
            <button className="shopping-cart-image">
              <img src={ShoppingCart} alt="shopping-cart" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
