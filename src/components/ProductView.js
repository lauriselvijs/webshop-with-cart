import React, { Component } from "react";
import "../styles/product-view.css";
import Sweater from "../img/sweater.png";

class ProductView extends Component {
  render() {
    return (
      <div class="parent">
        <div class="thumbnail-1">
          <img src={Sweater} alt="product" style={{ width: "20%" }} />
        </div>
        <div class="thumbnail-2">
          <img src={Sweater} alt="product" style={{ width: "20%" }} />
        </div>
        <div class="thumbnail-3">
          <img src={Sweater} alt="product" style={{ width: "20%" }} />
        </div>
        <div class="white-space"> </div>
        <div class="main-image">
          <img src={Sweater} alt="product" style={{ width: "100%" }} />
        </div>
        <div class="product-name">
          <h2>Apollo Running Short</h2>
          <h4>SIZE:</h4>
        </div>
        <div class="size">
          <button className="size-XS-main">XS</button>
          <button className="size-S-main">S</button>
          <button className="size-M-main">M</button>
          <button className="size-L-main">L</button>
        </div>
        <div class="price">
          <h4>PRICE:</h4>
          <h4>$50.00</h4>
        </div>
        <div class="add-to-cart-section">
          <button className="add-to-cart">ADD TO CART</button>
        </div>
        <div class="info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
            reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
            Voluptatum ducimus voluptates voluptas?
          </p>
        </div>
      </div>
    );
  }
}

export default ProductView;
