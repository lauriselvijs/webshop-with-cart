import React, { Component } from "react";
import "../../styles/buttons/add-btn.css";

export default class AddBtn extends Component {
  render() {
    const { addToCart } = this.props;
    return (
      <button className="add-to-cart" onClick={addToCart}>
        ADD TO CART
      </button>
    );
  }
}
