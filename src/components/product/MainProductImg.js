import React, { Component } from "react";
import "../../styles/product/main-product-image.css";
import PropTypes from "prop-types";

export default class MainProductImg extends Component {
  render() {
    const { src, alt, className } = this.props;

    return <img src={src} alt={alt} className={className} />;
  }
}

MainProductImg.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

MainProductImg.defaultProps = {
  name: "Stranger",
  alt: "Product Image",
  className: "product-image",
};
