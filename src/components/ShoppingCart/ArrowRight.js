import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../styles/shopping-cart/arrow-right.css";

export default class ArrowRight extends Component {
  render() {
    const { src, className, alt, onRightArrowClick } = this.props;

    return (
      <img
        className={className}
        src={src}
        alt={alt}
        onClick={onRightArrowClick}
      />
    );
  }
}

ArrowRight.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  onRightArrowClick: PropTypes.func,
};

ArrowRight.defaultProps = {
  className: "right-arrow",
  src: "",
  alt: "Right Arrow",
  onRightArrowClick: () => {},
};
