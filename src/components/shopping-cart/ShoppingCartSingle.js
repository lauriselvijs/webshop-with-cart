import React, { Component } from "react";
import "../../styles/shopping-cart/shopping-cart-single.css";
import {
  removeItem,
  setSelectedAttribute,
} from "../../state/actions/cartActions";
import { connect } from "react-redux";
import SizeBtn from "../buttons/SizeBtn";
import QuantityBtn from "../buttons/QuantityBtn";
import ColorBtn from "../buttons/ColorBtn";
import LeftArrow from "../../img/left_arrow.png";
import RightArrow from "../../img/right_arrow.png";
import { formatMoney } from "../utils/formatUtils";
import {
  findPrice,
  checkIfHasAttribute,
  getAttributeObj,
} from "../utils/reduceUtils";

export class ShoppingCartSingle extends Component {
  constructor(props) {
    super(props);

    this.selectColorButton = this.selectColorButton.bind(this);
    this.selectSizeButton = this.selectSizeButton.bind(this);
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

    if (item.gallery.length - 1 > this.state.itemIndex) {
      this.setState({
        itemIndex: this.state.itemIndex + 1,
      });
    }
  }

  selectSizeButton(id, size) {
    const attrObj = {
      size: size,
      color: "",
    };

    this.props.setSelectedAttribute(id, attrObj);
  }

  selectColorButton(id, color) {
    const attrObj = {
      size: "",
      color: color,
    };

    this.props.setSelectedAttribute(id, attrObj);
  }

  render() {
    const { item } = this.props;
    const { chosenCurrencyName } = this.props.currency;
    const { cartOpen } = this.props.cart;

    const price = findPrice(item, chosenCurrencyName);

    const { itemIndex } = this.state;

    const textAttrArr = getAttributeObj(item, "text");
    const swatchAttrArr = getAttributeObj(item, "swatch");

    return (
      <div className="container">
        <div className="left-section">
          <div className="product-info">
            <h1>{item.brand}</h1>
            <h2>{item.name}</h2>
            <h4>{formatMoney(price, chosenCurrencyName)}</h4>
          </div>

          <div className="text-attribute">
            {checkIfHasAttribute(item, "text") && (
              <>
                <h4>{textAttrArr.name.toUpperCase()}:</h4>
                {textAttrArr.items.map((size, index) => (
                  <SizeBtn
                    key={index}
                    size={size.displayValue}
                    selectSizeButton={this.selectSizeButton.bind(
                      this,
                      item.id,
                      size.displayValue
                    )}
                    selectedSize={item.attrObj.size}
                  />
                ))}
              </>
            )}
          </div>
          <div className="swatch-attribute">
            {checkIfHasAttribute(item, "swatch") && (
              <>
                <h4>{swatchAttrArr.name.toUpperCase()}:</h4>
                {swatchAttrArr.items.map((color, index) => (
                  <ColorBtn
                    key={index}
                    colorCode={color.value}
                    colorName={color.displayValue}
                    selectColorButton={this.selectColorButton.bind(
                      this,
                      item.id,
                      color.value
                    )}
                    selectedColorCode={item.attrObj.color}
                  />
                ))}
              </>
            )}
          </div>
        </div>
        <div className="white-space"></div>
        <div className="qty-section">
          <QuantityBtn itemCount={item.count} itemId={item.id} />
        </div>
        {!cartOpen && (
          <>
            <img
              className="right-arrow"
              src={RightArrow}
              alt="right arrow"
              onClick={this.onRightArrowClick}
              style={{ pointerEvents: "all" }}
            />
            <img
              className="left-arrow"
              src={LeftArrow}
              alt="left arrow"
              onClick={this.onLeftArrowClick}
              style={{ pointerEvents: "all" }}
            />
          </>
        )}
        <img
          className="product-image"
          src={item.gallery[itemIndex]}
          alt="product"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.currency,
});

export default connect(mapStateToProps, {
  removeItem,
  setSelectedAttribute,
})(ShoppingCartSingle);
