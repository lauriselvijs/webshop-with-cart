import React, { Component } from "react";
import "../../styles/product/product-name.css";
import PropTypes from "prop-types";

export default class ProductName extends Component {
  render() {
    const { name, brand, className } = this.props;

    return (
      <div className={className}>
        <div className="brand">{brand}</div>
        <div className="name">{name}</div>
      </div>
    );
  }
}

ProductName.propTypes = {
  className: PropTypes.string,
  brand: PropTypes.string,
  name: PropTypes.string,
};

ProductName.defaultProps = {
  className: "shopping-cart-product-name",
  brand: "Sony",
  name: "Headphones",
};
