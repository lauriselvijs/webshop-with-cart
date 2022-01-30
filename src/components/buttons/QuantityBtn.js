import React, { Component } from "react";
import { connect } from "react-redux";
import {
  incQuantity,
  decQuantity,
  selectSize,
} from "../../state/actions/cartActions";

export class QuantityBtn extends Component {
  constructor(props) {
    super(props);

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);

    this.state = {};
  }

  increaseQuantity(id, selectedSize) {
    this.props.incQuantity(id);
    this.props.selectSize(id, selectedSize);
  }

  decreaseQuantity(id, selectedSize) {
    this.props.decQuantity(id);
    this.props.selectSize(id, selectedSize);
  }

  render() {
    const { itemId, itemCount, selectedSize } = this.props;
    return (
      <>
        <div className="quantity-increase">
          <button
            className="plus-button-modal"
            onClick={this.increaseQuantity.bind(this, itemId, selectedSize)}
          >
            +
          </button>
        </div>
        <div className="quantity-modal">{itemCount}</div>
        <div className="quantity-decrease">
          <button
            className="minus-button-modal"
            onClick={this.decreaseQuantity.bind(this, itemId, selectedSize)}
          >
            -
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {
  incQuantity,
  decQuantity,
  selectSize,
})(QuantityBtn);
