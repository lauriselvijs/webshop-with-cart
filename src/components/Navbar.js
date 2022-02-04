import React, { Component } from "react";
import "../styles/navbar.css";
import ShoppingCartModal from "../components/ShoppingCart/ShoppingCartModal";
import CurrencyBtn from "../components/buttons/CurrencyBtn";
import ShoppingCartBtn from "../components/buttons/ShoppingCartBtn";
import Categories from "../components/Categories";
import Logo from "../components/Logo";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <div className="topnav-centered">
            <Logo />
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
