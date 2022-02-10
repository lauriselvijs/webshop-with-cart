import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../styles/product-view/product-thumbnail.css";

export default class ProductThumbnail extends Component {
  render() {
    const { className, setMainImage, src, alt } = this.props;

    return (
      <img className={className} onClick={setMainImage} src={src} alt={alt} />
    );
  }
}

ProductThumbnail.propTypes = {
  className: PropTypes.string,
  setMainImage: PropTypes.func,
  src: PropTypes.string,
  alt: PropTypes.string,
};

ProductThumbnail.defaultProps = {
  className: "thumbnail",
  setMainImage: () => {},
  src: "",
  alt: "Thumbnail",
};
