import React, { Component } from "react";
import "../styles/navbar.css";
import Cart from "../img/green_cart.png";
import ShoppingCart from "../img/shopping_cart.png";
import BlackCircle from "../img/black_circle.png";
import ShoppingCartModal from "../components/ShoppingCartModal";
import CurrencyBtn from "../components/buttons/CurrencyBtn";
import ShoppingCartBtn from "../components/buttons/ShoppingCartBtn";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.onWomenLinkClick = this.onWomenLinkClick.bind(this);
    this.onMenLinkClick = this.onMenLinkClick.bind(this);
    this.onKidsLinkClick = this.onKidsLinkClick.bind(this);
    this.selectCartButton = this.selectCartButton.bind(this);
    this.selectCurrencyButton = this.selectCurrencyButton.bind(this);
    this.openModal = this.openModal.bind(this);

    this.state = {
      selectedWomen: true,
      selectedMen: false,
      selectedKids: false,
      selectedCart: false,
      selectedCurrency: false,
      cartHasAItem: true,
      modelOpen: false,
      modalDisplay: "none",
    };
  }

  onWomenLinkClick() {
    this.setState({ selectedWomen: true });
    this.setState({ selectedMen: false });
    this.setState({ selectedKids: false });
    console.log("women");
  }

  onMenLinkClick() {
    this.setState({ selectedMen: true });
    this.setState({ selectedWomen: false });
    this.setState({ selectedKids: false });
    console.log("men");
  }

  onKidsLinkClick() {
    this.setState({ selectedKids: true });
    this.setState({ selectedMen: false });
    this.setState({ selectedWomen: false });
    console.log("kids");
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
    this.setState({ modalDisplay: this.state.modelOpen ? "none" : "block" });
    this.setState({ selectedCart: true });
    console.log("modal change");
  }

  render() {
    const btn_Women = this.state.selectedWomen ? "women-category-selected" : "";
    const btn_Men = this.state.selectedMen ? "men-category-selected" : "";
    const btn_Kids = this.state.selectedKids ? "kids-category-selected" : "";

    const { selectedCurrency, cartHasAItem, modalDisplay } = this.state;

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
            onClick={this.onWomenLinkClick}
          >
            WOMEN
          </a>
          <a href="#men" className={btn_Men} onClick={this.onMenLinkClick}>
            MEN
          </a>
          <a href="#kids" className={btn_Kids} onClick={this.onKidsLinkClick}>
            KIDS
          </a>
          <div className="topnav-right">
            <CurrencyBtn
              onClick={this.selectCurrencyButton}
              selectedCurrency={selectedCurrency}
            />
            <ShoppingCartBtn
              cartHasAItem={cartHasAItem}
              onClick={this.openModal}
            />
            <ShoppingCartModal modalDisplay={modalDisplay} />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
