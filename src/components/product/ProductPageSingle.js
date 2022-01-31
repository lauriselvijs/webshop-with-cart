import React, { Component } from "react";
import BuyCart from "../../img/buy_cart.png";
import "../../styles/product-view-single.css";
import { connect } from "react-redux";
import { selectClothesBySize } from "../../state/actions/clothesActions";
import {
  addItem,
  decQuantity,
  selectAttribute,
} from "../../state/actions/cartActions";
import { Link } from "react-router-dom";
import TrashCan from "../../img/trash_can.png";

export class ProductPageSingle extends Component {
  constructor(props) {
    super(props);
    this.addedToCart = this.addedToCart.bind(this);
    this.addedToCartSwatch = this.addedToCartSwatch.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.mouseOverCartBtn = this.mouseOverCartBtn.bind(this);
    this.mouseOutCartBtn = this.mouseOutCartBtn.bind(this);

    this.state = {
      linkDisabled: false,
      hover: false,
      count: 1,
    };
  }

  addedToCart(item, selectedSize, selectedAttributeType, count) {
    this.props.addItem({
      ...item,
      selectedSize,
      count,
    });
    this.props.selectAttribute(item.id, selectedAttributeType, selectedSize);
  }

  addedToCartSwatch(item, selectedColor, selectedAttributeType, count) {
    this.props.addItem({
      ...item,
      selectedColor,
      count,
    });
    this.props.selectAttribute(item.id, selectedAttributeType, selectedColor);
  }

  mouseOver() {
    this.setState({
      hover: true,
    });
  }

  mouseOut() {
    this.setState({
      hover: false,
    });
  }

  removeFromCart(id) {
    this.props.decQuantity(id);
  }

  mouseOverCartBtn() {
    this.setState({
      linkDisabled: true,
    });
  }

  mouseOutCartBtn() {
    this.setState({
      linkDisabled: false,
    });
  }

  render() {
    const { item } = this.props;
    const { hover, count } = this.state;
    return (
      <div
        className="card"
        onMouseEnter={this.mouseOver.bind(this, item.id)}
        onMouseLeave={this.mouseOut.bind(this, item.id)}
        title="Click on product name to view product"
      >
        <img
          src={item.img[0]}
          alt="product"
          className="product-image"
          style={{ width: "100%", height: "100%" }}
        />
        {hover && (
          <>
            {item.attributeType === "text" && (
              <>
                <img
                  src={BuyCart}
                  alt="product-cart"
                  className="product-cart"
                  style={{ width: "15%" }}
                  onClick={this.addedToCart.bind(
                    this,
                    item,
                    item.sizes[0],
                    item.attributeType,
                    count
                  )}
                />
              </>
            )}
            {item.attributeType === "swatch" && (
              <>
                <img
                  src={BuyCart}
                  alt="product-cart"
                  className="product-cart"
                  style={{ width: "15%" }}
                  onClick={this.addedToCartSwatch.bind(
                    this,
                    item,
                    item.colors[0].code,
                    item.attributeType,
                    count
                  )}
                />
              </>
            )}
            <img
              src={TrashCan}
              alt="delete-button"
              className="delete-btn"
              style={{ width: "10%" }}
              onClick={this.removeFromCart.bind(this, item.id)}
              onMouseOver={this.mouseOverCartBtn}
              onMouseOut={this.mouseOutCartBtn}
            />
          </>
        )}
        <Link className="clothes-page-single-link" to={`/clothes/${item.id}`}>
          <div className="container-product-page-single">
            <p>{item.name}</p>
            <b>${item.price}</b>
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  clothes: state.clothes,
});

export default connect(mapStateToProps, {
  addItem,
  selectClothesBySize,
  decQuantity,
  selectAttribute,
})(ProductPageSingle);
