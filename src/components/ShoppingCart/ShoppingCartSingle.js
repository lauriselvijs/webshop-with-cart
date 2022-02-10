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
  getAttributeArr,
} from "../../utils/reduceUtils";
import ProductName from "../product/ProductName";
import ProductPrice from "../product/ProductPrice";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import MainProductImg from "../product/MainProductImg";
import PropTypes from "prop-types";
import OptAttributeBtn from "../buttons/OptAttributeBtn";
import ProductAttrName from "../product/ProductAttrName";

export class ShoppingCartSingle extends Component {
  constructor(props) {
    super(props);

    this.selectColorButton = this.selectColorButton.bind(this);

    this.selectSizeButton = this.selectSizeButton.bind(this);
    this.selectUsbPort = this.selectUsbPort.bind(this);
    this.selectTouchId = this.selectTouchId.bind(this);

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
    console.log(size);

    const { attrObj } = this.props.item;

    this.props.setSelectedAttribute(id, { ...attrObj, size });
  }

  selectUsbPort(id, usbAttribute) {
    const { attrObj } = this.props.item;

    this.props.setSelectedAttribute(id, { ...attrObj, usbType: usbAttribute });
  }

  selectTouchId(id, touchIdAttribute) {
    const { attrObj } = this.props.item;

    this.props.setSelectedAttribute(id, {
      ...attrObj,
      touchId: touchIdAttribute,
    });
  }

  selectColorButton(id, color) {
    const { attrObj } = this.props.item;

    this.props.setSelectedAttribute(id, { ...attrObj, color });
  }

  render() {
    const { item } = this.props;
    const { id, brand, name, count, gallery, attrObj } = this.props.item;

    const { chosenCurrencyName } = this.props.currency;

    const price = findPrice(item, chosenCurrencyName);

    const { itemIndex } = this.state;

    const textAttrArr = getAttributeArr(item, "text");
    const swatchAttrArr = getAttributeArr(item, "swatch");

    return (
      <div className="container">
        <div className="left-section">
          <ProductName
            brand={brand}
            name={name}
            className="shopping-cart-product-name"
          />
          <ProductPrice
            price={price}
            chosenCurrencyName={chosenCurrencyName}
            className="shopping-cart-single-price"
          />

          <div className="text-attribute">
            {checkIfHasAttribute(item, "text") && (
              <div>
                {textAttrArr.map((attribute, index) => (
                  <div key={index}>
                    {attribute.name === "Capacity" && (
                      <>
                        {attribute.items.map((size, index) => (
                          <SizeBtn
                            key={index}
                            size={size.displayValue}
                            selectSizeButton={this.selectSizeButton.bind(
                              this,
                              item.id,
                              size.displayValue
                            )}
                            selectedSize={attrObj.size}
                          />
                        ))}
                      </>
                    )}

                    {attribute.name === "Size" && (
                      <>
                        {attribute.items.map((size, index) => (
                          <SizeBtn
                            key={index}
                            size={size.displayValue}
                            selectSizeButton={this.selectSizeButton.bind(
                              this,
                              item.id,
                              size.displayValue
                            )}
                            selectedSize={attrObj.size}
                          />
                        ))}
                      </>
                    )}

                    {attribute.name === "With USB 3 ports" && (
                      <>
                        <ProductAttrName name={attribute.name} />
                        {attribute.items.map((optAttribute, index) => (
                          <OptAttributeBtn
                            key={index}
                            optionalAttribute={optAttribute.displayValue}
                            selectOptAttrButton={this.selectUsbPort.bind(
                              this,
                              item.id,
                              optAttribute.displayValue
                            )}
                            selectedOptAttribute={attrObj.usbType}
                          />
                        ))}
                      </>
                    )}

                    {attribute.name === "Touch ID in keyboard" && (
                      <>
                        <ProductAttrName name={attribute.name} />
                        {attribute.items.map((size, index) => (
                          <OptAttributeBtn
                            key={index}
                            optionalAttribute={size.displayValue}
                            selectOptAttrButton={this.selectTouchId.bind(
                              this,
                              item.id,
                              size.displayValue
                            )}
                            selectedOptAttribute={attrObj.touchId}
                          />
                        ))}
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="swatch-attribute">
            {checkIfHasAttribute(item, "swatch") && (
              <>
                {swatchAttrArr.map((attribute, index) => (
                  <div key={index}>
                    {attribute.items.map((color, index) => (
                      <ColorBtn
                        key={index}
                        colorCode={color.value}
                        colorName={color.displayValue}
                        selectColorButton={this.selectColorBtn.bind(
                          this,
                          item.id,
                          color.value
                        )}
                        selectedColorCode={attrObj.color}
                      />
                    ))}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <div className="white-space"></div>
        <div className="qty-section">
          <QuantityBtn itemCount={count} itemId={id} />
        </div>

        <div className="gallery-arrow-section">
          {gallery.length > 1 && (
            <ArrowLeft
              src={LeftArrow}
              onLeftArrowClick={this.onLeftArrowClick}
            />
          )}
          <MainProductImg src={gallery[itemIndex]} />
          {gallery.length > 1 && (
            <ArrowRight
              src={RightArrow}
              onRightArrowClick={this.onRightArrowClick}
            />
          )}
        </div>
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
