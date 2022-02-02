import React, { Component } from "react";
import BuyCart from "../../img/buy_cart.png";
import "../../styles/product/product-view-single.css";
import { connect } from "react-redux";
import {
  addItem,
  decQuantity,
  selectAttribute,
} from "../../state/actions/cartActions";
import { Link } from "react-router-dom";
import TrashCan from "../../img/trash_can.png";
import { formatMoney } from "../utils/formatUtils";
import PropTypes from "prop-types";
import {
  findPrice,
  checkIfHasSwatch,
  checkIfHasText,
} from "../utils/reduceUtils";

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

  addedToCartSwatch(item, selectedAttributes, selectedAttributeTypes, count) {
    this.props.addItem({
      ...item,
      selectedAttributes,
      count,
    });
    this.props.selectAttribute(
      item.id,
      selectedAttributeTypes,
      selectedAttributes
    );
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
    const { product } = this.props;
    const { hover, count } = this.state;
    const { chosenCurrencyName } = this.props.currency;
    const { selectedCategory } = this.props.categories;
    const price = findPrice(product, chosenCurrencyName);

    // console.log(checkIfHasSwatch(product));
    // console.log(checkIfHasText(product));

    return (
      <div
        className="card"
        onMouseEnter={this.mouseOver.bind(this, product.id)}
        onMouseLeave={this.mouseOut.bind(this, product.id)}
        title="Click on product name to view product"
      >
        <img
          src={product.gallery[0]}
          alt="product"
          className="product-image"
          style={{ width: "100%", height: "100%" }}
        />
        {hover && (
          <>
            <img
              src={BuyCart}
              alt="product-cart"
              className="product-cart"
              style={{ width: "15%" }}
              onClick={this.addedToCart.bind(
                this,
                product,
                //product.attributes[0].items[0].displayValue,
                //product.attributes[0].type,
                count
              )}
            />

            <img
              src={TrashCan}
              alt="delete-button"
              className="delete-btn"
              style={{ width: "10%" }}
              onClick={this.removeFromCart.bind(this, product.id)}
              onMouseOver={this.mouseOverCartBtn}
              onMouseOut={this.mouseOutCartBtn}
            />
          </>
        )}
        <Link
          className="product-page-single-link"
          to={`/${selectedCategory}/${product.id}`}
        >
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
  selectAttribute,
})(ProductPageSingle);
