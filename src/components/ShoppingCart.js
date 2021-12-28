import React, { Component } from "react";
import Sweater from "../img/sweater.png";

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <h1>CART</h1>
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
          <img src={Sweater} alt="product" style={{ width: "20%" }} />
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
          <img src={Sweater} alt="product" style={{ width: "20%" }} />
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
