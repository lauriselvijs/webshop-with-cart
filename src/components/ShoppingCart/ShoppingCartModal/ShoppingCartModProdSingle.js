import React, { Component } from "react";
import "../../../styles/shopping-cart/shopping-cart-modal/shopping-cart-mod-prod-single.css";
import {
  removeItem,
  setSelectedAttribute,
} from "../../../state/actions/cartActions";
import { connect } from "react-redux";
import SizeBtn from "../../buttons/SizeBtn";
import QuantityBtn from "../../buttons/QuantityBtn";
import ColorBtn from "../../buttons/ColorBtn";
import {
  findPrice,
  checkIfHasAttribute,
  getAttributeArr,
} from "../../../utils/reduceUtils";
import ProductName from "../../product/ProductName";
import ProductPrice from "../../product/ProductPrice";
import MainProductImg from "../../product/MainProductImg";
import PropTypes from "prop-types";
import OptAttributeBtn from "../../buttons/OptAttributeBtn";
import ProductAttrName from "../../product/ProductAttrName";

// TODO:
// [] change color box size in css
export class ShoppingCartModProdSingle extends Component {
  constructor(props) {
    super(props);

    this.selectColorButton = this.selectColorButton.bind(this);

    this.selectSizeButton = this.selectSizeButton.bind(this);
    this.selectUsbPort = this.selectUsbPort.bind(this);
    this.selectTouchId = this.selectTouchId.bind(this);
  }

  selectSizeButton(uniqueId, size) {
    const { attrObj } = this.props.item;

    this.props.setSelectedAttribute(uniqueId, { ...attrObj, size });
  }

  selectUsbPort(uniqueId, usbAttribute) {
    const { attrObj } = this.props.item;

    this.props.setSelectedAttribute(uniqueId, {
      ...attrObj,
      usbType: usbAttribute,
    });
  }

  selectTouchId(uniqueId, touchIdAttribute) {
    const { attrObj } = this.props.item;

    this.props.setSelectedAttribute(uniqueId, {
      ...attrObj,
      touchId: touchIdAttribute,
    });
  }

  selectColorButton(uniqueId, color) {
    const { attrObj } = this.props.item;

    this.props.setSelectedAttribute(uniqueId, { ...attrObj, color });
  }

  render() {
    const { item } = this.props;
    const { uniqueId, brand, name, count, gallery, attrObj } = this.props.item;

    const { chosenCurrencyName } = this.props.currency;

    const price = findPrice(item, chosenCurrencyName);

    const textAttrArr = getAttributeArr(item, "text");
    const swatchAttrArr = getAttributeArr(item, "swatch");

    return (
      <div className="container-shopping-cart-mod-prod-single">
        <div className="left-section">
          <ProductName
            brand={brand}
            name={name}
            className="shopping-cart-mod-prod-single-name"
          />
          <ProductPrice
            price={price}
            chosenCurrencyName={chosenCurrencyName}
            className="shopping-cart-mod-prod-single-price"
          />

          <div className="attribute-section">
            {checkIfHasAttribute(item, "text") &&
              textAttrArr.map((attribute, index) => (
                <div className="text-attribute" key={index}>
                  {attribute.name === "Capacity" && (
                    <>
                      <div className="shopping-cart-modal-attr-name">
                        {attribute.name}:
                      </div>
                      {attribute.items.map((size, index) => (
                        <SizeBtn
                          className={"capacity-attr-btn-cart-modal"}
                          classNameSelected={
                            "capacity-attr-btn-cart-modal-selected"
                          }
                          key={index}
                          size={size.displayValue}
                          selectSizeButton={this.selectSizeButton.bind(
                            this,
                            uniqueId,
                            size.displayValue
                          )}
                          selectedSize={attrObj.size}
                        />
                      ))}
                    </>
                  )}
                  {attribute.name === "Size" && (
                    <>
                      <div className="shopping-cart-modal-attr-name">
                        {attribute.name}:
                      </div>
                      {attribute.items.map((size, index) => (
                        <SizeBtn
                          className={"size-attr-btn-cart-modal"}
                          classNameSelected={
                            "size-attr-btn-cart-modal-selected"
                          }
                          key={index}
                          size={size.value}
                          selectSizeButton={this.selectSizeButton.bind(
                            this,
                            uniqueId,
                            size.value
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
                          className={"opt-attr-btn-modal"}
                          classNameSelected={"opt-attr-selected-btn-modal"}
                          key={index}
                          optionalAttribute={optAttribute.displayValue}
                          selectOptAttrButton={this.selectUsbPort.bind(
                            this,
                            uniqueId,
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
                          className={"opt-attr-btn-modal"}
                          classNameSelected={"opt-attr-selected-btn-modal"}
                          key={index}
                          optionalAttribute={size.displayValue}
                          selectOptAttrButton={this.selectTouchId.bind(
                            this,
                            uniqueId,
                            size.displayValue
                          )}
                          selectedOptAttribute={attrObj.touchId}
                        />
                      ))}
                    </>
                  )}
                </div>
              ))}

            {checkIfHasAttribute(item, "swatch") &&
              swatchAttrArr.map((attribute, index) => (
                <div key={index} className="swatch-attribute">
                  <div className="shopping-cart-modal-attr-name">
                    {attribute.name}:
                  </div>
                  <div className="swatch-attribute-values">
                    {attribute.items.map((color, index) => (
                      <ColorBtn
                        key={index}
                        colorCode={color.value}
                        colorName={color.displayValue}
                        selectColorButton={this.selectColorButton.bind(
                          this,
                          uniqueId,
                          color.value
                        )}
                        selectedColorCode={attrObj.color}
                        className={"color-btn-product-modal"}
                        classNameSelected={"color-btn-product-modal-selected"}
                      />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="white-space-shopping-cart-mod-prod-single"></div>
        <div className="qty-section">
          <QuantityBtn
            plusBtnClass="shopping-cart-modal-prod-single-plus-btn"
            minusBtnClass="shopping-cart-modal-prod-single-minus-btn"
            itemCountClass="shopping-cart-modal-prod-single-item-count-btn"
            itemCount={count}
            itemId={uniqueId}
          />
        </div>

        <div className="shopping-cart-modal-prod-single-main-img-container">
          <MainProductImg
            src={gallery[0]}
            className="shopping-cart-modal-prod-single-main-img"
          />
        </div>
      </div>
    );
  }
}

ShoppingCartModProdSingle.propTypes = {
  currency: PropTypes.shape({
    chosenCurrencyName: PropTypes.string,
  }),
  item: PropTypes.object,
  chosenCurrencyName: PropTypes.string,
  cartOpen: PropTypes.bool,
  removeItem: PropTypes.func,
  setSelectedAttribute: PropTypes.func,
};

ShoppingCartModProdSingle.defaultProps = {
  currency: {
    chosenCurrencyName: "USD",
  },
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
})(ShoppingCartModProdSingle);
