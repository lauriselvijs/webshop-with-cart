import React, { Component } from "react";
import "../../styles/product/product-attr-name.css";
import PropTypes from "prop-types";

export default class ProductAttrName extends Component {
  render() {
    const { name, className } = this.props;

    return <h4 className={className}>{name.toUpperCase()}:</h4>;
  }
}

ProductAttrName.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

ProductAttrName.defaultProps = {
  className: "product-attr-name",
  name: "SIZE",
};
