import React, { Component } from "react";
import "../../styles/shopping-cart-single.css";
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
import { withRouter } from "../helpers/routerHOC";
import { compose } from "redux";

export class ProductShoppingCartSingle extends Component {
  constructor(props) {
    super(props);

    this.selectButton = this.selectButton.bind(this);

    this.state = {};
  }

  selectButton(id, attribute, selectedValue) {
    this.props.selectAttribute(id, attribute, selectedValue);
  }

  render() {
    const { item } = this.props;
    return (
      <div className="container">
        <div className="left-section">
          <div className="product-info">
            <h2>{item.name}</h2>
            <h4>$ {item.price}</h4>
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
        <img className="product-image" src={item.img[0]} alt="product" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {
  selectSize,
  removeItem,
  selectAttribute,
})(ProductShoppingCartSingle);
