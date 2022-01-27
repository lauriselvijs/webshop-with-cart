import React, { Component } from "react";
import "../styles/navbar.css";
import Cart from "../img/green_cart.png";
import ShoppingCartModal from "../components/ShoppingCartModal";
import CurrencyBtn from "../components/buttons/CurrencyBtn";
import ShoppingCartBtn from "../components/buttons/ShoppingCartBtn";
import Categories from "../components/categories/Categories";

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
          <Categories />
          <div className="topnav-right">
            <CurrencyBtn />
            <ShoppingCartBtn />
            <ShoppingCartModal />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
