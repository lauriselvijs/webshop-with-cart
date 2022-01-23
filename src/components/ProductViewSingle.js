import React, { Component } from "react";
import Sweater from "../img/sweater.png";
import BuyCart from "../img/buy_cart.png";
import "../styles/product-view-single.css";

class ProductViewSingle extends Component {
  render() {
    const { hover, onMouseOver, onMouseOut, addedToCart } = this.props;
    return (
      <>
        <div className="card" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          <img
            src={Sweater}
            alt="product"
            className="product-image"
            style={{ width: "100%" }}
          />
          {hover ? (
            <img
              src={BuyCart}
              alt="product-cart"
              className="product-cart"
              style={{ width: "15%" }}
              onClick={addedToCart}
            />
          ) : null}
          <div className="container">
            <p>Apollo running short</p>
            <b>$50.00</b>
          </div>
        </div>
      </>
    );
  }
}

export default ProductViewSingle;
