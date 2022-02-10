import React, { Component } from "react";
import "../../styles/product-view/product-desc.css";
import PropTypes from "prop-types";
import parse from "html-react-parser";

export default class ProductDesc extends Component {
  render() {
    const { description, className } = this.props;

    return <div className={className}>{parse(description)}</div>;
  }
}

ProductDesc.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
};

ProductDesc.defaultProps = {
  className: "product-desc",
  description: "New Product",
  name: "Headphones",
};
