import React, { Component } from "react";
import "../../styles/product/product-name.css";
import PropTypes from "prop-types";

export default class ProductName extends Component {
  render() {
    const { name, brand, className } = this.props;

    return (
      <div className={className}>
        <h1>{brand}</h1>
        <h2>{name}</h2>
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
  className: "product-name",
  brand: "Sony",
  name: "Headphones",
};
