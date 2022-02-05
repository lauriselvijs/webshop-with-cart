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
import {
  findPrice,
  checkIfHasAttribute,
  getAttributeObj,
} from "../../utils/reduceUtils";
import ProductName from "../product/ProductName";
import ProductPrice from "../product/ProductPrice";
import ProductAttrName from "../product/ProductAttrName";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import MainProductImg from "../product/MainProductImg";
import PropTypes from "prop-types";

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
    const { id, brand, name, count, gallery, attrObj } = this.props.item;

    const { chosenCurrencyName } = this.props.currency;
    const { cartOpen } = this.props.cart;

    const price = findPrice(item, chosenCurrencyName);

    const { itemIndex } = this.state;

    const textAttrArr = getAttributeObj(item, "text");
    const swatchAttrArr = getAttributeObj(item, "swatch");

    return (
      <div className="container">
        <div className="left-section">
          <ProductName brand={brand} name={name} />
          <ProductPrice price={price} chosenCurrencyName={chosenCurrencyName} />
          <div className="text-attribute">
            {checkIfHasAttribute(item, "text") && (
              <>
                <ProductAttrName name={textAttrArr.name} />
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
                <ProductAttrName name={swatchAttrArr.name} />
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
                    selectedColorCode={attrObj.color}
                  />
                ))}
              </>
            )}
          </div>
        </div>
        <div className="white-space"></div>
        <div className="qty-section">
          <QuantityBtn itemCount={count} itemId={id} />
        </div>
        <MainProductImg src={gallery[itemIndex]} />
        {!cartOpen && (
          <>
            <ArrowRight
              src={RightArrow}
              onRightArrowClick={this.onRightArrowClick}
            />
            <ArrowLeft
              src={LeftArrow}
              onLeftArrowClick={this.onLeftArrowClick}
            />
          </>
        )}
      </div>
    );
  }
}

ShoppingCartSingle.propTypes = {
  item: PropTypes.object,
  chosenCurrencyName: PropTypes.string,
  cartOpen: PropTypes.bool,
  removeItem: PropTypes.func,
  setSelectedAttribute: PropTypes.func,
};

ShoppingCartSingle.defaultProps = {
  item: {},
  chosenCurrencyName: "USD",
  cartOpen: false,
  removeItem: () => {},
  setSelectedAttribute: () => {},
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.currency,
});

export default connect(mapStateToProps, {
  removeItem,
  setSelectedAttribute,
})(ShoppingCartSingle);
