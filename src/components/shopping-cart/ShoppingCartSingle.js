import React, { Component } from "react";
import "../../styles/shopping-cart/shopping-cart-single.css";
import {
  selectSize,
  removeItem,
  selectAttribute,
} from "../../state/actions/cartActions";
import { connect } from "react-redux";
import SizeBtn from "../buttons/SizeBtn";
import QuantityBtn from "../buttons/QuantityBtn";
import ColorBtn from "../buttons/ColorBtn";
import LeftArrow from "../../img/left_arrow.png";
import RightArrow from "../../img/right_arrow.png";
import { formatMoney } from "../utils/formatUtils";

export class ShoppingCartSingle extends Component {
  constructor(props) {
    super(props);

    this.selectButton = this.selectButton.bind(this);
    this.onLeftArrowClick = this.onLeftArrowClick.bind(this);
    this.onRightArrowClick = this.onRightArrowClick.bind(this);

    this.state = {
      itemIndex: 0,
    };
  }

  onLeftArrowClick() {
    if (0 < this.state.itemIndex) {
      this.setState({
        itemIndex: this.state.itemIndex - 1,
      });
    }
  }

  onRightArrowClick() {
    const { item } = this.props;

    if (item.img.length - 1 > this.state.itemIndex) {
      this.setState({
        itemIndex: this.state.itemIndex + 1,
      });
    }
  }

  selectButton(id, attribute, selectedValue) {
    this.props.selectAttribute(id, attribute, selectedValue);
  }

  render() {
    const { item } = this.props;
    const { chosenCurrencyName } = this.props.currency;
    const { cartOpen } = this.props.cart;

    const { itemIndex } = this.state;

    return (
      <div className="container">
        <div className="left-section">
          <div className="product-info">
            <h2>{item.name}</h2>
            <h4>{formatMoney(item.price, chosenCurrencyName)}</h4>
          </div>
          <div className="attribute">
            {item.attributeType === "text" &&
              item.sizes.map((size, index) => (
                <SizeBtn
                  key={index}
                  size={size}
                  selectButton={this.selectButton.bind(
                    this,
                    item.id,
                    item.attributeType,
                    size
                  )}
                  selectedSize={item.selectedSize}
                />
              ))}
            {item.attributeType === "swatch" &&
              item.colors.map((color, index) => (
                <ColorBtn
                  key={index}
                  colorCode={color.code}
                  colorName={color.color}
                  selectButton={this.selectButton.bind(
                    this,
                    item.id,
                    item.attributeType,
                    color.code
                  )}
                  selectedColorCode={item.selectedColorCode}
                />
              ))}
          </div>
        </div>
        <div className="white-space"></div>
        <div className="qty-section">
          {item.attributeType === "text" && (
            <QuantityBtn
              itemCount={item.count}
              itemId={item.id}
              selectedAttributeType={item.attributeType}
              selectedSize={item.selectedSize}
            />
          )}
          {item.attributeType === "swatch" && (
            <QuantityBtn
              itemCount={item.count}
              itemId={item.id}
              selectedAttributeType={item.attributeType}
              selectedSize={item.selectedColorCode}
            />
          )}
        </div>
        {!cartOpen && (
          <img
            className="left-arrow"
            src={LeftArrow}
            alt="left arrow"
            onClick={this.onLeftArrowClick}
          />
        )}
        <img
          className="product-image"
          src={item.img[itemIndex]}
          alt="product"
        />
        {!cartOpen && (
          <img
            className="right-arrow"
            src={RightArrow}
            alt="right arrow"
            onClick={this.onRightArrowClick}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.currency,
});

export default connect(mapStateToProps, {
  selectSize,
  removeItem,
  selectAttribute,
})(ShoppingCartSingle);
