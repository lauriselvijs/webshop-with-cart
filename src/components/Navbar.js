import React, { Component } from "react";
import "../styles/Navbar.css";
import Cart from "../img/green_cart.png";
import Currency from "../img/currency.png";
import ShoppingCart from "../img/shopping_cart.png";
import BlackCircle from "../img/black_circle.png";
import ShoppingCartModal from "../components/ShoppingCartModal";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedWomen: true,
      selectedMen: false,
      selectedKids: false,
      selectedCart: false,
      selectedCurrency: false,
      cartHasAItem: true,
      modelOpen: false,
    };
  }

  selectButtonWomen() {
    this.setState({ selectedWomen: true });
    this.setState({ selectedMen: false });
    this.setState({ selectedKids: false });
  }

  selectButtonMen() {
    this.setState({ selectedMen: true });
    this.setState({ selectedWomen: false });
    this.setState({ selectedKids: false });
  }

  selectButtonKids() {
    this.setState({ selectedKids: true });
    this.setState({ selectedMen: false });
    this.setState({ selectedWomen: false });
  }

  selectCartButton() {
    this.setState({ selectedCart: true });
    console.log("cart selected");
  }

  selectCurrencyButton() {
    this.setState({ selectedCurrency: !this.state.selectedCurrency });
    console.log("currency selected");
  }

  openModal() {
    this.setState({ cartHasAItem: !this.state.cartHasAItem });
    this.setState({ modelOpen: !this.state.modelOpen });
    console.log("change");
  }

  render() {
    const btn_Women = this.state.selectedWomen ? "women-category-selected" : "";
    const btn_Men = this.state.selectedMen ? "men-category-selected" : "";
    const btn_Kids = this.state.selectedKids ? "kids-category-selected" : "";

    const { selectedCurrency, cartHasAItem } = this.state;

    const modalDisplay = this.state.modelOpen ? "block" : "none";

    return (
      <div>
        <div className="topnav">
          <div className="topnav-centered">
            <a href="#green-cart">
              <img src={Cart} className="logo-image" alt="green-cart" />
            </a>
          </div>
          <a
            href="#women"
            className={btn_Women}
            onClick={this.selectButtonWomen.bind(this)}
          >
            WOMEN
          </a>
          <a
            href="#men"
            className={btn_Men}
            onClick={this.selectButtonMen.bind(this)}
          >
            MEN
          </a>
          <a
            href="#kids"
            className={btn_Kids}
            onClick={this.selectButtonKids.bind(this)}
          >
            KIDS
          </a>
          <div className="topnav-right">
            <button
              className="currency-image"
              onClick={this.selectCartButton.bind(this)}
            >
              <div className="currency-link">
                <span onClick={this.selectCurrencyButton.bind(this)}>
                  <img src={Currency} alt="currency" />
                </span>
                <div className={`menu ${selectedCurrency ? "open" : ""}`}>
                  <ul>
                    <li>$ USD</li>
                    <li>€ EUR</li>
                    <li>¥ JPY</li>
                  </ul>
                </div>
              </div>
            </button>
            <button className="shopping-cart-image">
              <img
                onClick={this.openModal.bind(this)}
                className="cart-image"
                src={ShoppingCart}
                alt="shopping-cart"
              />
              <div className="modal" style={{ display: modalDisplay }}>
                <div className="modal-content">
                  <ShoppingCartModal />
                </div>
              </div>
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
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
