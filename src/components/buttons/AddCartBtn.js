import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../styles/buttons/add-cart-btn.css";

export default class AddCartBtn extends Component {
  render() {
    const {
      src,
      alt,
      className,
      addedToCart,
      onMouseEnterBtn,
      onMouseLeaveBtn,
    } = this.props;

    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={addedToCart}
        onMouseEnter={onMouseEnterBtn}
        onMouseLeave={onMouseLeaveBtn}
      />
    );
  }
}

AddCartBtn.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  addedToCart: PropTypes.func,
  onMouseEnterBtn: PropTypes.func,
  onMouseLeaveBtn: PropTypes.func,
};

AddCartBtn.defaultProps = {
  className: "add-cart-btn",
  src: "",
  alt: "Add To Cart Button",
  addedToCart: () => {},
  onMouseEnterBtn: () => {},
  onMouseLeaveBtn: () => {},
};
