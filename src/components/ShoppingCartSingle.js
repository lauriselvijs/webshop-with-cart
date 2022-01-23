import React, { Component } from "react";
import Sweater from "../img/sweater.png";
import "../styles/shopping-cart-single.css";

class ShoppingCartSingle extends Component {
  render() {
    const {
      btn_class_S,
      btn_class_M,
      selectButtonS,
      selectButtonM,
      increaseQuantity,
      count,
      decreaseQuantity,
    } = this.props;

    return (
      <div className="container">
        <div className="product-info">
          <h2>Apollo running short</h2>
          <h4>$50.00</h4>
        </div>
        <div className="sizes">
          <button className={btn_class_S} onClick={selectButtonS}>
            S
          </button>
          <button className={btn_class_M} onClick={selectButtonM}>
            M
          </button>
        </div>
        <div className="white-space"></div>
        <div className="quantity-increase">
          <button className="plus-button-modal" onClick={increaseQuantity}>
            +
          </button>
        </div>
        <div className="quantity-modal"> {count}</div>
        <div className="quantity-decrease">
          <button className="minus-button-modal" onClick={decreaseQuantity}>
            -
          </button>
        </div>
        <div className="product-image">
          <img src={Sweater} alt="product" style={{ width: "100%" }} />
        </div>
      </div>
    );
  }
}
export default ShoppingCartSingle;
