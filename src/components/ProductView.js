import React, { Component } from "react";
import "../styles/product-view.css";
import Sweater from "../img/sweater.png";

class ProductView extends Component {
  render() {
    return (
      <div className="container">
        <div className="product-preview">
          <img src={Sweater} alt="product" style={{ width: "20%" }} />
          <img src={Sweater} alt="product" style={{ width: "20%" }} />
          <img src={Sweater} alt="product" style={{ width: "20%" }} />
        </div>
        <div className="product-view-image">
          <img src={Sweater} alt="product" style={{ width: "100%" }} />
        </div>
        <div className="product-info">
          <h2>Apollo Running Short</h2>
          <h4>SIZE:</h4>
          <button className="size-XS-main">XS</button>
          <button className="size-S-main">S</button>
          <button className="size-M-main">M</button>
          <button className="size-L-main">L</button>
          <h4>PRICE:</h4>
          <h4>$50.00</h4>
          <button className="add-to-cart">ADD TO CART</button>
          <p className="additional-info">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    );
  }
}

export default ProductView;
