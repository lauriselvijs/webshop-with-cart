import React, { Component } from "react";
import "../styles/main-display.css";
import Sweater from "../img/sweater.png";
import BuyCart from "../img/buy_cart.png";

class MainDisplay extends Component {
  constructor(props) {
    super(props);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.state = {
      hover: false,
      addedToCart: false,
    };
  }

  mouseOver = () => {
    this.setState({ hover: true });
  };
  mouseOut() {
    this.setState({ hover: false });
  }

  addedToCart = () => {
    this.setState({ addedToCart: !this.state.addedToCart });
    console.log("added to card");
  };

  render() {
    return (
      <div>
        <h1 className="category-name">WOMEN</h1>
        <div className="grid-container">
          <div
            className="card"
            onMouseOver={this.mouseOver.bind(this)}
            onMouseOut={this.mouseOut.bind(this)}
          >
            <img
              src={Sweater}
              alt="product"
              className="product-image"
              style={{ width: "100%" }}
            />
            {this.state.hover ? (
              <img
                src={BuyCart}
                alt="product-cart"
                className="product-cart"
                style={{ width: "15%" }}
                onClick={this.addedToCart.bind(this)}
              />
            ) : null}
            <div className="container">
              <p>Apollo running short</p>
              <b>$50.00</b>
            </div>
          </div>
          <div className="card">
            <img src={Sweater} alt="product" style={{ width: "100%" }} />
            <div className="container">
              <p>Apollo running short</p>
              <b>$50.00</b>
            </div>
          </div>
          <div className="card">
            <img src={Sweater} alt="product" style={{ width: "100%" }} />
            <div className="container">
              <p>Apollo running short</p>
              <b>$50.00</b>
            </div>
          </div>
          <div className="card">
            <img src={Sweater} alt="product" style={{ width: "100%" }} />
            <div className="container">
              <p>Apollo running short</p>
              <b>$50.00</b>
            </div>
          </div>
          <div className="card">
            <img src={Sweater} alt="product" style={{ width: "100%" }} />
            <div className="container">
              <p>Apollo running short</p>
              <b>$50.00</b>
            </div>
          </div>
          <div className="card">
            <img src={Sweater} alt="product" style={{ width: "100%" }} />
            <div className="container">
              <p>Apollo running short</p>
              <b>$50.00</b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainDisplay;
