import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../styles/product-view/product-thumbnail.css";

export default class ProductThumbnail extends Component {
  render() {
    const { className, key, setMainImage, src, alt } = this.props;

    return (
      <img
        key={key}
        className={className}
        onClick={setMainImage}
        src={src}
        alt={alt}
      />
    );
  }
}

ProductThumbnail.propTypes = {
  className: PropTypes.string,
  key: PropTypes.number,
  setMainImage: PropTypes.func,
  src: PropTypes.string,
  alt: PropTypes.string,
};

ProductThumbnail.defaultProps = {
  className: "thumbnail",
  key: 1,
  setMainImage: () => {},
  src: "",
  alt: "Thumbnail",
};
