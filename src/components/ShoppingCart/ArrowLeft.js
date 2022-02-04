import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../styles/shopping-cart/arrow-left.css";

export default class ArrowLeft extends Component {
  render() {
    const { src, className, alt, onLeftArrowClick } = this.props;

    return (
      <img
        className={className}
        src={src}
        alt={alt}
        onClick={onLeftArrowClick}
      />
    );
  }
}

ArrowLeft.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  onLeftArrowClick: PropTypes.func,
};

ArrowLeft.defaultProps = {
  className: "left-arrow",
  src: "",
  alt: "Right Arrow",
  onLeftArrowClick: () => {},
};
