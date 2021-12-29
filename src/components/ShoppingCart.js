import React, { Component } from "react";
import Sweater from "../img/sweater.png";
import "../styles/shopping-cart.css";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected_S: true,
      selected_M: false,
      count: 1,
    };
  }

  selectButtonS() {
    this.setState({ selected_S: !this.state.selected_S });
    this.setState({ selected_M: false });
  }

  selectButtonM() {
    this.setState({ selected_M: !this.state.selected_M });
    this.setState({ selected_S: false });
  }

  increaseQuantity = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  decreaseQuantity = () => {
    if (this.state.count > 1)
      this.setState((prev) => ({ count: prev.count - 1 }));
  };

  render() {
    let btn_class_S = this.state.selected_S ? "size-S-selected" : "size-S";
    let btn_class_M = this.state.selected_M ? "size-M-selected" : "size-M";

    return (
      <div className="container">
        <div class="grid-container">
          <div class="product-info">
            <h2>Apollo running short</h2>
            <h4>$50.00</h4>
          </div>
          <div class="sizes">
            <button
              className={btn_class_S}
              onClick={this.selectButtonS.bind(this)}
            >
              S
            </button>
            <button
              className={btn_class_M}
              onClick={this.selectButtonM.bind(this)}
            >
              M
            </button>
          </div>
          <div class="white-space"></div>
          <div class="quantity-increase">
            <button className="plus-button" onClick={this.increaseQuantity}>
              +
            </button>
          </div>
          <div class="quantity"> {this.state.count}</div>
          <div class="quantity-decrease">
            <button className="minus-button" onClick={this.decreaseQuantity}>
              -
            </button>
          </div>
          <div class="product-image">
            <img src={Sweater} alt="product" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
