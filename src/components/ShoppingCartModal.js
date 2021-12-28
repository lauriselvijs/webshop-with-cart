import React, { Component } from "react";
import "../styles/shopping-cart-modal.css";
import Sweater from "../img/sweater.png";

class ShoppingCartModal extends Component {
  render() {
    return (
      <div>
        <h4 className="cart-title-info">My Bag, 2 items</h4>
        <div className="grid-container">
          <div className="container">
            <div className="product-info">
              <p>Apollo running short</p>
              <b>$50.00</b>
            </div>
            <div className="quantity-increase">
              <button className="plus-button">+</button>
            </div>
            1
            <div className="quantity-decrease">
              <button className="minus-button">-</button>
            </div>
            <div className="sizes">
              <button className="size-S">S</button>
              <button className="size-M">M</button>
            </div>
          </div>
          <img src={Sweater} alt="product" style={{ width: "100%" }} />
          <div className="container">
            <div className="product-info">
              <p>Apollo running short</p>
              <b>$50.00</b>
            </div>
            <div className="quantity-increase">
              <button className="plus-button">+</button>
            </div>
            1
            <div className="quantity-decrease">
              <button className="minus-button">-</button>
            </div>
            <div className="sizes">
              <button className="size-S">S</button>
              <button className="size-M">M</button>
            </div>
          </div>
          <img src={Sweater} alt="product" style={{ width: "100%" }} />
          <h4>Total </h4>
          <h4>$100 </h4>
          <button className="view-bag">VIEW BAG</button>
          <button className="check-out">CHECK OUT</button>
        </div>
      </div>
    );
  }
}

export default ShoppingCartModal;
