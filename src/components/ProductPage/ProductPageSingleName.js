import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../styles/product-page/product-page-single-name.css";

export default class ProductPageSingleName extends Component {
  render() {
    const { brand, name, className } = this.props;

    return <p className={className}>{brand + " " + name}</p>;
  }
}

ProductPageSingleName.propTypes = {
  brand: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

ProductPageSingleName.defaultProps = {
  brand: "delete-btn",
  name: "",
  className: "product-page-single-name",
};
