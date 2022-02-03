import React, { Component } from "react";
import BuyCart from "../../img/buy_cart.png";
import "../../styles/product/product-page-single.css";
import { connect } from "react-redux";
import {
  addItem,
  decQuantity,
  setSelectedAttribute,
} from "../../state/actions/cartActions";
import { Link } from "react-router-dom";
import TrashCan from "../../img/trash_can.png";
import { formatMoney } from "../utils/formatUtils";
import PropTypes from "prop-types";
import { findPrice, getAttributeObj } from "../utils/reduceUtils";

export class ProductPageSingle extends Component {
  constructor(props) {
    super(props);
    this.addedToCart = this.addedToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseEnterBtn = this.onMouseEnterBtn.bind(this);
    this.onMouseLeaveBtn = this.onMouseLeaveBtn.bind(this);

    this.state = {
      linkDisabled: false,
      hover: false,
      count: 1,
    };
  }

  addedToCart(product, attrObj, count) {
    this.props.addItem({
      ...product,
      attrObj,
      count,
    });
    //this.props.selectAttribute(item.id, selectedAttributeType, selectedSize);
  }

  onMouseEnter() {
    this.setState({
      hover: true,
    });
  }

  onMouseLeave() {
    this.setState({
      hover: false,
    });
  }

  removeFromCart(id) {
    this.props.decQuantity(id);
  }

  onMouseEnterBtn() {
    this.setState({
      linkDisabled: true,
    });
  }

  onMouseLeaveBtn() {
    this.setState({
      linkDisabled: false,
    });
  }

  render() {
    const { product } = this.props;
    const { hover, count, linkDisabled } = this.state;
    const { chosenCurrencyName } = this.props.currency;
    const { selectedCategory } = this.props.categories;
    const price = findPrice(product, chosenCurrencyName);

    const { inStock } = product;

    const textAttrArr = getAttributeObj(product, "text");
    const swatchAttrArr = getAttributeObj(product, "swatch");

    const attrObj = {
      size: textAttrArr?.items[0].displayValue || "",
      color: swatchAttrArr?.items[0].value || "",
    };

    return (
      <div
        className={inStock ? "card" : "card-out-of-stock"}
        onMouseEnter={this.onMouseEnter.bind(this, product.id)}
        onMouseLeave={this.onMouseLeave.bind(this, product.id)}
        title="Click on product image to view product"
      >
        <Link
          className="product-page-single-link"
          to={!linkDisabled ? `/${selectedCategory}/${product.id}` : "#"}
        >
          <img
            src={product.gallery[0]}
            alt="product"
            className="product-image"
            style={{ width: "100%", height: "100%" }}
          />
          {!inStock && <div className="out-of-stock">OUT OF STOCK</div>}
          {hover && inStock && (
            <>
              <img
                src={BuyCart}
                alt="product-cart"
                className="product-cart"
                style={{ width: "15%" }}
                onClick={this.addedToCart.bind(this, product, attrObj, count)}
                onMouseEnter={this.onMouseEnterBtn.bind(this, product.id)}
                onMouseLeave={this.onMouseLeaveBtn.bind(this, product.id)}
              />

              <img
                src={TrashCan}
                alt="delete-button"
                className="delete-btn"
                style={{ width: "10%" }}
                onClick={this.removeFromCart.bind(this, product.id)}
                onMouseEnter={this.onMouseEnterBtn}
                onMouseLeave={this.onMouseLeaveBtn}
              />
            </>
          )}

          <div className="container-product-page-single">
            <p>{product.brand + " " + product.name}</p>
            <b>{formatMoney(price, chosenCurrencyName)}</b>
          </div>
        </Link>
      </div>
    );
  }
}

ProductPageSingle.propTypes = {
  product: PropTypes.object,
};

ProductPageSingle.defaultProps = {
  product: [],
};

const mapStateToProps = (state) => ({
  currency: state.currency,
  categories: state.categories,
});

export default connect(mapStateToProps, {
  addItem,
  decQuantity,
  setSelectedAttribute,
})(ProductPageSingle);
