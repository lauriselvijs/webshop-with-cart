import React, { Component } from "react";
import "../styles/shopping-cart-single.css";
import { selectSize } from "../state/actions/cartActions";
import { connect } from "react-redux";
import SizeBtn from "../components/buttons/SizeBtn";

export class ShoppingCartSingle extends Component {
  constructor(props) {
    super(props);

    this.selectButton = this.selectButton.bind(this);

    this.state = {
      selected: false,
    };
  }

  selectButton(id, selectSize) {
    this.props.selectSize(id, selectSize);
  }

  render() {
    const { item, increaseQuantity, decreaseQuantity } = this.props;

    return (
      <div className="container">
        <div className="product-info">
          <h2>{item.name}</h2>
          <h4>$ {item.price}</h4>
        </div>
        <div className="sizes">
          {item.sizes.map((size, index) => (
            <SizeBtn
              key={index}
              size={size}
              selectButton={this.selectButton.bind(this, item.id, size)}
              selectedSize={item.selectedSize}
            />
          ))}
        </div>
        <div className="white-space"></div>
        <div className="quantity-increase">
          <button className="plus-button-modal" onClick={increaseQuantity}>
            +
          </button>
        </div>
        <div className="quantity-modal"> {item.count}</div>
        <div className="quantity-decrease">
          <button className="minus-button-modal" onClick={decreaseQuantity}>
            -
          </button>
        </div>
        <div className="product-image">
          <img src={item.img[0]} alt="product" style={{ width: "200%" }} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { selectSize })(ShoppingCartSingle);
