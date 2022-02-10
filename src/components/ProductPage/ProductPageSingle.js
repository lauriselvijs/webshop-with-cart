import React, { Component } from "react";
import BuyCart from "../../img/buy_cart.png";
import "../../styles/product-page/product-page-single.css";
import { connect } from "react-redux";
import {
  addItem,
  decQuantity,
  setSelectedAttribute,
} from "../../state/actions/cartActions";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { findPrice, getAttributeArr } from "../../utils/reduceUtils";
import MainProductImg from "../product/MainProductImg";
import OutOfStock from "./OutOfStock";
import AddCartBtn from "../buttons/AddCartBtn";
import ProductPageSingleName from "./ProductPageSingleName";
import ProductPrice from "../product/ProductPrice";

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

    const { inStock, id, brand, name, gallery } = product;

    const textAttrArr = getAttributeArr(product, "text");
    const swatchAttrArr = getAttributeArr(product, "swatch");

    const attrObj = {
      size: textAttrArr[0]?.items[0].displayValue,
      usbType: textAttrArr[1]?.items[0].displayValue,
      touchId: textAttrArr[2]?.items[0].displayValue,
      color: swatchAttrArr[0]?.items[0].value,
    };

    return (
      <div
        className={inStock ? "card" : "card-out-of-stock"}
        onMouseEnter={this.onMouseEnter.bind(this, id)}
        onMouseLeave={this.onMouseLeave.bind(this, id)}
        title="Click on product image to view product"
      >
        <Link
          className="product-page-single-link"
          to={!linkDisabled ? `/${selectedCategory}/${id}` : "#"}
        >
          <MainProductImg src={gallery[0]} />
          {!inStock && <OutOfStock />}
          {hover && inStock && (
            <>
              <AddCartBtn
                src={BuyCart}
                addedToCart={this.addedToCart.bind(
                  this,
                  product,
                  attrObj,
                  count
                )}
                onMouseEnterBtn={this.onMouseEnterBtn.bind(this, id)}
                onMouseLeaveBtn={this.onMouseLeaveBtn.bind(this, id)}
              />
            </>
          )}

          <div className="container-product-page-single-footer">
            <ProductPageSingleName
              brand={brand}
              name={name}
              className="product-page-cart-product-name"
            />
            <ProductPrice
              price={price}
              chosenCurrencyName={chosenCurrencyName}
              className="product-page-cart-product-price"
            />
          </div>
        </Link>
      </div>
    );
  }
}

ProductPageSingle.propTypes = {
  product: PropTypes.object,
  chosenCurrencyName: PropTypes.string,
  selectedCategory: PropTypes.string,
  addItem: PropTypes.func,
  decQuantity: PropTypes.func,
  setSelectedAttribute: PropTypes.func,
};

ProductPageSingle.defaultProps = {
  product: {},
  chosenCurrencyName: "USD",
  selectedCategory: "All",
  addItem: () => {},
  decQuantity: () => {},
  setSelectedAttribute: () => {},
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
