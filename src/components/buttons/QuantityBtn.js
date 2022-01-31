import React, { Component } from "react";
import { connect } from "react-redux";
import {
  incQuantity,
  decQuantity,
  selectSize,
  selectAttribute,
} from "../../state/actions/cartActions";
import "../../styles/buttons/qty-btn.css";

export class QuantityBtn extends Component {
  constructor(props) {
    super(props);

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);

    this.state = {};
  }

  increaseQuantity(id, attribute, selectedValue) {
    this.props.incQuantity(id);
    this.props.selectAttribute(id, attribute, selectedValue);
  }

  decreaseQuantity(id, attribute, selectedValue) {
    this.props.decQuantity(id);
    this.props.selectAttribute(id, attribute, selectedValue);
  }

  render() {
    const { itemId, itemCount, selectedSize, selectedAttributeType } =
      this.props;
    return (
      <>
        <button
          className="plus-button-modal"
          onClick={this.increaseQuantity.bind(
            this,
            itemId,
            selectedAttributeType,
            selectedSize
          )}
        >
          +
        </button>
        <div className="item-count">{itemCount}</div>
        <button
          className="minus-button-modal"
          onClick={this.decreaseQuantity.bind(
            this,
            itemId,
            selectedAttributeType,
            selectedSize
          )}
        >
          -
        </button>
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
  selectAttribute,
})(QuantityBtn);
